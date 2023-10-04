import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const inActiveStyle = `text-[--pri-col] text-lg font-medium mx-4 hover:text-[--sec-col] transition ease-linear duration-100`;

const activeStyle = `${inActiveStyle} rounded-[1.5px] border-b-[3px]  border-[--sec-col]`;

const NavbarPC = () => {
  const location = useLocation().pathname;

  return (
    <ul className="flex items-center justify-between w-2/3">
      <>
        <li>
          <NavLink
            className={location === "/" ? activeStyle : inActiveStyle}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={location === "/courses" ? activeStyle : inActiveStyle}
            to="/courses"
          >
            Courses
          </NavLink>

          <NavLink
            className={
              location === "/it_services" ? activeStyle : inActiveStyle
            }
            to="/it_services"
          >
            It Services
          </NavLink>

          <NavLink
            className={location === "/contact" ? activeStyle : inActiveStyle}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </>

      <div id="buttons">
        <button className="font-bold text-[--accent2] bg-[--sec-col] rounded-[4px] py-3 px-6">
          Get Started
        </button>

        <button className="font-bold text-[--pri-col] py-4 px-6">Login</button>
      </div>
    </ul>
  );
};

export default NavbarPC;
