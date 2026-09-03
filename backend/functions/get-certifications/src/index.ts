import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
} from "@aws-sdk/lib-dynamodb";

import type {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
} from "aws-lambda";

const dynamoClient = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(dynamoClient);

const TABLE_NAME = process.env.TABLE_NAME;

export async function handler(
    event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
    if (!TABLE_NAME) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "TABLE_NAME environment variable is not configured",
            }),
        };
    }


const result = await documentClient.send (
    new ScanCommand({
        TableName: TABLE_NAME,
    }),
);

const certifications = result.Items ?? [];

return {
    statusCode: 200,
    body: JSON.stringify(certifications),
};
}