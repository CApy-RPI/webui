import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield, Sparkles } from 'lucide-react';

const Login = () => {
    const { user, login } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/becapy';

    if (user) {
        return <Navigate to={from} replace />;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <div
                className="glass-panel"
                style={{
                    padding: '3rem',
                    maxWidth: '450px',
                    width: '90%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    animation: 'fadeIn 0.8s ease-out',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            padding: '1rem',
                            borderRadius: '20px',
                        }}
                    >
                        <Shield size={40} color="white" />
                    </div>
                    <h1 className="logo-text" style={{ fontSize: '2rem' }}>
                        Be CAPY
                    </h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <button
                        onClick={() => login}
                        className="primary-button"
                        style={{
                            padding: '1rem',
                            fontSize: '1.1rem',
                            width: '100%',
                            display: 'flex',
                            gap: '1rem',
                        }}
                    >
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Continue with Google
                    </button>
                    <button
                        onClick={() => login}
                        className="primary-button"
                        style={{
                            padding: '1rem',
                            fontSize: '1.1rem',
                            width: '100%',
                            display: 'flex',
                            gap: '1rem',
                        }}
                    >
                        <img
                            src="https://www.google.com/favicon.ico"
                            alt="Google"
                            style={{ width: '20px', height: '20px' }}
                        />
                        Continue with Microsoft
                    </button>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                        }}
                    >
                        <div
                            style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}
                        ></div>
                        <span>SECURE ACCESS</span>
                        <div
                            style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}
                        ></div>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                    }}
                >
                    <Sparkles size={14} className="text-accent" />
                    <span>Interactive dashboard for RPI students</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
