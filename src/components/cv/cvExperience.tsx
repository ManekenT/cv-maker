import CVExperienceStep from "./cvExperienceStep";
import CVSectionTitle from "./cvSectionTitle";

export default function CVExperience() {
    return (
        <>
            <CVSectionTitle title="experience"></CVSectionTitle>
            <CVExperienceStep
                step={{
                    job_title: "Werkstudent",
                    employer_name: "Inveos GmbH",
                    from_date: "",
                    to_date: "",
                    tasklist: ["Eine tolle Sache", "Eine zweite sehr wichtige Sache", "Und das hier auch noch"],
                }}
            />
            <CVExperienceStep
                step={{
                    job_title: "Software Entwickler",
                    employer_name: "Inveos GmbH",
                    from_date: "",
                    to_date: "",
                    tasklist: ["Eine tolle Sache", "Eine zweite sehr wichtige Sache", "Und das hier auch noch"],
                }}
            />
        </>
    );
}
