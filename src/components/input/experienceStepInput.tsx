import { ExperienceStep } from "@/types";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { InputWithLabel } from "../ui/inputWithLabel";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DatePicker } from "../ui/datePicker";

export default function ExperienceStepInput({
    step,
    onChange,
    onRemove,
}: {
    step: ExperienceStep;
    onChange: (step: ExperienceStep) => void;
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
                        <Label>job title</Label>
                        <Input
                            value={step.job_title}
                            onChange={(job_title) => onChange({ ...step, job_title: job_title.currentTarget.value })}
                        ></Input>
                    </InputWithLabel>
                    <InputWithLabel>
                        <Label>employer</Label>
                        <Input
                            value={step.employer_name}
                            onChange={(employer_name) =>
                                onChange({ ...step, employer_name: employer_name.currentTarget.value })
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
                {/* <TextInput
                value={step.tasklist}
                label="tasks"
                onChange={(tasklist) => onChange({ ...step, tasklist })}
                ></TextInput> */}
            </div>
        </div>
    );
}
