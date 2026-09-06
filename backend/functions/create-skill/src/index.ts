import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    PutCommand,

} from "@aws-sdk/lib-dynamodb";

import type {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
} from "aws-lambda";

const dynamoClient = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(dynamoClient);

const TABLE_NAME = process.env.TABLE_NAME;

interface CreateSkillRequest {
    name: string;
    description: string;
    category: string;
}

export async function handler (
    event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
    if (!TABLE_NAME) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "TABLE_NAME environment variable is not configured.",
            }),
        };
    }

    if (!event.body){
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Request body is required",
            }),
        };
    }

    let request: CreateSkillRequest;

    try {
        request = JSON.parse(event.body);
    } catch {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Request body must be valid JSON",
            }),
        };
    }

    if (
        !request.name ||
        !request.description ||
        !request.category
    ) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "name, description, and category are required",
            }),
        };
    }

    const now = new Date().toISOString();

    const skill = {
        skillId: crypto.randomUUID(),
        name: request.name,
        description: request.description,
        category: request.category,
        createdAt: now,
        updatedAt: now,
    };

    await documentClient.send(
        new PutCommand({
            TableName: TABLE_NAME,
            Item: skill,
        }),
    );

    return {
        statusCode: 201,
        body: JSON.stringify(skill),
    };
}