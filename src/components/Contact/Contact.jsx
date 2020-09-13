import React, {useState} from "react";

import Contact from "./Contact/Contact";
import Hello from "./Hello/Hello";
import Inspiration from "./Inspiration/Inspiration";

import classes from "./Contact.module.css";

const Bio = () => {
    const [styles, setStyles] = useState({
        hello: {opacity: 1, transform: "rotateY(0) translateX(0)"},
        inspiration: {opacity: 0, transform: "rotateY(90deg) translateX(100%)"},
        contact: {opacity: 0, transform: "rotateY(-90deg) translateX(-100%)"}
    });
    const [block, setBlock] = useState("left");

    function handleClick(selection) {
        if (selection === "Inspiration") {
            if (block === "left") {
                rotateLeft();
            } else if (block === "right") {
                rotateRight();
            }
            
            setBlock("center");
        } else if (selection === "Contact") {
            if (block === "left") {
                rotateRight();
            } else if (block === "center") {
                rotateLeft();
            }
            
            setBlock("right");
        } else {
            if (block === "center") {
                rotateRight();
            } else if (block === "right") {
                rotateLeft();
            }
            
            setBlock("left");
        }
    }

    function rotateLeft() {
        setStyles(prevStyles => {
            return {
                hello: prevStyles.contact,
                inspiration: prevStyles.hello,
                contact: prevStyles.inspiration
            };
        });
    }

    function rotateRight() {
        setStyles(prevStyles => {
            return {
                hello: prevStyles.inspiration,
                inspiration: prevStyles.contact,
                contact: prevStyles.hello
            };
        });
    }

    return (
        <div className={classes.Contact}>
            <h1>
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span className={classes.LastSpan}>T</span>
            </h1>
            <div className={classes.ContactContent}>
                <Hello styles={styles.hello} />
                <Inspiration styles={styles.inspiration} />
                <Contact styles={styles.contact} />
            </div>
            <ul className={classes.ContactNav}>
                <li onClick={() => handleClick("Hello")}>Hello</li>
                <li onClick={() => handleClick("Inspiration")}>Inspiration</li>
                <li onClick={() => handleClick("Contact")}>Contact</li>
            </ul>
        </div>
    );
};

export default Bio;