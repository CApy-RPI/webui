import Carousel from '../components/Carousel.tsx';

import type { Organization } from '../types/Organization.ts';

export default function Organizations() {
    /* Current API response:
        {
            "date_created": "string",
            "date_modified": "string",
            "description": "string",
            "eid": "string",
            "event_time": "string",
            "location": "string"
        }
    
    Need:
        - description
        - organization
    */

    const myOrgs: Organization[] = [
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is organization 1 This is organization 1 This is organization 1',
            name: 'CAPY',
            oid: '1',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is organization 2 This is organization 2 This is organization 2',
            name: 'LXA',
            oid: '2',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is organization 3 This is organization 3 This is organization 3',
            name: 'RPAI',
            oid: '3',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is organization 4 This is organization 4 This is organization 4',
            name: 'Robotics',
            oid: '4',
        },
        {
            date_created: new Date(),
            date_modified: new Date(),
            description: 'This is organization 5 This is organization 5 This is organization 5',
            name: 'RPISEC',
            oid: '5',
        },
    ];

    return (
        <>
            <div className={`carousel-page-container`}>
                <Carousel type="organization" title="my orgs" data={myOrgs} />
                <Carousel type="organization" title="recommended" data={myOrgs} />
            </div>
        </>
    );
}
