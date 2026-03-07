import '../css/organizations.css';
import '../css/carousel.css';

import type { Organization } from '../types/Organization.ts';

type OrganizationCarouselPanelProps = {
    organization: Organization;
    className: string;
    onClick?: () => void;
};

export default function Organization({ organization, className, onClick }: OrganizationCarouselPanelProps) {
    return (
        <div className={`org ${className}`} onClick={onClick}>
            <div className="org-metadata">
                <div className="image-placeholder"></div>
                <span className="org-title">{organization.name}</span>
                <span>{organization.description}</span>
            </div>
            <div className="org-btns">
                <button className="events-btn">Events</button>
                <button className="manage-btn">Manage</button>
            </div>
        </div>
    );
}
