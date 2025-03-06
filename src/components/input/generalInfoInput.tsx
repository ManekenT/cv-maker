import { GeneralInfo } from "@/types";
import { InputWithLabel } from "../ui/inputWithLabel";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function GeneralInfoInput({
    generalInfo,
    onChange,
}: {
    generalInfo: GeneralInfo;
    onChange: (info: GeneralInfo) => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            <InputWithLabel>
                <Label>name</Label>
                <Input
                    value={generalInfo.name}
                    onChange={(name) => onChange({ ...generalInfo, name: name.currentTarget.value })}
                ></Input>
            </InputWithLabel>
            <div className="flex gap-2">
                <InputWithLabel>
                    <Label>phone</Label>
                    <Input
                        value={generalInfo.tel}
                        onChange={(tel) => onChange({ ...generalInfo, tel: tel.currentTarget.value })}
                        type="tel"
                        inputMode="tel"
                    ></Input>
                </InputWithLabel>
                <InputWithLabel>
                    <Label>email</Label>
                    <Input
                        value={generalInfo.email}
                        onChange={(email) => onChange({ ...generalInfo, email: email.currentTarget.value })}
                        type="email"
                        inputMode="email"
                    ></Input>
                </InputWithLabel>
            </div>
        </div>
    );
}
