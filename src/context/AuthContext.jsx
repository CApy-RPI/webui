import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMe = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.capyrpi.org/v1/auth/me', {
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error('Failed to fetch user:', err);
            setError(err.message);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMe();
    }, []);

    const login = () => {
        window.open('https://api.capyrpi.org/v1/auth/google', '_blank');

        // Start polling to check if the user has authenticated in the other window
        const pollInterval = setInterval(async () => {
            try {
                const response = await fetch('https://api.capyrpi.org/v1/auth/me', {
                    headers: { 'Accept': 'application/json' },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    clearInterval(pollInterval);
                }
            } catch (err) {
                console.error('Polling failed:', err);
            }
        }, 3000);

        // Stop polling after 2 minutes anyway
        setTimeout(() => {
            clearInterval(pollInterval);
        }, 120000);
    };

    const logout = async () => {
        try {
            await fetch('https://api.capyrpi.org/v1/auth/logout', { method: 'POST' });
            setUser(null);
            window.location.href = '/app/';
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout, refreshUser: fetchMe }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};