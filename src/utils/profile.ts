import type { AuthUser } from '../contexts/AuthContext.tsx';
import type { ProfileData } from '../types/Profile.ts';

const MISSING_VALUE = 'Not set';

const getDisplayName = (user: AuthUser | null): string => {
    const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(' ').trim();

    if (fullName) {
        return fullName;
    }

    return user?.email ?? user?.uid ?? 'Guest User';
};

const toProfileValue = (value?: string): { value: string; isMissing: boolean } => {
    if (!value?.trim()) {
        return { value: MISSING_VALUE, isMissing: true };
    }

    return { value, isMissing: false };
};

export const createProfileData = (user: AuthUser | null): ProfileData => {
    const name = getDisplayName(user);
    const email = toProfileValue(user?.email);
    const uid = toProfileValue(user?.uid);
    const role = toProfileValue(user?.role);

    return {
        displayName: name,
        organizations: [],
        publicFields: [
            {
                name: 'name',
                value: name,
                isMissing: !user,
            },
            {
                name: 'role',
                value: role.value,
                isMissing: role.isMissing,
            },
        ],
        privateFields: [
            {
                name: 'email',
                value: email.value,
                isMissing: email.isMissing,
            },
            {
                name: 'uid',
                value: uid.value,
                isMissing: uid.isMissing,
            },
        ],
    };
};
