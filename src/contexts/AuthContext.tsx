/* eslint-disable react-refresh/only-export-components*/
import React, { createContext, useContext, useState, type ReactNode } from 'react';

type User = {
    uid?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (provider: 'google' | 'microsoft') => void;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMe = async (): Promise<void> => {
        try {
            setLoading(true);

            const response = await fetch('https://api.capyrpi.org/v1/auth/me', {
                headers: { Accept: 'application/json' },
                credentials: 'include'
            });

            if (response.ok) {
                const data: User = await response.json();
                setUser(data);
            } else {
                setUser(null);
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Failed to fetch user:', err);
                setError(err.message);
            } else {
                console.error('Unknown error:', err);
                setError('Unknown error');
            }

            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = (provider: 'google' | 'microsoft'): void => {
        const url =
            provider === 'google'
                ? 'https://api.capyrpi.org/v1/auth/google'
                : 'https://api.capyrpi.org/v1/auth/microsoft';

        window.open(url, '_blank');

        const pollInterval = setInterval(async () => {
            try {
                const response = await fetch('https://api.capyrpi.org/v1/auth/me', {
                    headers: { Accept: 'application/json' },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data: User = await response.json();
                    setUser(data);
                    clearInterval(pollInterval);
                }
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error('Polling failed:', err.message);
                }
            }
        }, 3000);

        setTimeout(() => {
            clearInterval(pollInterval);
        }, 120000);
    };
    const logout = async (): Promise<void> => {
        try {
            await fetch('https://api.capyrpi.org/v1/auth/logout', {
                method: 'POST',
            });

            setUser(null);

            window.location.href = '/app/';
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error('Logout failed:', err.message);
            }
        }
    };
    const value: AuthContextType = {
        user,
        loading,
        error,
        login,
        logout,
        refreshUser: fetchMe,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};
