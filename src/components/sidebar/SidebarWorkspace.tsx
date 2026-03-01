/*

Currently only used as a standard div, but supports 
a toggle for viewing links.

*/

import React from 'react';
import { useState } from 'react';

import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface SidebarWorkspaceProps {
    workspace?: string;
    children: React.ReactNode;
}

export default function SidebarWorkspace({ workspace, children }: SidebarWorkspaceProps) {
    const [open, setOpen] = useState(true);
    const Icon = open ? ChevronDownIcon : ChevronRightIcon;

    return (
        <div className={`sidebar-workspace`}>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className={`${workspace ? 'workspace-header' : 'hide'}`}
            >
                <Icon className="workspace-icon" />
                <span className="workspace-text sidebar-label-transition">{workspace}</span>
            </div>
            {open && children}
        </div>
    );
}
