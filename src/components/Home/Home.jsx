import React from "react";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <h1>
                <div className={classes.FirstName}>
                    <span>D</span>
                    <span>R</span>
                    <span>I</span>
                    <span>N</span>
                    <span>K</span>
                </div>
                <div className={classes.LastName}>
                    <span>S</span>
                    <span>O</span>
                    <span>P</span>
                    <span>A</span>
                </div>
            </h1>
            <img src="https://static.dribbble.com/users/5240993/screenshots/13947079/media/54046c0ab773eaba90252a63ef2b1fab.png" alt="Sopa Ramen Bath"/>
            <p>BYOB. Bring Your Own Bowl.</p>
        </div>
    );
};

export default Home;