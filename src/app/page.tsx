"use client";

import CVEducation from "@/components/cv/cvEducation";
import CVExperience from "@/components/cv/cvExperience";
import CVGeneralInfo from "@/components/cv/cvGeneralInfo";
import CVSectionTitle from "@/components/cv/cvSectionTitle";
import EducationInput from "@/components/input/educationInput";
import ExperienceInput from "@/components/input/experienceInput";
import GeneralInfoInput from "@/components/input/generalInfoInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Education, Experience, GeneralInfo } from "@/types";
import { loadFile, saveFile } from "@/util";
import { PrinterIcon, ArrowUpOnSquareIcon, ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const generalInfoKey = "generalInfo";
const educationKey = "education";
const experienceKey = "experience";

export default function Home() {
    const [generalInfo, setGeneralInfoState] = useState<GeneralInfo>({ name: "", email: "", tel: "" });
    const [education, setEducationState] = useState<Education>([]);
    const [experience, setExperienceState] = useState<Experience>([]);
    const setInfo = useCallback(
        (info: GeneralInfo) => {
            setGeneralInfoState(info);
            localStorage.setItem(generalInfoKey, JSON.stringify(info));
        },
        [setGeneralInfoState]
    );

    const setEducation = useCallback(
        (education: Education) => {
            setEducationState(education);
            localStorage.setItem(educationKey, JSON.stringify(education));
        },
        [setEducationState]
    );

    const setExperience = useCallback(
        (experience: Experience) => {
            setExperienceState(experience);
            localStorage.setItem(experienceKey, JSON.stringify(experience));
        },
        [setExperienceState]
    );

    useEffect(() => {
        const savedInfoString = localStorage.getItem(generalInfoKey);
        const savedEducationString = localStorage.getItem(educationKey);
        const savedExperienceString = localStorage.getItem(experienceKey);
        const savedInfo = savedInfoString === null ? { name: "", email: "", tel: "" } : JSON.parse(savedInfoString);
        const savedEducation = savedEducationString === null ? [] : JSON.parse(savedEducationString);
        const savedExperience = savedExperienceString === null ? [] : JSON.parse(savedExperienceString);
        setInfo(savedInfo);
        setEducation(savedEducation);
        setExperience(savedExperience);
    }, [setInfo, setEducation, setExperience]);

    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    console.log(education);

    return (
        <div className="h-dvh w-dvw">
            <main className="flex flex-col gap-4 px-4 justify-center">
                <div className="w-full flex items-center justify-between h-16">
                    <span className="font-bold text-2xl font-text ml-2">CV Maker</span>
                    <div className="flex gap-4">
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() =>
                                saveFile({ info: generalInfo, education: education, experience: experience })
                            }
                        >
                            <ArrowUpOnSquareIcon className="size-5"></ArrowUpOnSquareIcon>
                            <span>save</span>
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() =>
                                loadFile((cv) => {
                                    setInfo(cv.info);
                                    setEducation(cv.education);
                                })
                            }
                        >
                            <ArrowDownOnSquareIcon className="size-5"></ArrowDownOnSquareIcon>
                            <span>load</span>
                        </Button>
                        <Button size="lg" onClick={() => reactToPrintFn()}>
                            <PrinterIcon className="size-5"></PrinterIcon>
                            <span>print / pdf</span>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="w-xl flex flex-col gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>General Info</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <GeneralInfoInput generalInfo={generalInfo} onChange={setInfo}></GeneralInfoInput>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <EducationInput education={education} onChange={setEducation}></EducationInput>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Experience</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ExperienceInput experience={experience} onChange={setExperience}></ExperienceInput>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="w-2xl">
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={`p-8 font-text antialiased`} ref={contentRef}>
                                <CVGeneralInfo generalInfo={generalInfo}></CVGeneralInfo>
                                <CVSectionTitle title="education" />
                                <CVEducation education={education}></CVEducation>
                                <CVSectionTitle title="experience"></CVSectionTitle>
                                <CVExperience experience={experience} />
                                {/* <CVSkills /> */}
                                {/* Licenses and Certifications */}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
