import { useNavigate } from 'react-router-dom';

type SidebarLinkProps = {
    icon: React.ReactNode;
    name: string;
    email: string;
};

export default function SidebarProfile({ icon, name, email }: SidebarLinkProps) {
    const navigate = useNavigate();
    return (
        <div className="sidebar-link" onClick={() => navigate('/profile')}>
            <span className="sidebar-profile-icon">{icon}</span>
            <div className="sidebar-profile-content sidebar-label-transition">
                <span>{name}</span>
                <span className="sidebar-profile-email">{email}</span>
            </div>
        </div>
    );
}
