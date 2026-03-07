import { useState } from 'react';
import '../css/carousel.css';

import EventPanel from './EventCarouselPanel.tsx';
import OrganizationPanel from './OrganizationCarouselPanel.tsx';

import type { Event } from '../types/Event.ts';
import type { Organization } from '../types/Organization.ts';

type CarouselProps =
    | { type: 'event'; title: string; data: Event[] }
    | { type: 'organization'; title: string; data: Organization[] };

export default function Carousel({ type, title, data }: CarouselProps) {
    console.log(data);
    const [active, setActive] = useState(0);

    const moveLeft = () => {
        setActive((prev) => Math.max(prev - 1, 0));
    };

    const moveRight = () => {
        setActive((prev) => Math.min(prev + 1, data.length - 1));
    };

    return (
        <div className="carousel-container">
            <span className="carousel-title">{title}</span>

            <div className="carousel-wrapper">
                <button className="carousel-arrow left" onClick={moveLeft}>
                    ‹
                </button>

                <div className="carousel">
                    {type === 'event'
                        ? data.map((event, index) => {
                              const offset = index - active;

                              return (
                                  <EventPanel
                                      event={event}
                                      className={`carousel-item offset-${offset}`}
                                      onClick={() => setActive(index)}
                                  />
                              );
                          })
                        : data.map((org, index) => {
                              const offset = index - active;

                              return (
                                  <OrganizationPanel
                                      organization={org}
                                      className={`carousel-item offset-${offset}`}
                                      onClick={() => setActive(index)}
                                  />
                              );
                          })}
                </div>

                <button className="carousel-arrow right" onClick={moveRight}>
                    ›
                </button>
            </div>
        </div>
    );
}
