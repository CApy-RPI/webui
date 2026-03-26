import { apiRequest } from './client';
import type { AuthUser } from '../types/User.ts';

export const authApi = {
    // Get current user
    getMe: () => apiRequest<AuthUser>('/api/v1/auth/me'),

    // Initiate Auth
    login: (provider: string) => {
        window.location.href = `/api/v1/auth/${provider}`;
    },

    // Logout
    logout: () =>
        apiRequest<void>('/api/v1/auth/logout', {
            method: 'POST',
        }),

    // Refresh token
    refresh: () =>
        apiRequest<void>('/api/v1/auth/refresh', {
            method: 'POST',
        }),
};
