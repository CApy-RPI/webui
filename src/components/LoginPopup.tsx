import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../css/login.css';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginPopup({ isOpen, onClose }: Props) {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user && isOpen) {
            onClose();
            navigate('/');
        }
    }, [user, isOpen, onClose, navigate]);

    if (!isOpen) return null;

    const handleOverlayClick = () => {
        onClose();
    };

    const handlePopupClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-container" onClick={handlePopupClick}>
                <button className="popup-close-x" onClick={onClose}>
                    ×
                </button>

                <h2 className="popup-title">Register or Login</h2>

                <button className="popup-button" onClick={() => login('google')}>
                    Continue with Google
                </button>

                <button className="popup-button" onClick={() => login('microsoft')}>
                    Continue with Microsoft
                </button>
            </div>
        </div>
    );
}
