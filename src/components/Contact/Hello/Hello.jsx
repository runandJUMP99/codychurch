import React from "react";

import classes from "./Hello.module.css";

const Hello = (props) => {
    return (
        <div className={classes.Hello} style={props.styles}>
            <img src="" alt="Hello Img"/>
            <div className={classes.HelloText}>
                <h2>Hello</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus non enim pellentesque sollicitudin.</p>
            </div>
        </div>
    );
};

export default Hello;