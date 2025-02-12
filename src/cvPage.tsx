import { UserButton } from "@clerk/clerk-react";
import { PrinterIcon } from "@heroicons/react/20/solid";
import { useMutation, useQuery } from "convex/react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { api } from "../convex/_generated/api";
import CVEducation from "./components/cv/cvEducation";
import CVExperience from "./components/cv/cvExperience";
import CVGeneralInfo from "./components/cv/cvGeneralInfo";
import CVSectionTitle from "./components/cv/cvSectionTitle";
import Education from "./components/education";
import GeneralInfoInput from "./components/generalInfo";
import { text, title } from "./app/layout";
import CVSkills from "./components/cv/cvSkills";

export default function CVPage() {
    console.log("test");
    const createCV = useMutation(api.cv.CheckAndCreateCV);
    createCV();
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    return (
        <div className="h-dvh w-dvw">
            <main className="flex flex-col gap-4 p-4 justify-center">
                <div className="w-full flex items-center justify-between">
                    <UserButton />
                    <span className="font-bold text-2xl font-title text-indigo-500">CV Maker</span>
                    <button
                        className="bg-indigo-500 border border-indigo-300 hover:cursor-pointer hover:bg-indigo-400 text-white p-2 px-4 rounded-md"
                        onClick={() => reactToPrintFn()}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <PrinterIcon className="size-5"></PrinterIcon>
                            <span>print</span>
                        </div>
                    </button>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="w-96">
                        <CVSectionTitle title="General Info" />
                        <GeneralInfoInput></GeneralInfoInput>
                        {/* <CVSectionTitle title="education" />
                        <Education /> */}
                    </div>
                    <div className="border border-gray-200 rounded-md mt-4 max-w-3xl w-3xl shadow-xl">
                        <div
                            className={`p-8 ${title.variable} ${text.variable} font-text antialiased`}
                            ref={contentRef}
                        >
                            <CVGeneralInfo></CVGeneralInfo>
                            {/* <CVEducation />
                            <CVExperience />
                            <CVSkills /> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
