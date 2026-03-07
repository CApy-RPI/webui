import '../css/organizations.css';
import '../css/carousel.css';

import type { Event } from '../types/Event.ts';

type EventCarouselPanelProps = {
    event: Event;
    className: string;
    onClick?: () => void;
};

export default function EventCarouselPanel({ event, className, onClick }: EventCarouselPanelProps) {
    return (
        <div className={`org ${className}`} onClick={onClick}>
            <div className="org-metadata">
                <div className="image-placeholder"></div>
                <span className="org-title">{event.title}</span>
                <span>{event.description}</span>
            </div>
            <div className="org-btns">
                <button className="events-btn">Events</button>
                <button className="manage-btn">Manage</button>
            </div>
        </div>
    );
}
