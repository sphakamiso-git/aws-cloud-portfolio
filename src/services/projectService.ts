import type { CreateProjectInput } from '@/types/project';
//import { error } from 'console';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createProject(project: CreateProjectInput){
    const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify(project),
    });

    if (!response.ok){
        throw new Error("Failed to create project");
    }

    return response.json();
}

export async function getProjects () {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }
    const response = await fetch(`${API_URL}/projects`, {
        method: "GET",
    });

    if (!response.ok){
        const errorBody = await response.text();

        throw new Error(
            `Failed to get projects: ${response.status} ${errorBody}`,
        );
    }
    return response.json();
}