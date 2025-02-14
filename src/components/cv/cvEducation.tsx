import { Education } from "@/types";
import CVEducationStep from "./cvEducationStep";

export default function CVEducation({ education }: { education: Education }) {
    return education.map((step, index) => {
        return <CVEducationStep key={index} step={step} />;
    });
}
