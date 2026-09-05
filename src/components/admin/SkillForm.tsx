"use client";

import { useState, type ComponentPropsWithoutRef } from "react";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import type { CreateSkillInput } from "@/types/skills";

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

    const handleSubmit: FormSubmitHandler = (event) => {
        event.preventDefault();

        // console.log({
        //     name,
        //     description,
        //     category,
        // });
        const skill : CreateSkillInput = {
            name, 
            description,
            category,
        };
        console.log(skill);
    };
    

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

            <button type="submit">
                Add
            </button>
        </form>
    );
}