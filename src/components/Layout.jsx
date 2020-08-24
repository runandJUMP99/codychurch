import React, {useState} from "react";

import Bio from "./Bio/Bio";
import Home from "./Home/Home";
import Music from "./Music/Music";
import Toolbar from "./Toolbar/Toolbar";

import classes from "./Layout.module.css";

const Layout = () => {
    const [content, setContent] = useState(<Bio />);
    const [fade, setFade] = useState(false);

    function handleClick(link) {
        setFade(true);

        setTimeout(() => {
            if (link === "Music") {
                setContent(<Music />);
            } else if (link === "Bio") {
                setContent(<Bio />);
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