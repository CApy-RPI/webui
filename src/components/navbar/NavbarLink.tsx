import { NavLink } from 'react-router-dom';

type NavbarLinkProps = {
    label: string;
    nav: string;
};

export default function NavbarLink({ label, nav }: NavbarLinkProps) {
    return (
        <NavLink to={nav} className={({ isActive }) => `navlink ${isActive ? 'active-navlink' : ''}`}>
            {label}
        </NavLink>
    );
}
