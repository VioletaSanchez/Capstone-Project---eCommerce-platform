import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "eCommerce platform",
            isLoading: false,
            data: [],
            blogModalIsOpen: false,
            cartModalIsOpen: false
        };

        this.handleFilter = this.handleFilter.bind(this);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleNewCartClick = this.handleNewCartClick.bind(this);
    }

    handleNewCartClick() {
        this.setState({
            cartModalIsOpen: true
        });
    }
    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        });
    }

    handleModalClose() {
        this.setState({
            blogModalIsOpen: false,
            cartModalIsOpen: false
        });
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios
            .get("https://violetasanchezproject.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                if (filter){
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                    return item.category === filter;
                })
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem   key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {

        if (this.state.isLoading) {
            return <div>Loading</div>
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter("Zapatillas")}>Zapatillas</button>
                    <button className="btn" onClick={() => this.handleFilter("Camisetas")}>Camisetas</button>
                    <button className="btn" onClick={() => this.handleFilter("Pantalones")}>Pantalones</button>
                    <button className="btn" onClick={() => this.handleFilter("Abrigos")}>Abrigos</button>
                    <button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>All</button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.PortfolioItems()}
                </div>
            </div>
        );
    }
}