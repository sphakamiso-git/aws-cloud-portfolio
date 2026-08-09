"use client";
import { useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import type { CreateProjectInput } from "@/types/project";
import { createProject } from "@/services/projectService";
import Notification from "@/components/ui/Notification";
import TextInput from "@/components/ui/TextInput";
import TextArea from "@/components/ui/TextArea";
import Checkbox from "../ui/Checkbox";
import Button from "@/components/ui/Button";

type FormSubmitHandler = ComponentPropsWithoutRef<"form">["onSubmit"];

export default function ProjectForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");
    const [featured, setFeatured] = useState(false);
   
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;

    } | null>(null);

    const handleSubmit: FormSubmitHandler = async (event) => {
    event?.preventDefault();

     const project: CreateProjectInput = {
            title,
            description,
            technologies: technologies
            .split(",")
            .map((technology) => technology.trim())
            .filter(Boolean),
            githubUrl,
            liveUrl,
            featured,
        };

        // console.log(project);
        try{
            const createdProject = await createProject(project);

            console.log("Project created successfully!", createProject);
            setNotification({
                type: "success",
                message: "Project created successfully!"
            });

            setTitle("");
            setDescription("");
            setTechnologies("");
            setGithubUrl("");
            setLiveUrl("");
            setFeatured(false);
         
           
        }catch (error){
            console.error("Failed to create project", error);
            setNotification({
                type: "error",
                message: "Failed to create project",
            });
        }
        };
        
    return (
        <>

            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                />
            )}
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            <div>

                <TextInput
                    id="title"
                    label="Project Title"
                    value={title}
                    placeholder="AWS Monthly Cost Report"
                    onChange={setTitle}
                />

            </div>

            <div>
                    <TextArea
                        id="description"
                        label="Description"
                        value={description}
                        onChange={setDescription}
                    />
                
            </div>

            <div>
 

                <TextInput
                    id="technologies"
                    label="Technologies"
                    value={technologies}
                    placeholder="Lambda, TypeScript, DynamoDB"
                    onChange={setTechnologies}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
 

                    <TextInput
                        id="githubUrl"
                        label="Github URL"
                        type="url"
                        value={githubUrl}
                        placeholder="https://github.com/..."
                        onChange={setGithubUrl}
                    />
                </div>      

            <div>
                
                <TextInput
                    id="liveUrl"
                    label="Live Demo URL"
                    type="url"
                    value={liveUrl}
                    placeholder="https://..."
                    onChange={setLiveUrl}
                />
            </div>
         </div>
        <div className="flex items-center gap-3">

            <Checkbox
                id="featured"
                label="Feature this project on the homepage"
                checked={featured}
                onChange={setFeatured}
            />

            <label htmlFor="featured" className="text-sm text-zinc-300">
                Feature this project on the homepage
            </label>
            </div>

            <Button type="submit">
                Save Project
            </Button>

        </form>
        </>
    );
}