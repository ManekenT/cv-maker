import { Skill } from "@/types";

export default function CVSkillCategory({ skill }: { skill: Skill }) {
    return (
        <div className="py-1">
            <span className="font-semibold">{skill.category}: </span>
            <span>{skill.skills.join(", ")}</span>
        </div>
    );
}
