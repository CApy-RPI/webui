export type User = {
    date_created: string;
    date_modified: string;
    first_name: string;
    grad_year: number;
    last_name: string;
    personal_email: string;
    phone: string;
    role: string;
    school_email: string;
    uid: string;
};

export type AuthUser = {
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    uid: string;
};
