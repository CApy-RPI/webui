import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppLayout from './components/AppLayout.tsx';
import Home from './pages/Home.tsx';
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Events from './pages/Events.tsx';
import Calendar from './pages/Calendar.tsx';
import Roster from './pages/Roster.tsx';
import Notifications from './pages/Notifications.tsx';
import Profile from './pages/Profile.tsx';
import Settings from './pages/Settings.tsx';

function App() {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route element={<AppLayout />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/roster" element={<Roster />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
