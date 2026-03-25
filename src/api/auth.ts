import { apiRequest } from './client';
import type { AuthUser } from '../types/User.ts';

export const authApi = {
    // Get current user
    getMe: () => apiRequest<AuthUser>('/auth/me'),

    // Initiate Google OAth
    loginWithGoogle: () => {
        window.location.href = '/auth/google';
    },

    // Initiate Microsoft OAuth
    loginWithMicrosoft: () => {
        window.location.href = '/auth/microsoft';
    },

    // Logout
    logout: () =>
        apiRequest<void>('/auth/logout', {
            method: 'POST',
        }),

    // Refresh token
    refresh: () =>
        apiRequest<void>('/auth/refresh', {
            method: 'POST',
        }),
};
