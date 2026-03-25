import { apiRequest } from './client';
import type {
    Organization,
    CreateOrganization,
    UpdateOrganization,
    OrganizationUser,
    ManageOrganizationUser,
} from '../types/Organization.ts';
import type { Event } from '../types/Event.ts';
import type { QueryParams } from '../types/QueryParams.ts';

export const organizationsApi = {
    // Get all organizations
    getAll: (params?: QueryParams) => {
        const query = new URLSearchParams();
        if (params?.limit !== undefined) {
            query.append('limit', params.limit.toString());
        }
        if (params?.offset !== undefined) {
            query.append('offset', params.offset.toString());
        }
        const queryString = query.toString();
        return apiRequest<Organization[]>(queryString ? `/organizations?${queryString}` : '/organizations');
    },

    // Create organization
    create: (data: CreateOrganization) =>
        apiRequest<Organization, CreateOrganization>(`/events`, {
            method: 'POST',
            body: data,
        }),

    // Get organization
    getById: (oid: string) => apiRequest<Organization>(`/organizations/${oid}`),

    // Update organization
    update: (oid: string, data: UpdateOrganization) =>
        apiRequest<Organization, UpdateOrganization>(`/organizations/${oid}`, {
            method: 'PUT',
            body: data,
        }),

    // Delete organization
    delete: (oid: string) =>
        apiRequest<void>(`/organizations/${oid}`, {
            method: 'DELETE',
        }),

    // Get organization's events
    events: (oid: string, params?: QueryParams) => {
        const query = new URLSearchParams();
        if (params?.limit !== undefined) {
            query.append('limit', params.limit.toString());
        }
        if (params?.offset !== undefined) {
            query.append('offset', params.offset.toString());
        }
        const queryString = query.toString();
        return apiRequest<Event[]>(
            queryString ? `/organizations/${oid}/events?${queryString}` : `/organizations/${oid}/events`
        );
    },
    // Get organization's members
    getMembers: (oid: string) => apiRequest<OrganizationUser>(`/organizations/${oid}/members`),

    // Add member to organization
    addMember: (oid: string, data: ManageOrganizationUser) =>
        apiRequest<void, ManageOrganizationUser>(`/organizations/${oid}/members`, {
            method: 'POST',
            body: data,
        }),

    // Remove organization member
    deleteMember: (oid: string, data: ManageOrganizationUser) =>
        apiRequest<void, ManageOrganizationUser>(`/organizations/${oid}/members`, {
            method: 'DELETE',
            body: data,
        }),
};
