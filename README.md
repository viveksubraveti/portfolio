# Portfolio

A modern, serverless portfolio website showcasing cloud engineering skills with AWS services and modern web technologies.

## Architecture

- **Frontend**: Next.js static site hosted on S3
- **CDN**: CloudFront for global content delivery
- **Database**: DynamoDB for visitor count tracking
- **API**: Lambda function for visitor count API
- **Infrastructure**: Terraform for Infrastructure as Code
- **CI/CD**: GitHub Actions for automated deployment

## Live Demo

[Visit Portfolio](https://your-cloudfront-url.cloudfront.net)

## Technologies Used

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Cloud**: AWS (S3, CloudFront, Lambda, DynamoDB, API Gateway)
- **Infrastructure**: Terraform
- **CI/CD**: GitHub Actions
- **Version Control**: Git with feature branch workflow

## Project Structure

```
portfolio/
├── frontend/           # Next.js application
├── terraform/          # Infrastructure as Code
├── lambda/            # Serverless functions
├── .github/workflows/ # CI/CD pipelines
└── scripts/           # Deployment scripts
```

## Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

### Prerequisites

- AWS CLI configured
- Terraform installed
- GitHub repository with required secrets

### Infrastructure Deployment

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### Automated Deployment

- Push to `main` branch triggers automatic deployment via GitHub Actions
- Pipeline builds static site and deploys to S3
- CloudFront cache invalidation ensures fresh content

## Configuration

### Required GitHub Secrets

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Features

- Responsive design with dark/light theme
- Real-time visitor counter
- Professional certifications showcase
- SEO optimized
- Fast loading with CloudFront CDN

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
