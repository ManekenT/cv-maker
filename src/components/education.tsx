import { Button } from "@headlessui/react";
import TextInput from "./TextInput";

export default function Education() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <TextInput label="degree" onChange={(text) => text}></TextInput>
                    <TextInput label="name" onChange={(text) => text}></TextInput>
                </div>
                <div className="flex gap-2">
                    <TextInput label="from" onChange={(text) => text} type="date"></TextInput>
                    <TextInput label="to" onChange={(text) => text} type="date"></TextInput>
                </div>
            </div>
            <Button className="bg-indigo-200 w-full p-2 rounded-2xl">+</Button>
        </div>
    );
}
