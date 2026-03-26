import { UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext.tsx';
import '../css/profile.css';
import type { ProfileData, ProfileSection } from '../types/Profile.ts';
import { createProfileData } from '../utils/profile.ts';

const updateField = (fields: ProfileSection[], fieldName: string, value: string): ProfileSection[] =>
    fields.map((field) => (field.name === fieldName ? { ...field, value, isMissing: !value.trim() } : field));

export default function Profile() {
    const { user, loading } = useAuth();
    const [savedProfile, setSavedProfile] = useState<ProfileData>(() => createProfileData(user));
    const [draftProfile, setDraftProfile] = useState<ProfileData>(() => createProfileData(user));

    useEffect(() => {
        const authProfile = createProfileData(user);
        setSavedProfile(authProfile);
        setDraftProfile(authProfile);
    }, [user]);

    const isDirty = JSON.stringify(savedProfile) !== JSON.stringify(draftProfile);
    const nameLines = draftProfile.displayName.split(' ');

    const handleFieldChange = (section: 'public' | 'private', fieldName: string, value: string) => {
        setDraftProfile((currentProfile) => {
            const nextProfile =
                section === 'public'
                    ? { ...currentProfile, publicFields: updateField(currentProfile.publicFields, fieldName, value) }
                    : { ...currentProfile, privateFields: updateField(currentProfile.privateFields, fieldName, value) };

            if (section === 'public' && fieldName === 'name') {
                return { ...nextProfile, displayName: value || 'Guest User' };
            }

            return nextProfile;
        });
    };

    const handleOrganizationChange = (index: number, value: string) => {
        setDraftProfile((currentProfile) => ({
            ...currentProfile,
            organizations: currentProfile.organizations.map((organization, organizationIndex) =>
                organizationIndex === index ? value : organization
            ),
        }));
    };

    const handleAddOrganization = () => {
        setDraftProfile((currentProfile) => ({
            ...currentProfile,
            organizations: [...currentProfile.organizations, ''],
        }));
    };

    const handleConfirm = () => {
        setSavedProfile({
            ...draftProfile,
            organizations: draftProfile.organizations.filter((organization) => organization.trim()),
        });
        setDraftProfile((currentProfile) => ({
            ...currentProfile,
            organizations: currentProfile.organizations.filter((organization) => organization.trim()),
        }));
    };

    return (
        <section className="profile-page">
            <main className="profile-card">
                <header className="profile-header">
                    <div className="profile-avatar">
                        <UserRound size={64} strokeWidth={1.75} />
                    </div>

                    <div className="profile-header-copy">
                        <h1 className="profile-name">
                            {nameLines.map((line, index) => (
                                <span key={`${line}-${index}`}>
                                    {index > 0 ? <br /> : null}
                                    {line}
                                </span>
                            ))}
                        </h1>

                        <div className="profile-badge-row">
                            {draftProfile.organizations.map((organization, index) => (
                                <label key={`organization-${index}`} className="profile-pill profile-pill-input-wrap">
                                    <input
                                        className="profile-pill-input"
                                        type="text"
                                        value={organization}
                                        size={Math.max(organization.length, 7)}
                                        placeholder="New org"
                                        onChange={(event) => handleOrganizationChange(index, event.target.value)}
                                    />
                                </label>
                            ))}
                            <button
                                type="button"
                                className="profile-add-bubble"
                                aria-label="Add organization"
                                onClick={handleAddOrganization}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </header>

                <div className="profile-sections">
                    <div className="profile-section">
                        <p className="profile-section-label">public</p>

                        {draftProfile.publicFields.map((field) => (
                            <div
                                key={field.name}
                                className={`profile-field${field.name === 'role' ? ' profile-field-short' : ''}`}
                            >
                                <span className="profile-field-label">{field.name}</span>
                                <input
                                    className="profile-field-input"
                                    type="text"
                                    value={field.value}
                                    onChange={(event) => handleFieldChange('public', field.name, event.target.value)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="profile-section">
                        <p className="profile-section-label">private</p>

                        {draftProfile.privateFields.map((field) => (
                            <div key={field.name} className="profile-field">
                                <span className="profile-field-label">{field.name}</span>
                                <input
                                    className="profile-field-input"
                                    type="text"
                                    value={field.value}
                                    onChange={(event) => handleFieldChange('private', field.name, event.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {loading ? <p className="profile-field-value">Loading profile...</p> : null}
                {isDirty ? (
                    <div className="profile-confirm-row">
                        <button type="button" className="profile-confirm-button" onClick={handleConfirm}>
                            Confirm changes
                        </button>
                    </div>
                ) : null}
            </main>
        </section>
    );
}
