import { Description, Field, Input, Label } from "@headlessui/react";
import { HTMLInputTypeAttribute } from "react";

export default function TextInput({
    onChange,
    label,
    description,
    type,
    inputMode,
}: {
    onChange: (text: string) => void;
    label: string;
    description?: string;
    type?: HTMLInputTypeAttribute;
    inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal";
}) {
    return (
        <div className="w-full max-w-md">
            <Field>
                <Label className="ml-2 text-sm font-medium text-gray-500">{label}</Label>
                {description && <Description className="text-sm text-black/60">{description}</Description>}
                <Input
                    onChange={(event) => onChange(event.target.value)}
                    className="block w-full rounded-lg border-none bg-indigo-100 py-1.5 px-3 text-sm/6 "
                    name="full_name"
                    type={type}
                    inputMode={inputMode}
                />
            </Field>
        </div>
    );
}
