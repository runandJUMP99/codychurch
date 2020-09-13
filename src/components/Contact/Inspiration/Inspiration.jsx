import React from "react";

import classes from "./Inspiration.module.css";

const Inspiration = (props) => {
    return (
        <div className={classes.Inspiration} style={props.styles}>
            <div className={classes.InspirationText}>
                <h2>Inspiration</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus non enim pellentesque sollicitudin.</p>
            </div>
            <img src="" alt="Inspiration Img"/>
        </div>
    );
};

export default Inspiration;