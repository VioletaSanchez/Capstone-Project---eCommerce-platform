import React, { Component } from "react";
import ReactModal from "react-modal";

export default class CartModal extends  Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "40%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(40%, -50%)", //here is where you can move the column for the cart around ****
                width: "800px",
                height: "100%"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };
    }

    render() {
        return (
            <ReactModal
            style={this.customStyles}
            onRequestClose={() => {
                this.props.handleModalClose();
            }}
            isOpen={this.props.modalIsOpen}
            >
                <h1>This is your cart</h1>
            </ReactModal>
        )
    }
}