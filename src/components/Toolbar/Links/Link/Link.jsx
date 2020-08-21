import React from "react";

import classes from "./Link.module.css";

const Link = (props) => {
    return <li onClick={() => props.onClick(props.name)} className={classes.Link}>{props.name}</li>
};

export default Link;