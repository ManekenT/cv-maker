export type CV = {
    info: GeneralInfo;
    education: Education;
};

export type GeneralInfo = {
    name: string;
    tel: string;
    email: string;
};

export type EducationStep = {
    degree_name: string;
    from_date: string;
    to_date?: string;
    institution_name: string;
};

export type Education = EducationStep[];

export type ExperienceStep = {
    job_title: string;
    employer_name: string;
    from_date: string;
    to_date?: string;
    tasklist: string[];
};

export type Skill = {
    category: string;
    skills: string[];
};
