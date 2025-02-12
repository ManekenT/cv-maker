import CVExperienceStep from "./cvExperienceStep";
import CVSectionTitle from "./cvSectionTitle";

export default function CVExperience() {
    return (
        <>
            <CVSectionTitle title="experience"></CVSectionTitle>
            <CVExperienceStep
                step={{
                    name: "Werkstudent",
                    employer: "Inveos GmbH",
                    from: new Date("Jul 12 2011"),
                    to: new Date("Jul 12 2011"),
                    listOfTasks: ["Eine tolle Sache", "Eine zweite sehr wichtige Sache", "Und das hier auch noch"],
                }}
            />
            <CVExperienceStep
                step={{
                    name: "Software Entwickler",
                    employer: "Inveos GmbH",
                    from: new Date("Jul 12 2011"),
                    to: new Date("Jul 12 2011"),
                    listOfTasks: ["Eine tolle Sache", "Eine zweite sehr wichtige Sache", "Und das hier auch noch"],
                }}
            />
        </>
    );
}
