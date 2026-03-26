/* eslint-disable react-refresh/only-export-components*/
import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { authApi } from '../api/auth';

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
            setError(null);

            const data = await authApi.getMe();
            setUser(data);
        } catch (err: unknown) {
            setUser(null);
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMe();
    }, []);

    const login = (provider: 'google' | 'microsoft'): void => {
        authApi.login(provider);
    };

    const logout = async (): Promise<void> => {
        try {
            await authApi.logout();
            setUser(null);
            window.location.href = '/app/';
        } catch (err: unknown) {
            console.error('Logout failed:', err);
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
