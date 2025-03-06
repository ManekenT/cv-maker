import { ExperienceStep } from "@/types";
import { formatDate } from "@/util";

export default function CVExperienceStep({ step }: { step: ExperienceStep }) {
    return (
        <div className="py-1">
            <span className="font-semibold">{step.job_title}</span>{" "}
            <span className="text-gray-600">- {step.employer_name}</span>
            <div className="text-gray-600">
                {step.from_date ? formatDate(step.from_date) : ""} -{" "}
                {step.to_date ? formatDate(step.to_date) : "Present"}
            </div>
            <div>
                <ul className="list-disc list-inside">
                    {step.tasklist.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
