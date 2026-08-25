"use client";

import { useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import Notification from "@/components/ui/Notification";
import { createCertification } from "@/services/certificationService";

import type { CreateCertificationInput } from "@/types/certifications";

type FormSubmitHandler =
  ComponentPropsWithoutRef<"form">["onSubmit"];

export default function CertificationForm() {
  const [name, setName] = useState("");
  const [issuer, setIssuer] = useState("");
  const [credentialUrl, setCredentialUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit: FormSubmitHandler = async (event) => {
    event?.preventDefault();

    const certification: CreateCertificationInput = {
      name,
      issuer,
      credentialUrl,
      imageUrl,
    };

    try{
      const createdCertification = 
           await createCertification(certification);

      console.log(
          "Certification created successfully!",
          createdCertification,
      );

          setNotification({
      type: "success",
      message: "Certification form is working.",
    });

    setName("");
    setIssuer("");
    setCredentialUrl("");
    setImageUrl("");
    
    }catch(error) {
      console.error("Failed to create certification", error);

      setNotification({
        type:"error",
        message: "Failed to create certification.",
      });
    }

    // console.log("Certification:", certification);


  };

  return (
    <div className="mt-8">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        />
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6"
      >
        <TextInput
          id="name"
          label="Certification Name"
          value={name}
          placeholder="AWS DevOps Engineer Professional"
          onChange={setName}
        />

        <TextInput
          id="issuer"
          label="Issuer"
          value={issuer}
          placeholder="Amazon Web Services"
          onChange={setIssuer}
        />

        <TextInput
          id="credentialUrl"
          label="Credential URL"
          type="url"
          value={credentialUrl}
          placeholder="https://..."
          onChange={setCredentialUrl}
        />

        <TextInput
          id="imageUrl"
          label="Badge Image URL"
          type="url"
          value={imageUrl}
          placeholder="https://..."
          onChange={setImageUrl}
        />

        <Button type="submit">
          Save Certification
        </Button>
      </form>
    </div>
  );
}