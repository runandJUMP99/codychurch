import React from "react";

import classes from "./Contact.module.css";

const Contact = (props) => {
    return (
        <div className={classes.Contact} style={props.styles}>
            <img src="" alt="Hello Img"/>
            <div className={classes.ContactText}>
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus non enim pellentesque sollicitudin.</p>
            </div>
        </div>
    );
};

export default Contact;