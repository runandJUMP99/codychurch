import React from "react";

import classes from "./Music.module.css";

const Music = () => {
    return (
        <div className={classes.Music}>
            <h1>
                <span>M</span>
                <span>U</span>
                <span>S</span>
                <span>I</span>
                <span className={classes.LastSpan}>C</span>
            </h1>
            <div className={classes.MusicBody}>
                <div className={classes.SoundCloudDiv}>
                    <iframe height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/868106821&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                    <div className={classes.SoundCloudWidgetLinks}><a href="https://soundcloud.com/cody-church" title="Cody Church" target="_blank">Cody Church</a> · <a href="https://soundcloud.com/cody-church/simic-freeverse" title="Simic (Freeverse)" target="_blank">Simic (Freeverse)</a></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lectus non enim pellentesque sollicitudin.</p>
            </div>
            <p className={classes.SocialLinks}>
                <a href="https://soundcloud.com/cody-church" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud"></i></a>
                <a href="https://open.spotify.com/artist/3ua9Bx7U1ZV0BDx9FdvrE5" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify"></i></a>
                <a href="https://music.apple.com/us/album/14-hrs-single/1505627046" target="_blank" rel="noopener noreferrer"><i class="fab fa-itunes"></i></a>
            </p>
        </div>
    );
};

export default Music;