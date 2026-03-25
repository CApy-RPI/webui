import { apiRequest } from './client';
import type { User } from '../types/User.ts';
import type { Event } from '../types/Event.ts';
import type { Organization } from '../types/Organization.ts';

export const usersApi = {
    // Get user by ID
    getById: (id: string) => apiRequest<User>(`/users/${id}`),

    // Update user
    update: (id: string, data: User) =>
        apiRequest<User>(`/users/${id}`, {
            method: 'POST',
            body: data,
        }),

    // Delete user
    delete: (id: string) =>
        apiRequest<void>(`/users/${id}`, {
            method: 'DELETE',
        }),

    // Get user's events
    getEvents: (id: string) => apiRequest<Event[]>(`/users/${id}/events`),

    // Get user's organizations
    getOrganizations: (id: string) => apiRequest<Organization[]>(`/users/${id}/organizations`),
};
