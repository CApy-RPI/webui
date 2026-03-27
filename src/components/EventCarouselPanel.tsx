import '../css/events.css';
import '../css/carousel.css';

import type { Event } from '../types/Event.ts';

type EventCarouselPanelProps = {
    event: Event;
    className: string;
    onClick?: () => void;
};

export default function EventCarouselPanel({ event, className, onClick }: EventCarouselPanelProps) {
    return (
        <div className={`event ${className}`} onClick={onClick}>
            <div className="event-metadata">
                <span className="event-title">{event.title}</span>
                <span>{event.description}</span>
            </div>
        </div>
    );
}
