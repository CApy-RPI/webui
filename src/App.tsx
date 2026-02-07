import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout.tsx';
import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Events from './pages/Events.tsx';
import Notifications from './pages/Notifications.tsx';
import Profile from './pages/Profile.tsx';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route element={<AppLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
