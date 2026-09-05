
export interface CreateSkillInput {
    name: string;
    description: string;
    category: string;
}

export interface Skill extends CreateSkillInput {
    skillId: string;
    createdAt: string;
    updatedAt: string;
}