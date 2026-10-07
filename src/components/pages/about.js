import shopPicture from "../../../static/assets/images/about_us/about_us.jpg"
import React from "react";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + shopPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

            </div>
            <div className="right-column">
                <h2>
                    Here at V's shop we offer ethically and ecologically sourced clothing for pickup for all your clothing needs. Whether you want to have the newest
                    looks or to have a bit of an old-school feel, we hope you can find what you're looking for here.
                </h2>
                <h3>
                    Why use organic cotton?
                </h3>
                <h4>
                    Cotton production uses 6% of the world’s pesticides and 16% of insecticides. 
                    Organic cotton is grown without the use of artificial fertilisers and pesticides and is guaranteed to be GM-free.
                    Organic cotton is generally estimated to have about half the emissions of conventionally grown cotton, although it uses more land.
                    Organic cotton also has to meet criteria for other chemicals used in its processing, such as dyes,
                    in addition to social criteria, e.g. pay and working conditions. Seeking certified organic cotton therefore offers some assurance that it
                    has not come from a supply chain directly linked to forced labour.
                </h4>
            </div>
        </div>
    );
}