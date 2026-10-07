import React from "react";
import contactPagePicture from "../../../static/assets/images/login/login_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
        
            </div>
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">
                            385-863-7094
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>
                        <div className="text">
                            coolshop@email.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>
                        <div className="text">
                            117 Mountain Circle
                            Salt Lake City, UT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}