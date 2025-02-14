import { EducationStep } from "@/types";
import TextInput from "../TextInput";
import { Button } from "@headlessui/react";

export default function EducationStepInput({
    step,
    onChange,
    onRemove,
}: {
    step: EducationStep;
    onChange: (step: EducationStep) => void;
    onRemove: () => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <TextInput
                    value={step.degree_name}
                    label="name of degree"
                    onChange={(degree_name) => onChange({ ...step, degree_name })}
                ></TextInput>
                <TextInput
                    value={step.institution_name}
                    label="name of institution"
                    onChange={(institution_name) => onChange({ ...step, institution_name })}
                ></TextInput>
            </div>
            <div className="flex gap-2">
                <TextInput
                    value={step.from_date}
                    label="from"
                    onChange={(from_date) => onChange({ ...step, from_date })}
                    type="date"
                ></TextInput>
                <TextInput
                    value={step.to_date}
                    label="to"
                    onChange={(to_date) => onChange({ ...step, to_date })}
                    type="date"
                ></TextInput>
            </div>
            <Button onClick={onRemove}>remove step</Button>
        </div>
    );
}
