import React from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

const HamburgerIcon = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div
        className={`absolute top-3 right-4 p-1 border border-slate-500 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-slate-500`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
        <a>
            <Bars4Icon className="w-8 h-8" stroke="yellow" style={{border: "1px solid orange"}}/>
        </a>
    </div>
  );
};

export default HamburgerIcon;
