import { transform } from "babel-core";
import React, { useState } from "react";

//import carrouselImage1 from "../../../static/assets/images/carrousel/image_1.jpg"

const Carrousel = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
        top: "500%",
        transform: "translate(0, -50%)",
        left: "30px",
        fontSize: "50px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    };
    
    return (
        <div className="carrousel-object" style={sliderStyles}>
            <div className="carrousel-arrow" style={leftArrowStyles}>←</div>
            <div className="carrousel-arrow" style={rightArrowStyles}>→</div>
            <div className="carrousel-item"
                style={ slideStyles }
                //{{ backgroundImage: `url(${location})`}}
                //{{background: "url(" + carrouselImage1 + ") no-repeat"}} ****
                //{{ backgroundImage: `url(${slides[currentIndex].url})`}}
                
            >
            </div>
        </div>
    );
};

export default Carrousel;