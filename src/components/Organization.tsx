import '../css/organizations.css';

type OrganizationProps = {
    title: string;
    desc: string;
}

export default function Organization({title, desc}:OrganizationProps) {
    return (
        <div className="org">
            <div className="org-metadata">
                <div className="image-placeholder"></div>
                <span className="org-title">{title}</span>
                <span>{desc}</span>
            </div>
            <div className="org-btns">
                <button className="events-btn">
                    Events
                </button>
                <button className="manage-btn">
                    Manage
                </button>
            </div>
        </div>
    );
}
