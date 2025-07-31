import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Home", "Services", "Case Studies", "About", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-6xl mx-auto mt-4 px-6 py-1 rounded-full bg-[#71b5f0] text-black shadow-lg flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Growth Shark Logo" className="h-20 w-auto" />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex gap-6 items-center font-medium text-sm">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`relative transition-all duration-200 hover:text-gray-600 ${active === item ? "text-black" : "text-gray-800"
                                }`}
                        >
                            {item}
                            {active === item && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Toggle Button */}
                <div className="hidden md:flex">
                    <button className="ml-6 px-5 py-2 rounded-full bg-lime-400 text-black font-bold hover:brightness-110 transition">
                        TOGGLE STEALTH MODE
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#06131e] text-white mt-2 mx-4 rounded-lg shadow-lg py-4 px-6 space-y-3">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActive(item);
                                setIsOpen(false);
                            }}
                            className={`block w-full text-left py-1 transition-all ${active === item ? "text-white font-semibold" : "text-gray-300"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                    <button className="w-full px-4 py-2 mt-2 rounded-full bg-lime-400 text-black font-bold hover:brightness-110 transition">
                        TOGGLE STEALTH MODE
                    </button>
                </div>
            )}
        </nav>
    );
}
