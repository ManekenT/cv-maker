"use client";

import CVGeneralInfo from "@/components/cv/cvGeneralInfo";
import CVSectionTitle from "@/components/cv/cvSectionTitle";
import GeneralInfoInput from "@/components/generalInfo";
import { GeneralInfo } from "@/types";
import { loadFile, saveJsonObjToFile } from "@/util";
import { PrinterIcon, ArrowUpOnSquareIcon, ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const generalInfoKey = "generalInfo";

export default function Home() {
    const [generalInfo, setGeneralInfo] = useState<GeneralInfo>({ name: "", email: "", tel: "" });
    const setInfo = useCallback(
        (info: GeneralInfo) => {
            setGeneralInfo(info);
            localStorage.setItem(generalInfoKey, JSON.stringify(info));
        },
        [setGeneralInfo]
    );

    useEffect(() => {
        const savedInfoString = localStorage.getItem(generalInfoKey);
        const savedInfo = savedInfoString === null ? { name: "", email: "", tel: "" } : JSON.parse(savedInfoString);
        setInfo(savedInfo);
    }, [setInfo]);

    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div className="h-dvh w-dvw">
            <main className="flex flex-col gap-4 p-4 justify-center">
                <div className="w-full flex items-center justify-between">
                    <span className="font-bold text-2xl font-title text-indigo-500">CV Maker</span>
                    <div className="flex gap-4">
                        <button
                            className="flex items-center justify-center gap-2 text-indigo-600 border border-indigo-500 hover:cursor-pointer hover:bg-indigo-400 p-2 px-4 rounded-md"
                            onClick={() => saveJsonObjToFile(generalInfo)}
                        >
                            <ArrowUpOnSquareIcon className="size-5"></ArrowUpOnSquareIcon>
                            <span>save</span>
                        </button>
                        <button
                            className="flex items-center justify-center gap-2 text-indigo-600 border border-indigo-500 hover:cursor-pointer hover:bg-indigo-400 p-2 px-4 rounded-md"
                            onClick={() => loadFile((e) => setInfo(e))}
                        >
                            <ArrowDownOnSquareIcon className="size-5"></ArrowDownOnSquareIcon>
                            <span>load</span>
                        </button>
                        <button
                            className="flex items-center justify-center gap-2 bg-indigo-500 border border-indigo-300 hover:cursor-pointer hover:bg-indigo-400 text-white p-2 px-4 rounded-md"
                            onClick={() => reactToPrintFn()}
                        >
                            <PrinterIcon className="size-5"></PrinterIcon>
                            <span>print / pdf</span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="w-96">
                        <CVSectionTitle title="General Info" />
                        <GeneralInfoInput generalInfo={generalInfo} onChange={setInfo}></GeneralInfoInput>
                        {/* <CVSectionTitle title="education" />
                        <Education /> */}
                    </div>
                    <div className="border border-gray-200 rounded-md mt-4 max-w-3xl w-3xl shadow-xl">
                        <div className={`p-8 font-text antialiased`} ref={contentRef}>
                            <CVGeneralInfo generalInfo={generalInfo}></CVGeneralInfo>
                            {/* <CVEducation /> */}
                            {/* <CVExperience /> */}
                            {/* <CVSkills /> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
