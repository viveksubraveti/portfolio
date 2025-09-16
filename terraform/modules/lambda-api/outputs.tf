output "api_gateway_url" {
  description = "API Gateway URL"
  value       = "${aws_api_gateway_rest_api.visitor_api.execution_arn}/prod"
}

output "api_gateway_invoke_url" {
  description = "API Gateway invoke URL"
  value       = "https://${aws_api_gateway_rest_api.visitor_api.id}.execute-api.${data.aws_region.current.id}.amazonaws.com/prod"
}

data "aws_region" "current" {}