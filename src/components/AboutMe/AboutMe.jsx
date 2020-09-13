import React from "react";

import classes from "./AboutMe.module.css";

const Music = () => {
    return (
        <div className={classes.AboutMe}>
            <h1>
                <span>S</span>
                <span>O</span>
                <span>P</span>
                <span className={classes.LastSpan}>A</span>
            </h1>
            <div className={classes.AboutBody}>
                <img src="https://d2h1pu99sxkfvn.cloudfront.net/b0/2601022/638533313_25af34490d4448bbaedb46f941f5f76d/P0.jpg" alt="Image of Sopa"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus non enim pellentesque sollicitudin.</p>
            </div>
            <p className={classes.SocialLinks}>
                <a href="https://www.depop.com/sp4cecowgirl/" target="_blank" rel="noopener noreferrer" style={{fontFamily: "Mitr, sans-serif"}}>d</a>
                <a href="https://www.twitch.tv/drinksopa" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitch"></i></a>
                <a href="https://twitter.com/drinksopa" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/drinksopa/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
            </p>
        </div>
    );
};

export default Music;