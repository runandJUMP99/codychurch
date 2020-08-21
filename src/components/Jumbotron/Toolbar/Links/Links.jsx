import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = () => {
    return (
        <ul className={classes.Links}>
            <li><Link name="Home"/></li>
            <li><Link name="Music" /></li>
            <li><Link name="Bio" /></li>
        </ul>
    );
};

export default Links;