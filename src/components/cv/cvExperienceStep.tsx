import { ExperienceStep } from "@/types";
import { formatDate } from "@/util";

export default function CVExperienceStep({ step }: { step: ExperienceStep }) {
    return (
        <div className="py-1">
            <span className="font-semibold">{step.name}</span> <span className="text-gray-600">- {step.employer}</span>
            <div className="text-gray-600">
                {formatDate(step.from)} - {step.to ? formatDate(step.to) : "Present"}
            </div>
            <div>
                <ul className="list-disc list-inside">
                    {step.listOfTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
