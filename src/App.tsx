import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppLayout from './components/AppLayout.tsx';
import Home from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import CreateEvent from './pages/events/CreateEvent.tsx';
import EventHistory from './pages/events/EventHistory.tsx';
import Calendar from './pages/Calendar.tsx';
import Roster from './pages/Roster.tsx';
import Notifications from './pages/Notifications.tsx';
import Profile from './pages/Profile.tsx';
import Settings from './pages/Settings.tsx';
/*@ts-ignore*/
import { AuthProvider } from './context/AuthContext.tsx'
import HelpCenter from './pages/HelpCenter.tsx';

function App() {
    return (
        <>
            <AuthProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route element={<AppLayout />}>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/events/create" element={<CreateEvent />} />
                                <Route path="/events/history" element={<EventHistory />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/roster" element={<Roster />} />
                                <Route path="/notifications" element={<Notifications />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/help" element={<HelpCenter />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </>
    );
}

export default App;
