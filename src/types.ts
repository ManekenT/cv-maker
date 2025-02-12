export type GeneralInfo = {
    name: string;
    tel: string;
    email: string;
};

export type EducationStep = {
    name: string;
    from: Date;
    to?: Date;
    degree: string;
};

export type ExperienceStep = {
    name: string;
    employer: string;
    from: Date;
    to?: Date;
    listOfTasks: string[];
};

export type Skill = {
    category: string;
    skills: string[];
};
