import Carousel from '../components/Carousel.tsx';

import type { Event } from '../types/Event.ts';

export default function Events() {
    // 1. Fetch my_events and rec_events
    // 2. Parse date/time types from string to date/time
    // 3. Make it into variables below:

    /* Current API response:
        {
            "date_created": "string",
            "date_modified": "string",
            "description": "string",
            "eid": "string",
            "event_time": "string",
            "location": "string"
        }
    
    Still Need:
        - description
        - organization
    */

    // SAMPLE DATA
    const myEvents: Event[] = [
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 1 This is event 1 This is event 1 This is event 1',
            eid: '1',
            event_time: new Date(),
            location: 'Amos Eaton',
            organization: 'Chorus',
            title: 'Sing-along',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 2 This is event 2 This is event 2 This is event 2',
            eid: '2',
            event_time: new Date(),
            location: 'VCC',
            organization: 'Coding',
            title: 'Hackathon',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 3 This is event 3 This is event 3 This is event 3',
            eid: '3',
            event_time: new Date(),
            location: 'Sage',
            organization: 'Dance',
            title: 'Competition',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 4 This is event 4 This is event 4 This is event 4',
            eid: '4',
            event_time: new Date(),
            location: 'Folsom',
            organization: 'Math',
            title: 'Review Session',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 5 This is event 5 This is event 5 This is event 5',
            eid: '5',
            event_time: new Date(),
            location: 'EMPAC',
            organization: 'AGT',
            title: 'America Got Talent',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 6 This is event 6 This is event 6 This is event 6',
            eid: '6',
            event_time: new Date(),
            location: 'Sage Dining Hall',
            organization: 'CCPD',
            title: 'Networking Session',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 7 This is event 7 This is event 7 This is event 7',
            eid: '7',
            event_time: new Date(),
            location: 'EMPAC',
            organization: 'AGT',
            title: 'America Got Talent',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 5 This is event 5 This is event 5 This is event 5',
            eid: '8',
            event_time: new Date(),
            location: 'EMPAC',
            organization: 'AGT',
            title: 'America Got Talent',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 5 This is event 5 This is event 5 This is event 5',
            eid: '9',
            event_time: new Date(),
            location: 'EMPAC',
            organization: 'AGT',
            title: 'America Got Talent',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is event 5 This is event 5 This is event 5 This is event 5',
            eid: '10',
            event_time: new Date(),
            location: 'EMPAC',
            organization: 'AGT',
            title: 'America Got Talent',
        },
    ];

    return (
        <>
            <div className={`carousel-page-container`}>
                <Carousel type="event" title="my events" data={myEvents} />
                <Carousel type="event" title="recommended" data={myEvents} />
            </div>
        </>
    );
}
