import '../css/carousel.css';
import Organization from './Organization.tsx';

type CarouselProps = {
    type: string;
}

export default function Carousel({ type }: CarouselProps) {
    return (
        <>
            <div>
                <h2 className="carousel-title">{type}</h2>
                <div className="carousel">
                    <Organization />
                    <Organization />
                    <Organization />
                </div>  
            </div>
        </>
    );
}
