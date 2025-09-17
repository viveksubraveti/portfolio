# DynamoDB Module

Creates a DynamoDB table for storing visitor count data with pay-per-request billing.

## Resources Created

- `aws_dynamodb_table` - DynamoDB table for visitor count storage

## Usage

```hcl
module "dynamodb" {
  source     = "./modules/dynamodb"
  table_name = "portfolio-visitor-count"
}
```

## Variables

| Name         | Description                | Type     | Required |
| ------------ | -------------------------- | -------- | -------- |
| `table_name` | Name of the DynamoDB table | `string` | Yes      |

## Outputs

| Name         | Description                        |
| ------------ | ---------------------------------- |
| `table_name` | Name of the created DynamoDB table |
| `table_arn`  | ARN of the DynamoDB table          |

## Table Schema

| Attribute | Type   | Key Type |
| --------- | ------ | -------- |
| `id`      | String | Hash Key |
