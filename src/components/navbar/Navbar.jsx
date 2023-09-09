import React, { useState } from "react";
import TailzupLogo from "../icons/TailzupLogo";
import { Avatar } from "../icons/Avatar";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { SearchIcon } from "../icons/SearchIcon";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuHidden = !isMobileMenuOpen ? "hidden md:block": "" ;
  return (
    <nav className="navbar">
      <div className="brand-wrapper">
        <a className="brand" href="/">
          <TailzupLogo color="orange" />
        </a>
      </div>
      <div
        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}
      >
        <div id="items" className="items-strip">
          <div id="left" className="items-left">
            <input
              className="text-input"
              type="email"
              placeholder="Find donald trump or something..."
            />
            <SearchIcon className="h-6 w-6 mx-1 stroke-orange-400" />
          </div>
          <div id="right" >
            <ul className="items-list">
              <li className="nav-item md:order-last">
                <a href="/">
                  <Avatar className="h-8 w-8 glow" stroke="pink" strokeWidth={1.2} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Friends
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Messages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
          className={`absolute top-3 right-4 p-1 border border-orange-400 rounded md:hidden text-slate-500 hover:text-slate-300 hover:bg-orange-200`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <a href="/">
          <HamburgerIcon className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
