import { useState } from 'react';
import LoginPopup from '../components/LoginPopup.tsx';
import '../css/login.css';
import '../css/home.css';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const { user } = useAuth();
    return (
        <>
            <div className="home-grid">
                <div className="home-grid-panel">
                    <a className="register-btn" onClick={() => setShowLogin(true)}>
                        Register
                    </a>
                    <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} />
                    <p style={{ color: 'black' }}>
                        UserId:{' '}
                        <span style={{ color: user?.uid ? 'green' : 'red' }}>{user?.uid ?? 'Not logged in'}</span>
                    </p>
                </div>
                <div className="home-grid-panel"></div>
                <div className="home-grid-panel"></div>
                <div className="home-grid-panel"></div>
            </div>
        </>
    );
}
