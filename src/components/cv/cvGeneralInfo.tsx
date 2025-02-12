import { GeneralInfo } from "@/types";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function CVGeneralInfo({ info }: { info: GeneralInfo }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl font-title text-indigo-400">{info.name}</h1>
            <div className="flex gap-8 text-gray-800">
                {info.tel.length !== 0 && (
                    <div className="flex items-center justify-center gap-2">
                        <PhoneIcon className="size-5 text-gray-500"></PhoneIcon>
                        <div>{info.tel}</div>
                    </div>
                )}
                {info.email.length !== 0 && (
                    <div className="flex items-center justify-center gap-2">
                        <EnvelopeIcon className="size-5 text-gray-500"></EnvelopeIcon>
                        <div>{info.email}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
