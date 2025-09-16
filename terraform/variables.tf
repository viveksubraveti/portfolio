variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "domain_name" {
  description = "Domain name for the portfolio"
  type        = string
}

variable "bucket_name" {
  description = "S3 bucket name for static website"
  type        = string
}

variable "dynamodb_table_name" {
  description = "DynamoDB table name for visitor count"
  type        = string
  default     = "portfolio-visitor-count"
}

variable "protocol" {
  description = "Protocol for website (http or https)"
  type        = string
  default     = "https"
}