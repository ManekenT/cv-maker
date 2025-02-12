import CVSectionTitle from "./cvSectionTitle";
import CVSkillCategory from "./cvSkillCategory";

export default function Skills() {
    return (
        <>
            <CVSectionTitle title="skills"></CVSectionTitle>
            <CVSkillCategory
                skill={{
                    category: "Programming Languages",
                    skills: ["Java", "Javascript", "Typescript", "HTML", "CSS"],
                }}
            />
            <CVSkillCategory
                skill={{
                    category: "Frameworks",
                    skills: ["Next.js", "React", "Astro", "Angular", "SpringBoot", "Tailwind"],
                }}
            />
            <CVSkillCategory skill={{ category: "Languages", skills: ["German (native)", "English (proficient)"] }} />
        </>
    );
}
