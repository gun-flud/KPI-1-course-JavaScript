import { useState, useEffect, useRef, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
    const links = useMemo(() => ["/1", "/2", "/3", "/4", "/5"], []);
    const [lineMove, setLineMove] = useState({ left: 0, width: 0 });
    const navRef = useRef();
    const linksRef = useRef([]);
    const location = useLocation();

    useEffect(() => {
        if (!navRef.current || !linksRef) return;
        const parent = navRef.current.getBoundingClientRect();
        const linkLocation = links.findIndex(
            (path) => path === location.pathname,
        );

        if (linkLocation !== -1 && linksRef.current[linkLocation]) {
            const navEl = linksRef.current[linkLocation].getBoundingClientRect();
            setLineMove({
                left: navEl.left - parent.left,
                width: navEl.width,
            });
        }
    }, [location, links]);

    return (
        <nav
            ref={navRef}
            // ЗМІНИ ТУТ:
            // 1. h-16 залишив для десктопу (md:h-16), а на мобільному h-auto
            // 2. max-sm:pb-6 — це відступ під "свайп-бар" айфона
            // 3. max-sm:pt-3 — відступ зверху для балансу
            className="relative w-fit flex items-center gap-3 left-0 
            md:h-16
            max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:h-auto max-sm:w-full max-sm:justify-around 
            max-sm:bg-white/95 max-sm:backdrop-blur-md max-sm:border-t max-sm:border-gray-200 
            max-sm:pb-6 max-sm:pt-3 max-sm:z-50"
        >
            {links.map((path, id) => (
                <NavLink key={path} to={path} className="relative z-10">
                    {({ isActive }) => (
                        <span
                            ref={(el) => (linksRef.current[id] = el)}
                            className={`font-black p-2 transition-colors duration-300 max-sm:text-[10px] max-sm:uppercase max-sm:tracking-wider ${
                                isActive ? "text-gray-900" : "text-gray-400"
                            }`}
                        >
                            Cтор. {path.slice(1)}
                        </span>
                    )}
                </NavLink>
            ))}

            <div
                // ЗМІНИ ТУТ:
                // max-sm:bottom-6 — піднімає лінію вище (над safe area), прямо під текст
                className="absolute left-0 border-t-pink-400 border-t-2 transition-all duration-500 ease-out
                bottom-0 max-sm:bottom-6"
                style={{
                    transform: `translateX(${lineMove.left}px)`,
                    width: lineMove.width,
                }}
            />
        </nav>
    );
}