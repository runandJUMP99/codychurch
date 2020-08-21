import React from "react";

import Links from "./Links/Links";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <Links onClick={props.onClick}/>
        </div>
    );
};

export default Toolbar;