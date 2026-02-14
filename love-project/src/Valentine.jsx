import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import sticker1 from "./assets/sticker1.webp";
import sticker2 from "./assets/sticker2.webp";
import sticker3 from "./assets/sticker3.webp";
import sticker4 from "./assets/sticker4.webp";
import sticker5 from "./assets/sticker5.webp";
import sticker6 from "./assets/sticker6.webp";
import sticker7 from "./assets/sticker7.webp";
import sticker8 from "./assets/sticker8.webp";
import sticker9 from "./assets/sticker9.webp";
import sticker10 from "./assets/sticker10.webp";
import sticker11 from "./assets/sticker11.webp";
import sticker12 from "./assets/sticker12.webp";
import sticker13 from "./assets/sticker13.webp";
import sticker14 from "./assets/sticker14.webp";
import sticker15 from "./assets/sticker15.webp";
import sticker16 from "./assets/sticker16.webp";
//import { redirect } from "react-router-dom";


function Valentine() {
    const [currentId, setCurrentId] = useState(0);
    // const [buttonSize, setButtonSize] = useState({})
    const [isBouncing, setIsBouncing] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [deleteButton, setDeleteButton] = useState(false);
  
    const velocity = useRef({ x: 1, y: 1 });
    const buttonRef = useRef(null);
    const animationFrameId = useRef();
    const navigate = useNavigate();

    const stickers = [sticker1, sticker2, sticker3, sticker4, sticker5, sticker6, sticker7, sticker8, sticker9, sticker10, sticker11, sticker12, sticker13, sticker14, sticker15, sticker16];
    const text = [
        "Ти будеш моєю валентинкою?",
        "ну я ж тебе так люблююююююю",
        "дарую компліменти",
        "дарую квіти",
        "допомагаю заснути, та не сумувати",
        "ти цьо???????",
        "капеццццььь",
        "я не зрозумів, міледі Єлизаветко, погоджуйся!!!!!",
        "якщо ти не погодишся, почнуться наслідки!!!!!",
        "як тобі таке, Ілон Макс))))",
        "а ти я бачу настирлива!!!!!",
        "ну все, тепер ти не зможеш відмовитись))))",
        "капець",
        "що ж делать, що ж делатьььь",
        "у мене є ідеяяяяяяяя",
        "я твоя валентинка, все, у тебе нема шансу відмовитись!!!!!"

    ];
    

  // This starts the "DVD" 
  const startBouncing = () => {
    if (!isBouncing) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ x: rect.left, y: rect.top });
      setIsBouncing(true);
    }
  };

  // The Animation Loop
    useEffect(() => {
        if (!isBouncing) return;

        const updatePosition = () => {
        setPosition((prevPos) => {
            const button = buttonRef.current;
            if (!button) return prevPos;

            let newX = prevPos.x + velocity.current.x;
            let newY = prevPos.y + velocity.current.y;
            const width = button.offsetWidth;
            const height = button.offsetHeight;

            // Check Left/Right Walls (Window Width)
            if (newX <= 0 || newX + width >= window.innerWidth) {
            velocity.current.x = -velocity.current.x; // Reverse horizontal direction
            newX = Math.max(0, Math.min(newX, window.innerWidth - width)); // Clamp to screen
            }

            // Check Top/Bottom Walls (Window Height)
            if (newY <= 0 || newY + height >= window.innerHeight) {
            velocity.current.y = -velocity.current.y; // Reverse vertical direction
            newY = Math.max(0, Math.min(newY, window.innerHeight - height)); // Clamp to screen
            }

            return { x: newX, y: newY };
        });

        animationFrameId.current = requestAnimationFrame(updatePosition);
        };

        // Start the loop
        animationFrameId.current = requestAnimationFrame(updatePosition);

        // Cleanup when component unmounts
        return () => cancelAnimationFrame(animationFrameId.current);
    }, [isBouncing]);

    function handleNo() {
        if (currentId < stickers.length) {
            setCurrentId(prev => prev + 1);
        }

        if (currentId === stickers.length - 2) {
            setDeleteButton(true);
            return; 
        }

        if (currentId > 9) {
            startBouncing();
        }
    }


    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
                <img src={stickers[currentId]} alt="sticker" className="w-58 h-58 "/>
                {(currentId < 5) && <h1 className="text-5xl font-bold text-red-500 transition-all duration-500">Я тебе кохаю</h1>}
                <div className={`${ currentId > 4 ? "text-4xl" : "text-xl" } text-gray-700 text-center max-w-md transition-all duration-500`}>
                    {text[currentId]}
                </div>
                <div className="relative flex gap-15 mt-5">
                    <button 
                    className={` ${ (currentId > 8 && currentId < 15)  && "px-20 p-3 text-l"} ${ deleteButton ? "px-24 p-10 text-xl" : "px-8 p-3"}  bg-red-500 text-white rounded-4xl hover:bg-red-600 transition-all duration-1600 ease-in-out`}
                    onClick={() => navigate("/2")}>
                        Так
                    </button>
                    { !deleteButton && 
                    <button onPointerDown={(e) => {
                                e.preventDefault(); 
                                handleNo();
                            }}
                    ref={buttonRef}
                    style={
                        isBouncing
                        ? {
                            position: "fixed",
                            left: position.x,
                            top: position.y,
                            zIndex: 50, // Ensure it floats above everything
                            }
                        : {}
                    }
                    className={`${ (currentId > 8 && currentId < 15) ? "px-6 p-3" : "px-8 p-3"} bg-red-500 text-white rounded-4xl hover:bg-red-600 transition-colors duration-500`}>
                        Ні 
                    </button>}
                </div>
            </div>
        </div>
    );
}

export default Valentine;

