import { useState, useEffect, useRef, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const links = useMemo(() => ['/1', '/2', '/3', '/4', '/5'], []);
    const [lineMove, setLineMove] = useState({});
    const navRef = useRef();
    const linksRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
        if (!navRef.current || !linksRef) return;

        const parent = navRef.current.getBoundingClientRect();

        const linkLocation = links.findIndex(path => path === location.pathname);
        if (linkLocation !== -1 && linksRef.current[linkLocation]) {
            const navEl = linksRef.current[linkLocation].getBoundingClientRect();
            // const navEl = el.getBoundingClientRect();
            setLineMove({
                left: navEl.left - parent.left,
                width: navEl.width,
            });
        }

    }, [location, links]);

    return (
        <nav ref={navRef} className="relative h-16 w-fit flex items-center gap-3 left-0">
            {links.map((path, id) => (
                <NavLink key={path} to={path}>
                    {({ isActive}) => (
                        <span ref={(el) => linksRef.current[id] = el} className={`font-black p-2 ${isActive ? 'text-gray-800' : 'text-gray-500'}`}>
                            Cторінка {path.slice(1)}
                        </span>
                    )}
                        
                </NavLink>
            ))}

            <div className="absolute bottom-0 left-0 border-t-pink-400 border-t-2 transition-all duration-300"
            style={{
                left: lineMove.left,
                width: lineMove.width,
            }}
            />
            
        </nav>
    );
}

