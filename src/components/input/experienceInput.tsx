import { Experience } from "@/types";
import ExperienceStepInput from "./experienceStepInput";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ExperienceInput({
    experience,
    onChange,
}: {
    experience: Experience;
    onChange: (experience: Experience) => void;
}) {
    return (
        <div className="flex flex-col gap-6">
            {experience.map((step, index) => {
                return (
                    <div key={index} className="flex flex-col gap-6">
                        <ExperienceStepInput
                            step={step}
                            onChange={(newStep) => {
                                const newExperience = [...experience];
                                newExperience[index] = newStep;
                                onChange(newExperience);
                            }}
                            onRemove={() => {
                                const newExperience = [...experience];
                                newExperience.splice(index, 1);
                                onChange(newExperience);
                            }}
                            key={index}
                        ></ExperienceStepInput>
                        <Separator></Separator>
                    </div>
                );
            })}
            <Button
                variant="secondary"
                onClick={() => onChange([...experience, { job_title: "", employer_name: "", tasklist: [] }])}
            >
                <PlusIcon className="size-4"></PlusIcon>
            </Button>
        </div>
    );
}
