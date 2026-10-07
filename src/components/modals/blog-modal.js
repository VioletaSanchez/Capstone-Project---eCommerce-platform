import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "../blog/blog-form"

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
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

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    }

    handleSuccessfulFormSubmission(blog) {
        this.props.handleSuccessfulNewBlogSubmission(blog);
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
                <BlogForm
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                />
            </ReactModal>
        );
    }
}