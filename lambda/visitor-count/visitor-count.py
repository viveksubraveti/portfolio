import json
import boto3  # type: ignore
from botocore.exceptions import ClientError  # type: ignore

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('portfolio-visitor-count')

def lambda_handler(event, context):
    # CORS headers for all responses
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
    
    try:
        # Get current count
        response = table.get_item(Key={'id': 'visitor-count'})
        
        if 'Item' in response:
            current_count = int(response['Item']['count'])
        else:
            current_count = 0
        
        # Increment count
        new_count = current_count + 1
        
        # Update count in DynamoDB
        table.put_item(Item={'id': 'visitor-count', 'count': new_count})
        
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'count': new_count})
        }
        
    except ClientError as e:
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': str(e)})
        }