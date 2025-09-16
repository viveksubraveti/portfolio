# Route53 Module

Creates DNS records to point domain and www subdomain to CloudFront distribution.

## Resources Created

- `aws_route53_record` - A record for main domain
- `aws_route53_record` - A record for www subdomain

## Usage

```hcl
module "route53" {
  source                     = "./modules/route53"
  domain_name               = "example.com"
  cloudfront_domain_name    = "d123456789.cloudfront.net"
  cloudfront_hosted_zone_id = "Z2FDTNDATAQYW2"
  certificate_arn           = "arn:aws:acm:us-east-1:123456789012:certificate/..."
}
```

## Variables

| Name | Description | Type | Required |
|------|-------------|------|----------|
| `domain_name` | Domain name | `string` | Yes |
| `cloudfront_domain_name` | CloudFront distribution domain | `string` | Yes |
| `cloudfront_hosted_zone_id` | CloudFront hosted zone ID | `string` | Yes |
| `certificate_arn` | ACM certificate ARN | `string` | Yes |

## Outputs

| Name | Description |
|------|-------------|
| `hosted_zone_id` | Route53 hosted zone ID |

## Features

- A records with CloudFront aliases
- Both domain.com and www.domain.com supported
- Automatic health checks disabled (not needed for CloudFront)
- Uses existing hosted zone

## Prerequisites

- Domain must be registered and hosted zone created in Route53
- CloudFront distribution must exist