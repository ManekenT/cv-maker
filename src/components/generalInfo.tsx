import { GeneralInfo } from "@/types";
import TextInput from "./TextInput";

export default function GeneralInfoInput({
    info,
    onChange,
}: {
    info: GeneralInfo;
    onChange: (info: GeneralInfo) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <TextInput onChange={(name) => onChange({ ...info, name })} label="name"></TextInput>
            <TextInput
                onChange={(tel) => onChange({ ...info, tel })}
                label="phone"
                type="tel"
                inputMode="tel"
            ></TextInput>
            <TextInput
                onChange={(email) => onChange({ ...info, email })}
                label="email"
                type="email"
                inputMode="email"
            ></TextInput>
        </div>
    );
}
