import { EducationStep } from "@/types";
import { formatDate } from "@/util";

export default function CVEducationStep({ step }: { step: EducationStep }) {
    return (
        <div className="py-1">
            <span className="font-semibold">{step.degree}</span> <span className="text-gray-600">- {step.name}</span>
            <div className="text-gray-600">
                {formatDate(step.from)} - {step.to ? formatDate(step.to) : "Present"}
            </div>
        </div>
    );
}
