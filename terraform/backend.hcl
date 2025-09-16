# Backend configuration for S3 state storage
# Usage: terraform init -backend-config=backend.hcl

bucket         = "viveksubraveti-portfolio-terraform-state"
key            = "portfolio/terraform.tfstate"
region         = "us-east-1"
dynamodb_table = "viveksubraveti-portfolio-terraform-locks"
encrypt        = true