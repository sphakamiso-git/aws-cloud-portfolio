import type { CreateSkillInput, Skill } from "@/types/skills";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createSkill(
    skill: CreateSkillInput,
) : Promise<Skill> {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured.");
    }

    const response = await fetch(`${API_URL}/skills`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(skill),
    });

    if (!response.ok) {
        const errorBody = await response.text();

        throw new Error(
            `Failed to create skill: ${response.status} ${errorBody}`,
        );
    }

    return response.json();
}

export async function getSkills(): Promise<Skill[]> {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/skills`);

    if (!response.ok) {
        const errorBody = await response.text();

        throw new Error(
            `Failed to retrieve skills: ${response.status} ${errorBody}`,
        );
    }

    return response.json();
}
