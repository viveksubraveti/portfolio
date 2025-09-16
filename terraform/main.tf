terraform {
  required_version = ">= 1.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.13.0"
    }
  }
  
  backend "s3" {
    # Configuration will be provided via backend.hcl
  }
}

provider "aws" {
  region = var.aws_region
}

provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}

module "s3_website" {
  source      = "./modules/s3-website"
  bucket_name = var.bucket_name
  domain_name = var.domain_name
}

module "cloudfront" {
  source               = "./modules/cloudfront"
  domain_name          = var.domain_name
  s3_website_endpoint  = module.s3_website.website_endpoint
  certificate_arn      = module.ssl_certificate.certificate_arn
  
  depends_on = [module.ssl_certificate]
}

module "ssl_certificate" {
  source      = "./modules/ssl-certificate"
  domain_name = var.domain_name
  
  providers = {
    aws = aws.us_east_1
  }
}

module "route53" {
  source                     = "./modules/route53"
  domain_name               = var.domain_name
  cloudfront_domain_name    = module.cloudfront.domain_name
  cloudfront_hosted_zone_id = module.cloudfront.hosted_zone_id
  certificate_arn           = module.ssl_certificate.certificate_arn
}

module "dynamodb" {
  source     = "./modules/dynamodb"
  table_name = var.dynamodb_table_name
}

module "lambda_api" {
  source             = "./modules/lambda-api"
  dynamodb_table_arn = module.dynamodb.table_arn
}