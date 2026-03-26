export type Event = {
    date_created: string;
    date_modified: string;
    description: string;
    eid: string;
    event_time: string;
    location: string;
    //    organization: string;
    //    title: string;
};

export type CreateEvent = {
    description: string;
    event_time: string;
    location: string;
    org_id: string;
};

export type UpdateEvent = {
    description: string;
    event_time: string;
    location: string;
};

export type RegisterEvent = {
    is_attending: boolean;
    uid: string;
};

export type EventUser = {
    date_registered: string;
    first_name: string;
    is_admin: boolean;
    is_attending: boolean;
    last_name: string;
    uid: string;
};
