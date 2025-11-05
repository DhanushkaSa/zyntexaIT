import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegFile } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#services" },
    { name: "Team", link: "#team" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="flex items-center border  max-md:w-full max-md:justify-between border-slate-700 px-6 py-1  text-white text-[16px] relative bg-black/40 backdrop-blur-md">
      {/* Logo */}
      <div className="ml-2 sm:ml-3 w-40  p-1 ">
        <img
          className="rounded-full  w-2/4 sm:w-3/4 lg:w-full"
          src="/images/mainlogo.jpg"
        ></img>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10 ml-48">
        {navItems.map((item) => (
          <a key={item.name} href={item.link} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden ml-72 md:flex items-center">

        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Our Projects
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-400"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 bg-black w-full flex-col items-center gap-4 py-6 text-base transition-all duration-300 ${menuOpen ? "flex" : "hidden"
          }`}
      >
        {navItems.map((item) => (
          <a key={item} href={item.link} className="hover:text-indigo-600">
            {item.name}
          </a>
        ))}
      
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Our Projects
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
