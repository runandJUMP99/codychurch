import React from "react";

import Links from "./Links/Links";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
    return (
        <div className={classes.Toolbar}>
            <Links />
        </div>
    );
};

export default Toolbar;