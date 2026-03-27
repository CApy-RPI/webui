import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import '../../css/navbar.css';

type IndicatorState = { left: number; width: number };

export default function Navbar() {
    const navbarRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const [indicator, setIndicator] = useState<IndicatorState>({ left: 0, width: 0 });

    const computeIndicator = () => {
        const navbarEl = navbarRef.current;
        if (!navbarEl) return;

        const activeEl = navbarEl.querySelector('.navlink.active-navlink') as HTMLElement | null;
        if (!activeEl) return;

        const navRect = navbarEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();

        const next = {
            left: activeRect.left - navRect.left,
            width: activeRect.width,
        };

        // Avoid useless state updates
        setIndicator((prev) => (prev.left === next.left && prev.width === next.width ? prev : next));
    };

    // Run when the route changes (active link changes).
    // useLayoutEffect helps avoid a visible "jump" on first render.
    useLayoutEffect(() => {
        // Let the DOM apply the active class first, then measure.
        requestAnimationFrame(computeIndicator);
    }, [location.pathname]);

    // Also update on resize
    useEffect(() => {
        const onResize = () => computeIndicator();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div className="navbar" ref={navbarRef}>
            <div
                className="nav-indicator"
                style={{
                    transform: `translateX(${indicator.left}px)`,
                    width: `${indicator.width}px`,
                }}
            />
            <NavbarLink label="profile" nav="/profile" />
            <NavbarLink label="home" nav="/" />
            <NavbarLink label="events" nav="/events" />
            <NavbarLink label="orgs" nav="/organizations" />
            <NavbarLink label="test" nav="/testing" />
        </div>
    );
}
