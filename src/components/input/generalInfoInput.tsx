import { GeneralInfo } from "@/types";
import TextInput from "../TextInput";

export default function GeneralInfoInput({
    generalInfo,
    onChange,
}: {
    generalInfo: GeneralInfo;
    onChange: (info: GeneralInfo) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <TextInput
                value={generalInfo.name}
                onChange={(name) => onChange({ ...generalInfo, name })}
                label="name"
            ></TextInput>
            <div className="flex gap-2">
                <TextInput
                    value={generalInfo.tel}
                    onChange={(tel) => onChange({ ...generalInfo, tel })}
                    label="phone"
                    type="tel"
                    inputMode="tel"
                ></TextInput>
                <TextInput
                    value={generalInfo.email}
                    onChange={(email) => onChange({ ...generalInfo, email })}
                    label="email"
                    type="email"
                    inputMode="email"
                ></TextInput>
            </div>
        </div>
    );
}
