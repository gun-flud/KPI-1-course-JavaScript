import sticker1 from "./assets/sticker1.webp";
// import sticker2 from "./assets/sticker2.png";
// import sticker3 from "./assets/sticker3.png";
// import sticker4 from "./assets/sticker4.png";
// import sticker5 from "./assets/sticker5.png";

function Valentine() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold text-red-500">Happy Valentine's Day!</h1>
            <img src={sticker1} alt="sticker" className="w-32 h-32"/>
        </div>
    );
}

export default Valentine;