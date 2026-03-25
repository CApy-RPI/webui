export type Organization = {
    date_created: Date;
    date_modified: Date;
    //description: string;
    name: string;
    oid: string;
};

export type CreateOrganization = {
    creator_uid: string;
    name: string;
};

export type UpdateOrganization = {
    name: string;
};

export type OrganizationUser = {
    // TODO: API returns same as base User
    date_joined: string;
    email: string;
    first_name: string;
    is_admin: boolean;
    last_active: string;
    last_name: string;
    uid: string;
};

export type ManageOrganizationUser = {
    is_admin: boolean;
    uid: string;
};
