import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const inActiveStyle = `text-[--pri-col] text-lg font-medium py-2 px-[--px]`;

const activeStyle = `${inActiveStyle} text-[--sec-col]`;

const NavbarMobile = () => {
  const location = useLocation().pathname;

  return (
    <div id="main-menu" className="flex flex-col w-full h-fit bg-[--accent2]">
      <ul>
        <li className={location === "/about" ? activeStyle : inActiveStyle}>
          <NavLink to="/about">About</NavLink>
        </li>

        <li className={location === "/courses" ? activeStyle : inActiveStyle}>
          <NavLink to="/courses">Courses</NavLink>
        </li>

        <li
          className={location === "/it_services" ? activeStyle : inActiveStyle}
        >
          <NavLink to="/it_services">It Services</NavLink>
        </li>

        <li className={location === "/contact" ? activeStyle : inActiveStyle}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        
        <div id="buttons" className=" mt-5 flex flex-col items-start px-[--px] text-center gap-2">
          <button className="w-full py-2 bg-[--sec-col] text-[--accent2] rounded-md font-medium text-lg">
            Get Started
          </button>

          <button className="w-full py-2 text-[--pri-col] rounded-md font-medium text-lg">
            Login
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavbarMobile;
