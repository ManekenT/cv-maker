import { EducationStep } from "@/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { Input } from "../ui/input";
import { InputWithLabel } from "../ui/inputWithLabel";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/datePicker";
import { CardTitle } from "../ui/card";

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
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <CardTitle></CardTitle>
                <Button variant="ghost" size="miniIcon" onClick={onRemove}>
                    <XMarkIcon className="size-4"></XMarkIcon>
                </Button>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <InputWithLabel>
                        <Label htmlFor="nameOfDegree">degree</Label>
                        <Input
                            value={step.degree_name}
                            onChange={(degree_name) =>
                                onChange({ ...step, degree_name: degree_name.currentTarget.value })
                            }
                            id="nameOfDegree"
                        />
                    </InputWithLabel>
                    <InputWithLabel>
                        <Label htmlFor="institutionName">institution</Label>
                        <Input
                            value={step.institution_name}
                            id="institutionName"
                            onChange={(institution_name) =>
                                onChange({ ...step, institution_name: institution_name.currentTarget.value })
                            }
                        ></Input>
                    </InputWithLabel>
                </div>
                <div className="flex gap-2">
                    <InputWithLabel>
                        <Label>from</Label>
                        <DatePicker
                            date={step.from_date}
                            setDate={(from_date) => onChange({ ...step, from_date })}
                        ></DatePicker>
                    </InputWithLabel>
                    <InputWithLabel>
                        <Label>to</Label>
                        <DatePicker
                            date={step.to_date}
                            setDate={(to_date) => onChange({ ...step, to_date })}
                        ></DatePicker>
                    </InputWithLabel>
                    {/* <TextInput
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
                    ></TextInput> */}
                </div>
            </div>
        </div>
    );
}
