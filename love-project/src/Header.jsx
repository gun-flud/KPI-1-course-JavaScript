import Navbar from "./NavBar";
import HandleMusic from "./HandleMusic";


export default function Header() {
   

    return (
        <header className="flex w-full justify-between items-center px-5">
            <HandleMusic />
            <Navbar />
        </header>
    );
}
