import { apiRequest } from './client';
import type { AuthUser } from '../types/User.ts';

export const authApi = {
    // Get current user
    getMe: () => apiRequest<AuthUser>('/api/auth/me'),

    // Initiate Auth
    login: (provider: string) => {
        window.location.href = `/api/auth/${provider}`;
    },

    // Logout
    logout: () =>
        apiRequest<void>('/api/auth/logout', {
            method: 'POST',
        }),

    // Refresh token
    refresh: () =>
        apiRequest<void>('/api/auth/refresh', {
            method: 'POST',
        }),
};
