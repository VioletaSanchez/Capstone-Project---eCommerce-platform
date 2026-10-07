import React, { Component } from "react";

import Carrousel from "./carrousel";
import carrouselImage1 from "../../../static/assets/images/carrousel/image_1.jpg"
import carrouselImage2 from "../../../static/assets/images/carrousel/image_2.png"
import carrouselImage3 from "../../../static/assets/images/carrousel/image_3.jpg"
import carrouselImage4 from "../../../static/assets/images/carrousel/image_4.jpg"
import carrouselImage5 from "../../../static/assets/images/carrousel/image_5.jpg"
import carrouselImage6 from "../../../static/assets/images/carrousel/image_6.png"
import carrouselImage7 from "../../../static/assets/images/carrousel/image_7.jpg"
import carrouselImage8 from "../../../static/assets/images/carrousel/image_8.jpg"
import carrouselImage9 from "../../../static/assets/images/carrousel/image_9.jpg"

export default class CarrouselContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pageTitle: "eCommerce platform",
            isLoading: false,
            data: [],
            blogModalIsOpen: false,
            cartModalIsOpen: false
        };
    }

    render() {
        const slides = [
            {url: carrouselImage1, title: "Clothes"},
            {url: carrouselImage2, title: "Clothes"}, //****
            {url: carrouselImage3, title: "Clothes"},
            {url: carrouselImage4, title: "Clothes"},
            {url: carrouselImage5, title: "Clothes"},
            {url: carrouselImage6, title: "Clothes"},
            {url: carrouselImage7, title: "Clothes"},
            {url: carrouselImage8, title: "Clothes"},
            {url: carrouselImage9, title: "Clothes"},
        ];

        if (this.state.isLoading) {
            return <div>Loading</div>
        }

        return (
            <div className="carrousel-wrapper">
                <Carrousel slides={slides} />
            </div>
        );
    }
}