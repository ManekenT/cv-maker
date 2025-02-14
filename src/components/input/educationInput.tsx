import { Button } from "@headlessui/react";
import EducationStepInput from "./educationStepInput";
import { Education } from "@/types";

export default function EducationInput({
    education,
    onChange,
}: {
    education: Education;
    onChange: (education: Education) => void;
}) {
    return (
        <div className="flex flex-col gap-8">
            {education.map((step, index) => {
                return (
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
                );
            })}
            <Button
                className="bg-indigo-200 w-full p-2 rounded-2xl"
                onClick={() => onChange([...education, { degree_name: "", from_date: "", institution_name: "" }])}
            >
                +
            </Button>
        </div>
    );
}
