import { useState } from 'react';
import LoginPopup from '../components/LoginPopup.tsx';
import '../css/login.css';

export default function Home() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <>
            <div>
                <h1>Home</h1>
                <a onClick={() => setShowLogin(true)}>Register</a>
                <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} />
            </div>
        </>
    );
}
