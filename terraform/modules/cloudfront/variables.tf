variable "domain_name" {
  description = "Domain name for the website"
  type        = string
}

variable "s3_website_endpoint" {
  description = "S3 website endpoint"
  type        = string
}

variable "certificate_arn" {
  description = "ACM certificate ARN"
  type        = string
}

