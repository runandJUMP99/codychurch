import React from "react";

import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.Home}>
            <video src="https://firebasestorage.googleapis.com/v0/b/codychurch-f03b5.appspot.com/o/smoke.mp4?alt=media&token=6c9ebccd-15ff-4272-a29a-ed2b5fc3cc3d" autoPlay muted></video>
            <h1>
                <div className={classes.FirstName}>
                    <span>C</span>
                    <span>O</span>
                    <span>D</span>
                    <span>Y</span>
                </div>
                <div className={classes.LastName}>
                    <span>C</span>
                    <span>H</span>
                    <span>U</span>
                    <span>R</span>
                    <span>C</span>
                    <span>H</span>
                </div>
            </h1>
            <p>Classic styles with a modern twist? Nah, I'm just doing what feels good.</p>
        </div>
    );
};

export default Home;