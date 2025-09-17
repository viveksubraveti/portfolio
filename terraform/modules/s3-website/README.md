# S3 Website Module

Creates an S3 bucket configured for static website hosting with public read access.

## Resources Created

- `aws_s3_bucket` - S3 bucket for static files
- `aws_s3_bucket_website_configuration` - Website hosting configuration
- `aws_s3_bucket_public_access_block` - Public access settings
- `aws_s3_bucket_policy` - Bucket policy for public read access

## Usage

```hcl
module "s3_website" {
  source      = "./modules/s3-website"
  bucket_name = "my-portfolio-bucket"
  domain_name = "example.com"
}
```

## Variables

| Name          | Description                 | Type     | Required |
| ------------- | --------------------------- | -------- | -------- |
| `bucket_name` | Name of the S3 bucket       | `string` | Yes      |
| `domain_name` | Domain name for the website | `string` | Yes      |

## Outputs

| Name               | Description                   |
| ------------------ | ----------------------------- |
| `bucket_name`      | Name of the created S3 bucket |
| `website_endpoint` | S3 website endpoint URL       |
| `bucket_arn`       | ARN of the S3 bucket          |
