import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import NavigationContainer from './navigation/navigation-container';
import Product from './pages/product';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PortfolioDetail from "./portfolio/portfolio-detail";
import PortfolioManager from "./pages/portfolio-manager";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Icons from "../helpers/icons"



export default class App extends Component {
    constructor(props) {
        super(props);

        Icons();

        this.state={
            loggedInStatus: "NOT_LOGGED_IN"
        };

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    }

    handleSuccessfulLogin() {
        this.setState({
            loggedInStatus: "LOGGED_IN"
        });
    }

    handleUnsuccessfulLogin() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
        });
    }

    handleSuccessfulLogout() {
        this.state = ({
            loggedInStatus: "NOT_LOGGED_IN"
        });
    }

    checkLoginStatus() {
        return axios.get("https://api.devcamp.space/logged_in", { 
            withCredentials: true 
        }).then(response => {
            const loggedIn = response.data.logged_in;
            const loggedInStatus = this.state.loggedInStatus;

            if (loggedIn && loggedInStatus === "LOGGED_IN") {
                return loggedIn;
            } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
                this.setState({
                    loggedInStatus: "LOGGED_IN"
                });
            } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
                this.setState({
                    loggedInStatus: "NOT_LOGGED_IN"
                });
            }
        })
        .catch(error => {
            console.log("Error", error);
        });
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    authorizedPages() {
        return [
            <Route key="porfolio-manager" path="/portfolio-manager" component={PortfolioManager} />
        ];
    }

    render() {
        return (
            <div className="container">
                <Router>
                <div>
                    <NavigationContainer
                        loggedInStatus={this.state.loggedInStatus}
                        handleSuccessfulLogout={this.handleSuccessfulLogout}
                    />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={Product} />

                        <Route
                            path="/login"
                            render={props => (<Auth
                                {...props}
                                handleSuccessfulLogin={this.handleSuccessfulLogin}
                                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                            />
                        )}
                        />
                    
                        
                        <Route path="/about-us" component={About} />
                        <Route path="/contact" component={Contact} />

                        {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
                        <Route exact path="/product/:slug" component={PortfolioDetail} /* **** Here is the thingy for the product website *//>
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                </Router>
            </div>
        );
    }
}
