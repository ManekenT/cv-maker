import { GeneralInfo } from "@/types";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function CVGeneralInfo({ generalInfo }: { generalInfo: GeneralInfo }) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-semibold text-xl font-title text-indigo-400">{generalInfo.name}</h1>
            <div className="flex gap-8 text-gray-800">
                {generalInfo.tel.length !== 0 && (
                    <div className="flex items-center justify-center gap-2">
                        <PhoneIcon className="size-5 text-gray-500"></PhoneIcon>
                        <div>{generalInfo?.tel}</div>
                    </div>
                )}
                {generalInfo.email.length !== 0 && (
                    <div className="flex items-center justify-center gap-2">
                        <EnvelopeIcon className="size-5 text-gray-500"></EnvelopeIcon>
                        <div>{generalInfo?.email}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
