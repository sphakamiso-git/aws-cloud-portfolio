"use client";

import { useEffect, useState } from "react";
import { Certification } from "@/types/certifications";
import { getCertification } from "@/services/certificationService";

export function useCertifications(){
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadCertifications() {
            try {
                const data = await getCertification();
                setCertifications(data);
            } catch (err) {
                console.error("Failed to load certifications:", err);

                setError(
                    err instanceof Error
                    ? err.message
                    : "Failed to load certifications.",
                );
            } finally {
                setLoading(false);
            }
        }
        loadCertifications();
    }, []);

    return {
        certifications,
        loading,
        error,
    };
}