export type ProfileSection = {
    name: string;
    value: string;
    isMissing?: boolean;
};

export type ProfileData = {
    displayName: string;
    organizations: string[];
    publicFields: ProfileSection[];
    privateFields: ProfileSection[];
};
