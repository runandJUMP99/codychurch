import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = (props) => {
    return (
        <ul className={classes.Links}>
            <Link onClick={props.onClick} name="Home"/>
            <Link onClick={props.onClick} name="About Me" />
            <Link onClick={props.onClick} name="Contact" />
        </ul>
    );
};

export default Links;