"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import type { CreateSkillInput } from "@/types/skills";
import { createSkill } from "@/services/skillService";
import Notification from "@/components/ui/Notification";

type FormSubmitHandler = ComponentPropsWithoutRef<"form">["onSubmit"];

const skillCategories = [
    { label: "Cloud", value: "Cloud" },
    { label: "Programming", value: "Programming"},
    { label: "DevOps", value: "DevOps"},
    { label: "Linux", value: "Linux"},
    { label: "Networking", value: "Networking"},
    { label: "Security", value: "Security"},
    { label: "Databases", value: "Databases"},
    { label: "Web Development", value: "Web Development"},
    { label: "Tools", value: "Tools"}

];

export default function SkillForm(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const[message, setMessage] = useState("");
    const [notificationType, setNotificationType] = useState<"success" | "error">("success");

    // const handleSubmit: FormSubmitHandler = (event) => {
    //     event.preventDefault();

    //     // console.log({
    //     //     name,
    //     //     description,
    //     //     category,
    //     // });
    //     const skill : CreateSkillInput = {
    //         name, 
    //         description,
    //         category,
    //     };
    //     console.log(skill);
    // };
    const handleSubmit: FormSubmitHandler = async (event) => {
        
        event?.preventDefault();

        const skill: CreateSkillInput = {
            name,
            description,
            category,
        };

        try{
            await createSkill(skill);
            
            setNotificationType("success");
            setMessage("Skill added successfully.");

            setName("");
            setDescription("");
            setCategory("");

        }catch (error){
            // console.log("Failed to create skill:", error);
            setNotificationType("error");

            setMessage(
                error instanceof Error
                ? error.message
                : "Failed to add skill",
            );
        }
    };
    

    return (
       
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
             {message && (<Notification type={notificationType} message={message}/>)}
            <TextInput
                id="name"
                label="Skill name"
                value={name}
                onChange={setName}
                placeholder="AWS"
                
            />

            <TextArea
                id="description"
                label="Description"
                value={description}
                onChange={setDescription}
                placeholder="Building and operating cloud infrastructure."
                
            />

            <Select
                id="category"
                label="Category"
                value={category}
                options={skillCategories}
                onChange={setCategory}

            />

            <Button type="submit">
                Add
            </Button>
        </form>
    );
}