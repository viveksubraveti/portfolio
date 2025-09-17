# Terraform Backend Setup

## Step 1: Create Backend Infrastructure

First, deploy the backend resources (S3 bucket and DynamoDB table):

```bash
# Initialize and apply to create backend resources
terraform init
terraform apply
```

This creates:

- S3 bucket: `s3-bucket-name`
- DynamoDB table: `dynamodb-table-name`

## Step 2: Configure Backend

After the backend resources are created, configure Terraform to use them:

```bash
# Reinitialize with backend configuration
terraform init -backend-config=backend.hcl
```

When prompted, type `yes` to copy existing state to the new backend.

## Step 3: Update main.tf (Optional)

You can add the backend configuration directly to main.tf:

```hcl
terraform {
  backend "s3" {
    bucket         = "bucket-name"
    key            = "portfolio/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "dynamodb-table-name"
    encrypt        = true
  }
}
```

## Verification

Check that state locking works:

```bash
terraform plan  # Should show "Acquiring state lock"
```

## Benefits

- ✅ **Remote State**: State stored in S3, accessible by team
- ✅ **State Locking**: Prevents concurrent modifications
- ✅ **Versioning**: S3 versioning enabled for state history
- ✅ **Encryption**: State encrypted at rest
- ✅ **Security**: S3 bucket blocks public access
