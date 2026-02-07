import '../css/header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <h1 className="header-title">CAPY Web UI</h1>
            <a className="profile-btn" onClick={() => navigate('/profile')}>
                Profile
            </a>
            <a className="register-btn" onClick={() => navigate('/register')}>
                Register
            </a>
        </div>
    );
}
