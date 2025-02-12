import { GeneralInfo } from "@/types";
import TextInput from "./TextInput";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function GeneralInfoInput() {
    const info = useQuery(api.cv.getGeneralInfo);
    const setGeneralInfo = useMutation(api.cv.setGeneralInfo).withOptimisticUpdate((localStore, args) => {
        const existingInfo = localStore.getQuery(api.cv.getGeneralInfo);
        if (existingInfo !== undefined) {
            localStore.setQuery(api.cv.getGeneralInfo, {}, { ...args });
        }
    });

    if (info === undefined) {
        return <div>info undefined</div>;
    }

    return (
        <div className="flex flex-col gap-2">
            <TextInput
                value={info.name}
                onChange={(name) => setGeneralInfo({ name: name, tel: info.tel, email: info.email })}
                label="name"
            ></TextInput>
            <TextInput
                value={info.tel}
                onChange={(tel) => setGeneralInfo({ name: info.name, tel: tel, email: info.email })}
                label="phone"
                type="tel"
                inputMode="tel"
            ></TextInput>
            <TextInput
                value={info.email}
                onChange={(email) => setGeneralInfo({ name: info.name, tel: info.tel, email: email })}
                label="email"
                type="email"
                inputMode="email"
            ></TextInput>
        </div>
    );
}
