import { useEffect, useState, useRef } from "react";
import { Howl, Howler } from "howler";

import volumeDown from "./assets/volume-down.svg";
import volumeUp from "./assets/volume-up.svg";
import volumeMute from "./assets/volume-mute.svg";
import volumeOff from "./assets/volume-off.svg";

import Mysong from "./assets/music.mp3";

export default function HandleMusic() {
    const [isOpen, setIsOpen] = useState(false);
    const musicRef = useRef();
    const music = new Howl({
        src: Mysong,
        volume: 0.0,
        autoplay: true,
    });
    music.play();
    
    useEffect(() => {
        
    }, [music]);

    return (
            <div ref={musicRef} className="">
                <img
                    src={volumeMute}
                    alt="volume mute"
                    className="w-6 cursor-pointer"
                    onClick={() => music.mute(true)}
                />
            </div>
    );
}
