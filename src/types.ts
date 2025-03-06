export type CV = {
    info: GeneralInfo;
    education: Education;
    experience: Experience;
};

export type GeneralInfo = {
    name: string;
    tel: string;
    email: string;
};

export type Education = EducationStep[];

export type EducationStep = {
    degree_name: string;
    from_date?: Date;
    to_date?: Date;
    institution_name: string;
};

export type Experience = ExperienceStep[];

export type ExperienceStep = {
    job_title: string;
    employer_name: string;
    from_date?: Date;
    to_date?: Date;
    tasklist: string[];
};

export type Skill = {
    category: string;
    skills: string[];
};
