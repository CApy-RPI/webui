import '../../css/sidebar.css';
import SidebarGroup from './SidebarGroup.tsx';
import SidebarLink from './SidebarLink.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
/*@ts-ignore*/
import LoginPopup from '../components/LoginPopup';
import SidebarProfile from './SidebarProfile.tsx';
import SidebarWorkspace from './SidebarWorkspace.tsx';

import {
    Bars3Icon,
    HomeIcon,
    StarIcon,
    PlusIcon,
    ClipboardDocumentCheckIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    BellAlertIcon,
    UserCircleIcon,
    Cog8ToothIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
    const [showLogin, setShowLogin] = useState(false);
    
    return (
        <>
            <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                    <div className="toggle-spacer" />
                    <button className="collapse-toggle" onClick={onToggle}>
                        <Bars3Icon />
                    </button>
                </div>
                <div className="main-sidebar-link-container">
                    <SidebarLink label="Dashboard" icon={<HomeIcon />} nav="/dashboard" />
                    <SidebarLink label="Events" icon={<StarIcon />} nav="/events" />
                    <SidebarLink label="Calendar" icon={<CalendarDaysIcon />} nav="/calendar" />
                    <SidebarLink label="Roster" icon={<UserGroupIcon />} nav="/roster" />
                    <SidebarLink label="Notifications" icon={<BellAlertIcon />} nav="/notifications" />
                </div>
                <div className="lower-sidebar-link-container">
                    <SidebarLink label="My Profile" icon={<UserCircleIcon />} nav="/profile" />
                    <SidebarLink label="Settings" icon={<Cog8ToothIcon />} nav="/settings" />
                </div>
                <a className="register-btn" onClick={() => setShowLogin(true)}> Register </a>
                <SidebarWorkspace workspace="Overview">
                <SidebarLink label="Dashboard" icon={<HomeIcon />} nav="/dashboard" />
                <SidebarGroup label="Events" icon={<StarIcon />} collapsed={collapsed}>
                    <SidebarLink label="Create" icon={<PlusIcon />} nav="/events/create" />
                    <SidebarLink
                        label="History"
                        icon={<ClipboardDocumentCheckIcon />}
                        nav="/events/history"
                    />
                </SidebarGroup>
                <SidebarLink label="Calendar" icon={<CalendarDaysIcon />} nav="/calendar" />
                <SidebarLink label="Roster" icon={<UserGroupIcon />} nav="/roster" />
                <SidebarLink label="Notifications" icon={<BellAlertIcon />} nav="/notifications" />
            </SidebarWorkspace>
            <SidebarWorkspace>
                <SidebarLink label="Help Center" icon={<QuestionMarkCircleIcon />} nav="/help" />
                <SidebarLink label="Settings" icon={<Cog8ToothIcon />} nav="/settings" />
                <SidebarProfile
                    icon={<UserCircleIcon />}
                    name="Kevin Smith"
                    email="smithk@rpi.edu"
                />
            </SidebarWorkspace>
        </div>
            <LoginPopup
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
            />
        </>
            
    );
}
