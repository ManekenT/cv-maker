import { EducationStep } from "@/types";
import { formatDate } from "@/util";

export default function CVEducationStep({ step }: { step: EducationStep }) {
    console.log(step.from_date);
    return (
        <div className="py-1">
            <span className="font-semibold">{step.degree_name}</span>{" "}
            <span className="text-gray-600">- {step.institution_name}</span>
            <div className="text-gray-600">
                {step.from_date ? formatDate(step.from_date) : ""} -{" "}
                {step.to_date ? formatDate(step.to_date) : "Present"}
            </div>
        </div>
    );
}
