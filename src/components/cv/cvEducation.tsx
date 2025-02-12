import CVEducationStep from "./cvEducationStep";
import CVSectionTitle from "./cvSectionTitle";

export default function CVEducation() {
    return (
        <>
            <CVSectionTitle title="education" />
            <CVEducationStep
                step={{
                    name: "Universität Hamburg",
                    from: new Date("Jul 12 2011"),
                    to: new Date("Jul 12 2011"),
                    degree: "Master of Science",
                }}
            />
            <CVEducationStep
                step={{
                    name: "Universität Hamburg",
                    from: new Date("Jul 12 2011"),
                    to: new Date("Jul 12 2011"),
                    degree: "Bachelor of Science",
                }}
            />
            <CVEducationStep
                step={{
                    name: "Universität Hamburg",
                    from: new Date("Jul 12 2011"),
                    degree: "Megamind of Science",
                }}
            />
        </>
    );
}
