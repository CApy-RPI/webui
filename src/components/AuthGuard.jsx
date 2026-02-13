import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
/*@ts-ignore*/
import { useAuth } from '../context/AuthContext';
import { Activity } from 'lucide-react';

const AuthGuard = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
                <Activity className="animate-spin" size={48} color="#ff8c42" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/becapy/login" state={{ from: location }} replace />;
    }

    return children;
};

export default AuthGuard;