/*

*** NOT IN USE ***
Groups links allowing for a nested structure 
on the Sidebar.

*/

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

type SidebarGroupProps = {
    label: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    collapsed: boolean;
};

export default function SidebarGroup({ label, icon, children, collapsed }: SidebarGroupProps) {
    const [open, setOpen] = useState(true);
    const Icon = open ? ChevronDownIcon : ChevronRightIcon;

    // This logic assumes the user wants groups back open when sidebar is toggled.
    useEffect(() => {
        if (collapsed) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [collapsed]);

    return (
        <div className="sidebar-group">
            <div className="sidebar-group-header" onClick={() => setOpen((prev) => !prev)}>
                <span className="sidebar-link-icon">{icon}</span>
                <span className="sidebar-link-label sidebar-label-transition">{label}</span>
                <Icon className="group-collapse-icon sidebar-label-transition" />
            </div>
            {open && <div className="sidebar-group-children">{children}</div>}
        </div>
    );
}
