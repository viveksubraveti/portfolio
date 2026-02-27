import json
import logging
import boto3  # type: ignore
from botocore.exceptions import ClientError  # type: ignore

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('portfolio-visitor-count')

ALLOWED_ORIGINS = [
    'https://www.viveksubraveti.com',
    'https://viveksubraveti.com',
]

def get_cors_origin(event):
    origin = event.get('headers', {}).get('origin', '') or event.get('headers', {}).get('Origin', '')
    if origin in ALLOWED_ORIGINS:
        return origin
    return ALLOWED_ORIGINS[0]

def lambda_handler(event, context):
    origin = get_cors_origin(event)

    cors_headers = {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
    }

    http_method = event.get('httpMethod', '')
    if http_method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': ''
        }

    if http_method != 'GET':
        return {
            'statusCode': 405,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        # Atomic increment — no race condition
        response = table.update_item(
            Key={'id': 'visitor-count'},
            UpdateExpression='ADD #count :val',
            ExpressionAttributeNames={'#count': 'count'},
            ExpressionAttributeValues={':val': 1},
            ReturnValues='UPDATED_NEW'
        )
        new_count = int(response['Attributes']['count'])
        logger.info(f"Visitor count updated to {new_count}")

        return {
            'statusCode': 200,
            'headers': cors_headers,
            'body': json.dumps({'count': new_count})
        }

    except ClientError as e:
        logger.error(f"DynamoDB error: {e}")
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Internal server error'})
        }
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Internal server error'})
        }
