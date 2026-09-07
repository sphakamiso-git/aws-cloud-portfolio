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

const documentClient = DynamoDBDocumentClient.from(
    dynamoClient,
);

const TABLE_NAME = process.env.TABLE_NAME;

export const handler = async (
    _event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> => {
    if (!TABLE_NAME) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "TABLE_NAME is not configured",
            }),
        };
    }

    try {
        const command = new ScanCommand({
            TableName: TABLE_NAME,
        });

        const response = await documentClient.send(command);

        const skills = response.Items ?? [];

        return {
            statusCode: 200,
            body: JSON.stringify(skills),
        };
 
    } catch (error) {
        console.error("Failed to retrieve skills:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to retrieve skills.",
            }),
        };
    }
};