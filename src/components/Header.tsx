import '../css/header.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPopup from '../components/LoginPopup';

export default function Header() {
    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <div className="header-container">
                <h1 className="header-title">CAPY Web UI</h1>
                <div className="header-right-btns">
                    <a className="profile-btn" onClick={() => navigate('/profile')}>
                        Profile
                    </a>
                    <a className="register-btn" onClick={() => setShowLogin(true)}
                    >
                        Register
                    </a>

                </div>
            </div>
            <LoginPopup
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
            />
        </>
    );
}
