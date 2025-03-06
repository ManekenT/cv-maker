import { Experience } from "@/types";
import CVExperienceStep from "./cvExperienceStep";

export default function CVExperience({ experience }: { experience: Experience }) {
    return (
        <>
            {experience.map((expStep, index) => {
                return <CVExperienceStep key={index} step={expStep}></CVExperienceStep>;
            })}
        </>
    );
}
