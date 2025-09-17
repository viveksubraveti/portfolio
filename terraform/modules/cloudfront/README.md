# CloudFront Module

Creates a CloudFront distribution for global content delivery with custom domain and HTTPS.

## Resources Created

- `aws_cloudfront_distribution` - CDN distribution with custom domain

## Usage

```hcl
module "cloudfront" {
  source               = "./modules/cloudfront"
  domain_name          = "example.com"
  s3_website_endpoint  = "example.com.s3-website-us-east-1.amazonaws.com"
  certificate_arn      = "arn:aws:acm:us-east-1:123456789012:certificate/..."
}
```

## Variables

| Name                  | Description                 | Type     | Required |
| --------------------- | --------------------------- | -------- | -------- |
| `domain_name`         | Domain name for the website | `string` | Yes      |
| `s3_website_endpoint` | S3 website endpoint         | `string` | Yes      |
| `certificate_arn`     | ACM certificate ARN         | `string` | Yes      |

## Outputs

| Name              | Description                         |
| ----------------- | ----------------------------------- |
| `distribution_id` | CloudFront distribution ID          |
| `domain_name`     | CloudFront distribution domain name |
| `hosted_zone_id`  | CloudFront hosted zone ID           |
