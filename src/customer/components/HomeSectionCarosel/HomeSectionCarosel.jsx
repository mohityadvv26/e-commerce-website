import React, { useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';  // Import Button component

const HomeSectionCarousel = ({data,sectionName}) => {
    const carouselRef = useRef(null);           
    const [activeIndex, setActiveIndex] = React.useState(0);

    const responsive = {
        0: { items: 1 },
        520: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item); 

    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <div className="">
            <h2 className="text-2xl font-extrabold text-gray-500 py-5">{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    ref={carouselRef}
                />

                {activeIndex < items.length - 5 && (
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                    </Button>
                )}

                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="previous"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
