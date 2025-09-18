# Lambda function
resource "aws_lambda_function" "visitor_count" {
  filename         = "visitor-count.zip"
  function_name    = "portfolio-visitor-count"
  role            = aws_iam_role.lambda_role.arn
  handler         = "visitor-count.lambda_handler"
  runtime         = "python3.11"
  timeout         = 10

  depends_on = [data.archive_file.lambda_zip]
}

# Create ZIP file for Lambda
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.root}/../lambda/visitor-count/visitor-count.py"
  output_path = "visitor-count.zip"
}

# IAM role for Lambda
resource "aws_iam_role" "lambda_role" {
  name = "portfolio-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

# IAM policy for Lambda
resource "aws_iam_role_policy" "lambda_policy" {
  name = "portfolio-lambda-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "arn:aws:logs:*:*:*"
      },
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem"
        ]
        Resource = var.dynamodb_table_arn
      }
    ]
  })
}

# API Gateway
resource "aws_api_gateway_rest_api" "visitor_api" {
  name = "portfolio-visitor-api"
}

resource "aws_api_gateway_resource" "visitor_resource" {
  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  parent_id   = aws_api_gateway_rest_api.visitor_api.root_resource_id
  path_part   = "visitor-count"
}

resource "aws_api_gateway_method" "visitor_method" {
  rest_api_id   = aws_api_gateway_rest_api.visitor_api.id
  resource_id   = aws_api_gateway_resource.visitor_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

# OPTIONS method for CORS
resource "aws_api_gateway_method" "visitor_options" {
  rest_api_id   = aws_api_gateway_rest_api.visitor_api.id
  resource_id   = aws_api_gateway_resource.visitor_resource.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "visitor_integration" {
  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  resource_id = aws_api_gateway_resource.visitor_resource.id
  http_method = aws_api_gateway_method.visitor_method.http_method

  integration_http_method = "POST"  # Lambda always uses POST
  type                   = "AWS_PROXY"
  uri                    = aws_lambda_function.visitor_count.invoke_arn
}

# OPTIONS integration for CORS
resource "aws_api_gateway_integration" "visitor_options_integration" {
  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  resource_id = aws_api_gateway_resource.visitor_resource.id
  http_method = aws_api_gateway_method.visitor_options.http_method

  type = "MOCK"
  request_templates = {
    "application/json" = "{\"statusCode\": 200}"
  }
}

# OPTIONS method response
resource "aws_api_gateway_method_response" "visitor_options_response" {
  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  resource_id = aws_api_gateway_resource.visitor_resource.id
  http_method = aws_api_gateway_method.visitor_options.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

# OPTIONS integration response
resource "aws_api_gateway_integration_response" "visitor_options_integration_response" {
  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  resource_id = aws_api_gateway_resource.visitor_resource.id
  http_method = aws_api_gateway_method.visitor_options.http_method
  status_code = aws_api_gateway_method_response.visitor_options_response.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS,POST,PUT'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visitor_count.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.visitor_api.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "visitor_deployment" {
  depends_on = [
    aws_api_gateway_method.visitor_method,
    aws_api_gateway_integration.visitor_integration,
    aws_api_gateway_method.visitor_options,
    aws_api_gateway_integration.visitor_options_integration,
    aws_api_gateway_integration_response.visitor_options_integration_response,
  ]

  rest_api_id = aws_api_gateway_rest_api.visitor_api.id
  
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "visitor_stage" {
  deployment_id = aws_api_gateway_deployment.visitor_deployment.id
  rest_api_id   = aws_api_gateway_rest_api.visitor_api.id
  stage_name    = "prod"
}