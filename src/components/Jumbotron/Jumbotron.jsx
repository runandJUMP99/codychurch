import React from "react";

import Toolbar from "./Toolbar/Toolbar";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <Toolbar />
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
        </div>
    );
};

export default Jumbotron;