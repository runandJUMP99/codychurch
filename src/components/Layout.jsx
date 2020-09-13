import React, {useState} from "react";

import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Toolbar from "./Toolbar/Toolbar";

import classes from "./Layout.module.css";

const Layout = () => {
    const [content, setContent] = useState(<Home />);
    const [fade, setFade] = useState(false);

    function handleClick(link) {
        setFade(true);

        setTimeout(() => {
            if (link === "About Me") {
                setContent(<AboutMe />);
            } else if (link === "Contact") {
                setContent(<Contact />);
            } else {
                setContent(<Home />);
            }
            
            setFade(false);
        }, 500);
        
    }

    return (
        <div className={classes.Layout}>
            <Toolbar onClick={handleClick}/>
            <section className={classes.Content} style={{
                filter: fade ? "blur(16px)" : "blur(0)",
                opacity: fade ? 0 : 1
            }}>
                {content}           
            </section>
        </div>
    );
};

export default Layout;