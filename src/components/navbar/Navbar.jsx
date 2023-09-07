import React, { useState } from "react";
import Avatar from "../icons/Avatar";
import SearchIcon from "../icons/SearchIcon";
import HamburgerIcon from "../icons/HamburgerIcon";
import TailzupLogo from "../icons/TailzupLogo";
import { UserIcon } from "@heroicons/react/24/outline";
import {  } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuHidden = !isMobileMenuOpen ? "hidden md:block": "" ;
  return (
    <nav
      className="
									navbar
									flex flex-col justify-start md:flex-row md:justify-between md:items-center
								"
    >
      <div
        className="
										nav-wrapper
										flex justify-start items-center flex-1 self-start
									"
      >
        <a className="brand" href="/">
          <TailzupLogo color="#f0f9ff" />
        </a>
      </div>
      <div
        className={`${menuHidden} border-t border-slate-500 md:border-none text-amber-50 transition-all ease-in-out duration-1000`}
      >
        <div
          id="items"
          className="
											my-2
											flex flex-col justify-start items-start
											md:flex-row md:justify-start md:items-center
										"
        >
          <div
            className="
												left mx-2 p-2
												order-last md:order-none
												flex justify-center items-center
											"
          >
            <input
              className="text-input"
              type="email"
              placeholder="Find danielle trump or storm..."
            />
            <MagnifyingGlassIcon className="h-6 w-6 mx-1 hover:glow" />
          </div>
          <div>
            <ul
              id="right"
              className="
													flex flex-col
													md:flex-row md:justify-start md:items-center
												"
            >
              <li className="nav-item md:order-last">
                <a href="/">
                  <UserIcon className="h-8 w-8 stroke-1 glow" />
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
      <HamburgerIcon
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
