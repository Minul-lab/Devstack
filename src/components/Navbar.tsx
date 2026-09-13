import { useState } from "react";
import logo from "../assets/logo-text.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className=" items-center px-6 py-4 sticky top-0 bg-white/80">
      <div className="relative flex justify-between max-w-7xl items-center mx-auto">
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img className="w-32" src={logo} alt="Devstack" />
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full">
            <ul className="bg-white border-t border-slate-200 p-4 space-y-3">
              <li className="font-medium text-slate-600">Home</li>
              <li className="font-medium text-slate-600">Technologies</li>
              <li className="font-medium text-slate-600">Projects</li>
              <li className="font-medium text-slate-600">About</li>
              <li className="font-medium text-slate-600">Contact</li>
            </ul>
          </div>
        )}
        <div className="hidden md:block">
          <ul className="flex gap-5">
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Home
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Technologies
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Projects
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              About
            </li>
            <li className="text-2 font-medium text-slate-600 hover:text-[#D91B7E]">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="hidden md:block">Sign In</button>
          <button className="bg-[#D91B7E] text-white font-medium text-sm px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
