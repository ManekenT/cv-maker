import EducationStepInput from "./educationStepInput";
import { Education } from "@/types";
import { PlusIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function EducationInput({
    education,
    onChange,
}: {
    education: Education;
    onChange: (education: Education) => void;
}) {
    return (
        <div className="flex flex-col gap-6">
            {education.map((step, index) => {
                return (
                    <div key={index} className="flex flex-col gap-6">
                        <EducationStepInput
                            step={step}
                            onChange={(newStep) => {
                                const newEducation = [...education];
                                newEducation[index] = newStep;
                                onChange(newEducation);
                            }}
                            onRemove={() => {
                                const newEducation = [...education];
                                newEducation.splice(index, 1);
                                onChange(newEducation);
                            }}
                            key={index}
                        ></EducationStepInput>
                        <Separator></Separator>
                    </div>
                );
            })}
            <Button
                variant="secondary"
                onClick={() => onChange([...education, { degree_name: "", institution_name: "" }])}
            >
                <PlusIcon className="size-4"></PlusIcon>
            </Button>
        </div>
    );
}
