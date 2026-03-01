import { NavLink } from 'react-router-dom';

type SidebarLinkProps = {
    label: string;
    icon: React.ReactNode;
    nav: string;
};

export default function SidebarLink({ label, icon, nav }: SidebarLinkProps) {
    return (
        <NavLink to={nav} className={({ isActive }) => `sidebar-link ${isActive ? 'active-link' : ''}`}>
            <span className="sidebar-link-icon">{icon}</span>
            <span className="sidebar-link-label sidebar-label-transition">{label}</span>
        </NavLink>
    );
}
