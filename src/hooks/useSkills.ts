import { useEffect, useState } from "react";

import { getSkills } from "@/services/skillService";
import type { Skill } from "@/types/skills";

export function useSkills() {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadSkills(){
            try {
                const data = await getSkills();

                setSkills(data);
            } catch (error) {
                setError(
                    error instanceof Error
                    ? error.message
                    : "Failed to load skills", 
                );
            } finally {
                setLoading(false);
            }
        } loadSkills();
    }, []);

    return {
        skills,
        loading,
        error,
    };
}

