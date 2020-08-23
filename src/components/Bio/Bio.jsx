import React from "react";

import classes from "./Bio.module.css";

const Bio = () => {
    return (
        <div className={classes.Bio}>
            <h1>
                <span>B</span>
                <span>I</span>
                <span className={classes.LastSpan}>O</span>
            </h1>
            <p>Coming Soon</p>
        </div>
    );
};

export default Bio;