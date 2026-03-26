import { apiRequest } from './client';
import type { CreateEvent, UpdateEvent, RegisterEvent, Event, EventUser } from '../types/Event.ts';
import type { QueryParams } from '../types/QueryParams.ts';

export const eventsApi = {
    // Get all events
    getAll: (params?: QueryParams) => {
        const query = new URLSearchParams();
        if (params?.limit !== undefined) {
            query.append('limit', params.limit.toString());
        }
        if (params?.offset !== undefined) {
            query.append('offset', params.offset.toString());
        }
        const queryString = query.toString();
        return apiRequest<Event[]>(queryString ? `/events?${queryString}` : '/events');
    },

    // Create an event
    create: (data: CreateEvent) =>
        apiRequest<Event>(`/events`, {
            method: 'POST',
            body: data,
        }),

    // List events by organization
    getFromOrganization: (oid: string, params?: QueryParams) => {
        const query = new URLSearchParams();
        if (params?.limit !== undefined) {
            query.append('limit', params.limit.toString());
        }
        if (params?.offset !== undefined) {
            query.append('offset', params.offset.toString());
        }
        const queryString = query.toString();
        return apiRequest<Event[]>(queryString ? `/events/org/${oid}?${queryString}` : `/events/org/${oid}`);
    },

    // Get event
    getById: (eid: string) => apiRequest<Event>(`/events/${eid}`),

    // Update event
    update: (eid: string, data: UpdateEvent) =>
        apiRequest<Event, UpdateEvent>(`/events/${eid}`, {
            method: 'PUT',
            body: data,
        }),

    // Delete event
    delete: (eid: string) =>
        apiRequest<void>(`/events/${eid}`, {
            method: 'DELETE',
        }),

    // Register for event
    register: (eid: string, data: RegisterEvent) =>
        apiRequest<void, RegisterEvent>(`/events/${eid}/register`, {
            method: 'POST',
            body: data,
        }),

    // Unregister from event
    unregister: (eid: string, data: RegisterEvent) =>
        apiRequest<void, RegisterEvent>(`/events/${eid}/register`, {
            method: 'DELETE',
            body: data,
        }),

    // Get users registered for an event
    getUsers: (eid: string) => apiRequest<EventUser>(`/events/${eid}/registrations`),
};
