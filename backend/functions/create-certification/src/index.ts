import { DynamoDBClient,} from "@aws-sdk/client-dynamodb";

import { DynamoDBDocumentClient, PutCommand,} from "@aws-sdk/lib-dynamodb";
import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

const dynamoClient = new DynamoDBClient({});

const documentClient = DynamoDBDocumentClient.from(dynamoClient);

const TABLE_NAME = process.env.TABLE_NAME;

type CreateCertificationRequest = {
    name: string;
    issuer: string;
    credentialUrl: string;
    imageUrl:string;
};


export async function handler(
    event: APIGatewayProxyEventV2,

): Promise<APIGatewayProxyResultV2> {
    if(!TABLE_NAME) {
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
                message: "Request body is required.",
            }),
        };
    }

    let request: CreateCertificationRequest;

    try {
        request = JSON.parse(event.body) as CreateCertificationRequest;
    }catch {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Request body must contain valid JSON."
            }),
        };
    }

    if (
        !request.name ||
        !request.issuer ||
        !request.credentialUrl ||
        !request.imageUrl
    ) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "name, issuer, credentialUrl and imageUrl are required",
            }),
        };
    }

  

    const now = new Date().toISOString();

    const certification = {
        certificationId: crypto.randomUUID(),
        name: request.name,
        issuer: request.issuer,
        credentialURL: request.credentialUrl,
        imageUrl: request.imageUrl,
        createdAt: now,
        updatedAt: now, 
    };

    await documentClient.send(
        new PutCommand({
            TableName: TABLE_NAME,
            Item: certification,
        }),
    );

    return {
        statusCode: 201,
        body: JSON.stringify(certification),
    };
}