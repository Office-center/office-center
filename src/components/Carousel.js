import React, { useRef, useState, useEffect, createRef } from "react";
import images1 from '../assets/images1.jpg'
import images2 from '../assets/images2.jpg'
import images3 from '../assets/images3.jpg'

const images = [images1, images2, images3]

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const refs = images.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
    }, {});

    const scrollToImage = i => {
        setCurrentImage(i);
        refs[i].current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    };

    const totalImages = images.length;

    const nextImage = () => {
        if (currentImage >= totalImages - 1) {
            scrollToImage(0);
        } else {
            scrollToImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if (currentImage === 0) {
            scrollToImage(totalImages - 1);
        } else {
            scrollToImage(currentImage - 1);
        }
    };

    const arrowStyle = 'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

    const sliderControl = isLeft => (
        <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
            style={{ top: '45%' }}
        >
            <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
                {isLeft ? '◀' : '▶'}
            </span>
        </button>
    );

    return (
        <div className="flex justify-center w-screen md:w-7/12 items-center">
            <div className="relative w-full">
                <div className="carousel">
                    {sliderControl(true)}
                    {images.map((img, i) => (
                        <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                            <img src={img} className="w-full object-contain" />
                        </div>
                    ))}
                    {sliderControl()}
                </div>
            </div>
        </div>
    );
};

export default Carousel;