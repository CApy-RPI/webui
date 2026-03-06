import '../css/organizations.css';
import '../css/carousel.css';

type OrganizationProps = {
    title: string;
    desc: string;
    className: string;
    onClick?: () => void;
};

export default function Organization({ title, desc, className, onClick }: OrganizationProps) {
    return (
        <div className={`org ${className}`} onClick={onClick}>
            <div className="org-metadata">
                <div className="image-placeholder"></div>
                <span className="org-title">{title}</span>
                <span>{desc}</span>
            </div>
            <div className="org-btns">
                <button className="events-btn">Events</button>
                <button className="manage-btn">Manage</button>
            </div>
        </div>
    );
}
