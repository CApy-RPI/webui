import '../../css/sidebar.css';
import '../../css/login.css';
import SidebarLink from './SidebarLink.tsx';
import SidebarProfile from './SidebarProfile.tsx';
import SidebarWorkspace from './SidebarWorkspace.tsx';

import {
    AdjustmentsHorizontalIcon,
    Bars3Icon,
    HomeIcon,
    StarIcon,
    CalendarDaysIcon,
    UserGroupIcon,
    UserCircleIcon,
} from '@heroicons/react/24/solid';

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
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
                    <SidebarLink label="Home" icon={<HomeIcon />} nav="/" />
                    <SidebarLink label="Events" icon={<StarIcon />} nav="/events" />
                    <SidebarLink label="Insights" icon={<CalendarDaysIcon />} nav="/insights" />
                    <SidebarLink label="Organizations" icon={<UserGroupIcon />} nav="/organizations" />
                    <SidebarLink label="[dev] Testing" icon={<AdjustmentsHorizontalIcon />} nav="/testing" />
                </div>
                <SidebarWorkspace>
                    <SidebarProfile icon={<UserCircleIcon />} name="Kevin Smith" email="smithk@rpi.edu" />
                </SidebarWorkspace>
            </div>
        </>
    );
}
