import { NavLink, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

type NavbarLinkProps = {
    label: string;
    nav?: string;
    onClick?: () => void;
};

export default function NavbarLink({ label, nav, onClick }: NavbarLinkProps) {
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!nav) {
            e.preventDefault();
            onClick?.();
            return;
        }

        if (location.pathname === nav) {
            return;
        }

        e.preventDefault();

        const content = document.querySelector('.app-content');
        if (!content) {
            navigate(nav);
            return;
        }

        content.classList.add('page-transition');
        setTimeout(() => {
            navigate(nav);
        }, 300);
        setTimeout(() => {
            content.classList.remove('page-transition');
        }, 400);
        onClick?.();
    };

    return (
        <NavLink
            to={nav ?? '#'}
            onClick={handleClick}
            className={({ isActive }) => `navlink ${isActive ? 'active-navlink' : ''}`}
        >
            {label}
        </NavLink>
    );
}
