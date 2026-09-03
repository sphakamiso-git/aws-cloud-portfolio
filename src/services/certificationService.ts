import { Certification, CreateCertificationInput, } from "@/types/certifications";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createCertification(
    certification: CreateCertificationInput,
): Promise<Certification> {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/certifications`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(certification),
    });

    if (!response.ok) {
        const errorBody = await response.text();

        throw new Error(
            `Failed to create certification: ${response.status} ${errorBody}`,
        );
    }

    return response.json();
}

export async function getCertification(): Promise<Certification[]> {
    if (!API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured");
    }

    const response = await fetch(`${API_URL}/certifications`);

    if (!response.ok) {
        const errorBody = await response.text();

        throw new Error(
            `Failed to get certifications: ${response.status} ${errorBody}`,
        );
    }

    return response.json();
}