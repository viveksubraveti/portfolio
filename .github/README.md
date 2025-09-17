# GitHub Actions Setup

## Required Secrets

Add these secrets to your GitHub repository:

### AWS Credentials
- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key

### Infrastructure Values
- `S3_BUCKET_NAME` - `viveksubraveti-portfolio`
- `CLOUDFRONT_DISTRIBUTION_ID` - `E17TDX1FKKVQVT`

## How to Add Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret with the exact name and value

## Workflows

### 1. **Test & Build** (`test.yml`)
- Runs on: Feature branches, dev branch, PRs
- Actions: Lint, build, validate Terraform

### 2. **Deploy Portfolio** (`deploy.yml`)
- Runs on: Push to main branch
- Actions: Build frontend, deploy to S3, invalidate CloudFront

### 3. **Deploy Infrastructure** (`infrastructure.yml`)
- Runs on: Manual trigger only
- Actions: Terraform plan/apply/destroy

## Branch Strategy

```
feature/your-feature → develop → main
```

- **Feature branches**: Run tests only
- **Develop branch**: Run tests only  
- **Main branch**: Deploy to production
- **Manual**: Infrastructure changes