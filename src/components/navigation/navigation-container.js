import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";


const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };
    
    const handleSingOut = () => {
        axios
        .delete("https://api.devcamp.space/logout", {withCredentials: true})
        .then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
        return (response.data);
        })
        .catch(error => {
            console.log("Error signing out", error);
        });
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/home2" activeClassName="nav-link-active">Home</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Products</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/about-us" activeClassName="nav-link-active">About us</NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>
                {/*
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div> 
                Blog no longer used **** */}
                {props.loggedInStatus === "LOGGED_IN" ? (dynamicLink("/portfolio-manager", "Product Manager")) : null} {/* Gotta change names here **** */}
            </div>

            <div className="right-side">
                <div className="nav-link-wrapper">
                    {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSingOut}>
                        LOG OUT { /* <FontAwesomeIcon icon="sign-out-alt" /> */}
                    </a> : null}
                </div>

                
                
            </div>
         </div>
    );
}

export default withRouter(NavigationComponent);