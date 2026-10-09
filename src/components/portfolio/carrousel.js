import React, { useEffect, useState } from "react";

const Carrousel = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, advanceAutoplay] = useState(true);
    let timeOut = null;

    const sliderStyles = {
        height: "100%",
        position: "relative"
    };
    
    const slideStyles = {
        width: "100%",
        height: "100%",
        boderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "30px",
        fontSize: "50px",
        color: "#fff",
        zIndex: "1",
        cursor: "pointer"
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "30px",
        fontSize: "50px",
        color: "#fff",
        zIndex: "1",
        cursor: "pointer"
    };

    useEffect( () => {
        timeOut = autoplay && setTimeout(() => {
            goRight();
        }, 2000);
    });
    
    const goLeft = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goRight = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carrousel-object" style={sliderStyles}>
            <div className="carrousel-arrow" style={leftArrowStyles} onClick={goLeft}>←</div>
            <div className="carrousel-arrow" style={rightArrowStyles} onClick={goRight}>→</div>
            <div className="carrousel-item"
            onMouseEnter={() => {
                {advanceAutoplay(false)};
                clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
                {advanceAutoplay(true)};
            }}
                style={ slideStyles }                
            >
            </div>
        </div>
    );
};

export default Carrousel;