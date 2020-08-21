import React from "react";

import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = (props) => {
    return (
        <ul className={classes.Links}>
            <Link onClick={props.onClick} name="Home"/>
            <Link onClick={props.onClick} name="Music" />
            <Link onClick={props.onClick} name="Bio" />
        </ul>
    );
};

export default Links;