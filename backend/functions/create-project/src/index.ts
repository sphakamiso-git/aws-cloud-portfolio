import type {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,
} from "aws-lambda";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";

const dynamoClient = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(dynamoClient);

const tableName = process.env.TABLE_NAME;

type CreateProjectRequest = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
};

export async function handler(
    event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
    if (!tableName){
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "TABLE_NAME environment variable is not configured.",
            }),
        };
    }

    if(!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Request body is required.",
            }),
        };
    }

    let request: CreateProjectRequest;

    try {
        request = JSON.parse(event.body) as CreateProjectRequest;
    } catch {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Request body must contain valid JSON.",
            }),
        };
    }

    if (
        !request.title?.trim() ||
        !request.description?.trim() ||
        !Array.isArray(request.technologies)
    ) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Title, description and Technologies are requred.",
            }),
        };
    }

    const timestamp = new Date().toISOString();

    const project = {
        projectId: randomUUID(),
        title: request.title.trim(),
        description: request.description.trim(),
        technologies: request.technologies,
        guthubUrl: request.githubUrl?.trim() || null,
        liveUrl: request.liveUrl?.trim() || null,
        featured: request.featured ?? false,
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    await documentClient.send(
        new PutCommand({
            TableName: tableName,
            Item: project,
        }),
    );

    return {
        statusCode: 201,
        headers: {
            "content-type": "application/json",
        },
        body:JSON.stringify(project),
    };
    
}