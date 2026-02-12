import React, { useState, useRef, useEffect } from "react";
import { TimerGenerator } from "../logic/TimerGenerator";

import closeIcon from '../assets/close-icon.svg'

function PremiumIcon({ endDate = new Date('2026-02-19T01:34:19Z').getTime() }) {
    // const endDate = new Date("2026-02-12T12:03:05Z").getTime();

    const [counter, setCounter] = useState(() => {
        return TimerGenerator(endDate).next().value;
    });
    const [isOpen, setIsOpen] = useState(() => endDate > Date.now() && counter);
    const TimerRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        TimerRef.current = TimerGenerator(endDate);

        const timeIterator = setInterval(() => {
            const { value, done } = TimerRef.current.next();
  
            if (done || !value) {
                setIsOpen(false);
                clearInterval(timeIterator);
            }

            setCounter(value);
            console.log(value);
        
        }, 1000);

        if (timeIterator) {
            return () => clearInterval(timeIterator);
        }

    }, []);

    if (!isOpen) return;

    return (
        <div className="premium-icon">
            <div className="flex items-center gap-6">
                <span className="text-2xl">{counter?.days}:{counter?.hours}:{counter?.minutes}:{counter?.seconds}</span>
                <button className="button">Upgrade</button>
            </div>
            <img src={closeIcon} alt='close' className='mr-4' onClick={() => setIsOpen(false)}></img>
        </div>
    );
}

export default PremiumIcon;
