import '../css/app-layout.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

export default function AppLayout() {

  return (
    <div className="main-app-container">
      <Navbar />
      <div className="app-content">
            <Outlet />
      </div>
    </div>
  );
}