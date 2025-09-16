# Portfolio Infrastructure

This Terraform configuration creates a complete serverless portfolio infrastructure on AWS.

## Architecture

```
Internet → Route53 → CloudFront → S3 (Static Website)
                                ↓
                            DynamoDB (Visitor Count)
```

## Resources Created

- **S3 Bucket**: Static website hosting
- **CloudFront**: CDN with HTTPS and custom domain
- **Route53**: DNS records for domain and www subdomain
- **SSL Certificate**: Free HTTPS certificate via ACM
- **DynamoDB**: Visitor count storage

## Prerequisites

- AWS CLI configured with appropriate permissions
- Terraform >= 1.0 installed
- Domain purchased and hosted zone created in Route53

## Usage

1. **Configure variables**:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   # Edit terraform.tfvars with your values
   ```

2. **Deploy infrastructure**:
   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

3. **Upload website files**:
   ```bash
   aws s3 sync ../frontend/out/ s3://your-bucket-name/
   ```

## Variables

| Name | Description | Type | Default |
|------|-------------|------|---------|
| `domain_name` | Your domain name | `string` | - |
| `bucket_name` | S3 bucket name | `string` | - |
| `aws_region` | AWS region | `string` | `us-east-1` |
| `dynamodb_table_name` | DynamoDB table name | `string` | `portfolio-visitor-count` |
| `protocol` | Website protocol | `string` | `https` |

## Outputs

| Name | Description |
|------|-------------|
| `website_url` | Main website URL |
| `www_url` | WWW subdomain URL |
| `s3_bucket_name` | S3 bucket name |
| `cloudfront_distribution_id` | CloudFront distribution ID |
| `dynamodb_table_name` | DynamoDB table name |

## Modules

- [`s3-website`](./modules/s3-website/README.md) - S3 static website hosting
- [`cloudfront`](./modules/cloudfront/README.md) - CloudFront CDN distribution
- [`ssl-certificate`](./modules/ssl-certificate/README.md) - ACM SSL certificate
- [`route53`](./modules/route53/README.md) - DNS records management
- [`dynamodb`](./modules/dynamodb/README.md) - DynamoDB table for visitor count

## Cost Estimation

- **S3**: ~$1-2/month (storage + requests)
- **CloudFront**: ~$1-5/month (data transfer)
- **Route53**: $0.50/month (hosted zone)
- **DynamoDB**: Pay-per-request (minimal cost)
- **ACM Certificate**: Free

**Total**: ~$3-8/month

## Cleanup

```bash
terraform destroy
```

**Note**: Manually delete S3 bucket contents before destroying if not empty.