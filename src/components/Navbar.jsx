import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full shadow bg-white py-2.5 px-20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <img src={Logo} className="size-[10%]"/>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-5 text-md">
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3"><a href="#">Home</a></li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3"><a href="#services">Services</a></li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3"><a href="#project">Projects</a></li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3"><a href="#contact">Contact</a></li>
                    <Link to={"/login"}><li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Admin Login</li></Link>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <ul className="md:hidden mt-4 flex flex-col gap-4 bg-gray-100 p-4 rounded-lg text-lg">
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Home</li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Services</li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Projects</li>
                    <li className="hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Contact</li>
                    <li className= "hover:text-white cursor-pointer font-bold hover:bg-orange-500 p-3">Admin Login</li>
                </ul>
            )}
        </nav>
    );
}
