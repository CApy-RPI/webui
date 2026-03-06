import { useState } from 'react';
import '../css/carousel.css';
import Organization from './Organization';

type CarouselProps = {
    type: string;
};

export default function Carousel({ type }: CarouselProps) {
    const [active, setActive] = useState(0);

    const organizations = [
        { title: 'Math Club', desc: 'The RPI Math Faculty approved and Union affiliated math club!' },
        { title: 'Science Club', desc: 'The RPI Math Faculty approved and Union affiliated science club!' },
        { title: 'Gym Club', desc: 'The RPI Math Faculty approved and Union affiliated gym club!' },
        { title: 'Dance Club', desc: 'The RPI Math Faculty approved and Union affiliated dance club!' },
        { title: 'English Club', desc: 'The RPI Math Faculty approved and Union affiliated english club!' },
        { title: 'Coding Club', desc: 'The RPI Math Faculty approved and Union affiliated coding club!' },
        { title: 'Archery Club', desc: 'The RPI Math Faculty approved and Union affiliated archery club!' },
        { title: 'Golf Club', desc: 'The RPI Math Faculty approved and Union affiliated golf club!' },
        { title: 'Running Club', desc: 'The RPI Math Faculty approved and Union affiliated running club!' },
        { title: 'Study Club', desc: 'The RPI Math Faculty approved and Union affiliated study club!' },
    ];

    const moveLeft = () => {
        setActive((prev) => Math.max(prev - 1, 0));
    };

    const moveRight = () => {
        setActive((prev) => Math.min(prev + 1, organizations.length - 1));
    };

    return (
        <div className="carousel-container">
            <span className="carousel-title">{type}</span>

            <div className="carousel-wrapper">
                <button className="carousel-arrow left" onClick={moveLeft}>
                    ‹
                </button>

                <div className="carousel">
                    {organizations.map((org, index) => {
                        const offset = index - active;
                        return (
                            <Organization
                                key={index}
                                className={`carousel-item offset-${offset}`}
                                title={org.title}
                                desc={org.desc}
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
