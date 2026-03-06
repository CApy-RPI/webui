import '../css/carousel.css';
import Organization from './Organization.tsx';

type CarouselProps = {
    type: string;
};

export default function Carousel({ type }: CarouselProps) {
    return (
        <>
            <div className="carousel-container">
                <div>
                    <span className="carousel-title">{type}</span>
                    <div className="carousel">
                        <Organization
                            title="Math Club"
                            desc="The RPI Math Faculty approved and Union affiliated math club!"
                        />
                        <Organization
                            title="Math Club"
                            desc="The RPI Math Faculty approved and Union affiliated math club!"
                        />
                        <Organization
                            title="Math Club"
                            desc="The RPI Math Faculty approved and Union affiliated math club!"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
