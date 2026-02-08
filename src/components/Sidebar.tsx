import '../css/sidebar.css';
import SidebarLink from './SidebarLink.tsx';

// Icon Imports
import { Bars3Icon, HomeIcon, StarIcon, CalendarDaysIcon, UserGroupIcon, BellAlertIcon, UserCircleIcon, Cog8ToothIcon } from "@heroicons/react/24/solid";


type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="toggle-spacer" />
                <button className="collapse-toggle" onClick={onToggle}>
                    <Bars3Icon/>
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
        </div>
    );
}
