import Carousel from '../components/Carousel.tsx';

export default function Organizations() {
    return (
        <>
            <div className={`carousel-page-container`}>
                <Carousel type="my orgs"/>
                <Carousel type="recommended"/>
            </div>
        </>
    );
}
