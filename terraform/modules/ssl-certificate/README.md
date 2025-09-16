# SSL Certificate Module

Creates and validates an ACM SSL certificate for custom domain with DNS validation.

## Resources Created

- `aws_acm_certificate` - SSL certificate for domain and www subdomain
- `aws_acm_certificate_validation` - Certificate validation
- `aws_route53_record` - DNS validation records

## Usage

```hcl
module "ssl_certificate" {
  source      = "./modules/ssl-certificate"
  domain_name = "example.com"
  
  providers = {
    aws = aws.us_east_1  # ACM certificates for CloudFront must be in us-east-1
  }
}
```

## Variables

| Name | Description | Type | Required |
|------|-------------|------|----------|
| `domain_name` | Domain name for the certificate | `string` | Yes |

## Outputs

| Name | Description |
|------|-------------|
| `certificate_arn` | ARN of the validated SSL certificate |

## Features

- Free SSL certificate via AWS Certificate Manager
- DNS validation (automatic)
- Covers both domain.com and www.domain.com
- Auto-renewal by AWS
- Compatible with CloudFront

## Important Notes

- Certificate must be created in `us-east-1` region for CloudFront
- Requires existing Route53 hosted zone for DNS validation
- Validation can take 5-10 minutes