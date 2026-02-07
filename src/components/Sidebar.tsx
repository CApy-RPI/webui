import '../css/sidebar.css';
import SidebarLink from './SidebarLink.tsx';

type SidebarProps = {
    collapsed: boolean;
    onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <button className="collapse-toggle" onClick={onToggle}>
                    {collapsed ? 'O' : 'Collapse'}
                </button>
            </div>
            <div className="main-sidebar-link-container">
                <SidebarLink label="Dashboard" icon="1" nav="/dashboard" />
                <SidebarLink label="Events" icon="2" nav="/events" />
                <SidebarLink label="Notifications" icon="3" nav="/notifications" />
            </div>
            <div className="lower-sidebar-link-container">
                <SidebarLink label="My Profile" icon="1" nav="/profile" />
                <SidebarLink label="Home" icon="0" nav="/" />
            </div>
        </div>
    );
}
