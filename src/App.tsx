import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppLayout from './components/AppLayout.tsx';
import Home from './pages/Home.tsx';
import Events from './pages/Events.tsx';
import Insights from './pages/Insights.tsx';
import Organizations from './pages/Organizations.tsx';
import Testing from './pages/Testing.tsx'; // temp page
import Profile from './pages/Profile.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

function App() {
    return (
        <>
            <AuthProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/events" element={<Events />} />
                                <Route path="/insights" element={<Insights />} />
                                <Route path="/organizations" element={<Organizations />} />
                                <Route path="/testing" element={<Testing />} />
                                <Route path="/profile" element={<Profile />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </AuthProvider>
        </>
    );
}

export default App;
