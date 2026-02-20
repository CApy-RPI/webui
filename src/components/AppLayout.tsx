/* Layout that each page will follow */
import '../css/app-layout.css';
import { Outlet } from 'react-router-dom';
import { useCollapseSidebar } from '../hooks/useCollapseSidebar';

import Sidebar from './sidebar/Sidebar.tsx';

export default function AppLayout() {
    const [collapsed, setCollapsed] = useCollapseSidebar('sidebar-collapsed', false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className="main-app-container">
            <div className="app-sidebar-content-container">
                <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
