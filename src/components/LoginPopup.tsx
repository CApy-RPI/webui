import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../css/login.css";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginPopup({ isOpen, onClose }: Props) {

    const { login, user } = useAuth();

    useEffect(() => {
        if (user && isOpen) {
            onClose();
        }
    }, [user, isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = () => {
        onClose();
    };

    const handlePopupClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>

            <div
                className="popup-container"
                onClick={handlePopupClick}
            >

                <button
                    className="popup-close-x"
                    onClick={onClose}
                >
                    ×
                </button>

                <h2 className="popup-title">
                    Register or Login
                </h2>

                <button
                    className="popup-button"
                    onClick={login}
                >
                    Continue with Google
                </button>

                <button
                    className="popup-button"
                    onClick={login}
                >
                    Continue with Microsoft
                </button>

            </div>

        </div>
    );
}