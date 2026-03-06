import Carousel from '../components/Carousel.tsx';

export default function Events() {
    return (
        <>
            <div className={`carousel-page-container`}>
                <Carousel type="my events"/>
                <Carousel type="recommended"/>
            </div>
        </>
    );
}
