import React from "react";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "@mui/material";
import NavbarMobile from "./NavbarMobile";
import NavbarPC from "./NavbarPC";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenuSlice } from "../../features/slices/mobileMenuSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const isSmall = useMediaQuery("(max-width: 1023px)");
  const dispatch = useDispatch();

  const { showMainMenu } = useSelector((state) => state.mobileMenu);

  const toggleShowMainMenu = () => {
    dispatch(mobileMenuSlice.actions.setShowMainMenu());
  };

  return (
    <header>
      <nav className="flex items-center justify-between py-3 shadow-navShadow px-[--px] lg:shadow-none">
        <NavLink to="/" className="w-[38px] 400:w-[50px] 600:w-[60px] lg:w-[80px] xl:w-[100px] cursor-pointer">
          <img src={logo} alt="" className="w-full h-full" />
        </NavLink>

        <>{!isSmall && <NavbarPC />}</>

        {isSmall && (
          <span
            id="menu-button"
            onClick={toggleShowMainMenu}
            className="text-[--pri-col] text-2xl p-1 rounded-md"
          >
            <GiHamburgerMenu />
          </span>
        )}
      </nav>

      <div
        className={`${
          isSmall && showMainMenu ? "h-auto " : "h-0"
        } overflow-hidden transition-h ease-linear duration-200`}
      >
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
