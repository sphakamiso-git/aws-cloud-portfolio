import type {
    APIGatewayProxyEventV2,
    APIGatewayProxyResultV2,    
}from "aws-lambda";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
} from "@aws-sdk/lib-dynamodb";

const dynamoClient = new DynamoDBClient({});
const documentClient = DynamoDBDocumentClient.from(dynamoClient);

const tableName = process.env.TABLE_NAME;

export async function handler (
    _event: APIGatewayProxyEventV2,

): Promise<APIGatewayProxyResultV2> {
    if (!tableName) {
        return {
            statusCode: 500,
            body: JSON.stringify({message:"TABLE_NAME environment variable is not configured",

            }),
        };
    }


const result = await documentClient.send(new ScanCommand({
    TableName: tableName,
}),
);

const projects = (result.Items ?? []).sort((first, second) => {
    const firstDate = first.createdAt ?? "";
    const secondDate = second.createdAt ?? "";

    return secondDate.localeCompare(firstDate);
});

return {
    statusCode: 200,
    headers: {
        "content-type" : "application/json",
    },
    body: JSON.stringify(projects),
};
}