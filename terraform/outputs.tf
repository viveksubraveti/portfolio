output "website_url" {
  description = "Website URL"
  value       = "${var.protocol}://${var.domain_name}"
}

output "www_url" {
  description = "WWW subdomain URL"
  value       = "${var.protocol}://www.${var.domain_name}"
}

output "s3_bucket_name" {
  description = "S3 bucket name"
  value       = module.s3_website.bucket_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.cloudfront.distribution_id
}

output "dynamodb_table_name" {
  description = "DynamoDB table name"
  value       = module.dynamodb.table_name
}

output "api_gateway_url" {
  description = "API Gateway URL for visitor count"
  value       = module.lambda_api.api_gateway_invoke_url
}

output "terraform_state_bucket" {
  description = "S3 bucket for Terraform state"
  value       = aws_s3_bucket.terraform_state.bucket
}

output "terraform_lock_table" {
  description = "DynamoDB table for Terraform state locking"
  value       = aws_dynamodb_table.terraform_locks.name
}