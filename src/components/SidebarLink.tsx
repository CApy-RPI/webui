import { NavLink } from 'react-router-dom';

type SidebarLinkProps = {
    label: string;
    icon?: string; // TODO: Fix this
    nav: string;
};

export default function SidebarLink({ label, icon, nav }: SidebarLinkProps) {
    return (
        <NavLink
            to={nav}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active-link' : ''}`}
        >
            {icon}
            <span className="sidebar-link-label">{label}</span>
        </NavLink>
    );
}
