import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
    return <a className={classes.Link} href="">{props.name}</a>
};

export default Link;