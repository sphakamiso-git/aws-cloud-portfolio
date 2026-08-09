"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/services/projectService";
import type { Project } from "@/types/project";

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects();
                setProjects(data);

            }catch (error){
                console.error(error);
                setError("Could not load Projects.");
                
            } finally {
                setLoading(false);
            }
        }

        loadProjects();
    }, []);

    return {
        projects,
        loading,
        error,
    };
}