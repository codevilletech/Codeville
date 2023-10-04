import React from "react";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-6 bg-[#E6F5F4] mt-[88px]backdrop:blur-md py-[41px] px-[--px] md:gap-12 lg:mt-[150px] ">

      <main id="template" className="grid grid-cols-1 gap-6 500:gap-8 500:grid-cols-2 lg:gap-[90px] lg:grid-cols-4">
        <ul>
          <img src={logo} alt="" className="w-[32px] md:w-[60px]" />
          <p className="text-[--footer-col] mt-4">
            Empowering Innovation in Tech, we're Your Trusted Partner for
            Success. With a Commitment to Transforming Ideas into Digital
            Reality, we Strive to Make Technology Accessible and Exciting.
          </p>
        </ul>

        <ul className="flex flex-col gap-4 text-lg text-[--footer-col]">
          <h3 className="text-[--sec-col] text-1xl font-bold">Company</h3>

          <li>
            <NavLink>About</NavLink>
          </li>

          <li>
            <NavLink>Courses</NavLink>
          </li>

          <li>
            <NavLink>It Services</NavLink>
          </li>

          <li>
            <NavLink>Privacy Policy</NavLink>
          </li>

          <li>
            <NavLink>Terms & Conditions</NavLink>
          </li>
        </ul>

        <ul className="flex flex-col gap-4 text-lg text-[--footer-col]">
          <h3 className="text-[--sec-col] text-1xl font-bold">Contact Us</h3>

          <li>
            <a className="flex items-center gap-[8px]">
              <MdEmail />
              Email
            </a>
          </li>

          <li>
            <a className="flex items-center gap-[8px]">
              <RiFacebookBoxFill />
              Facebook
            </a>
          </li>

          <li>
            <a className="flex items-center gap-[8px]">
              <RiTwitterXFill />
              Twitter
            </a>
          </li>

          <li>
            <a className="flex items-center gap-[8px]">
              <FaInstagramSquare />
              Instagram
            </a>
          </li>

          <li>
            <a className="flex items-center gap-[8px]">
              <FaWhatsappSquare />
              Whatsapp
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-4 text-lg text-[--footer-col]">
          <h3 className="text-[--sec-col] text-1xl font-bold">
            Subscribe to our Newsletter
          </h3>

          <small className="text-md text-[--footer-col]">
            Subscribe to our newsletter to stay updated on your latest news,
            courses, or services.
          </small>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 text-lg rounded-[4px] caret-[--footer-col] text-[--pri-col] placeholder:text-[#A0A0A0] border border-[#BFBFBF]"
            />

            <button className="mt-5 py-3 px-6 font-bold bg-[--sec-col] text-[--accent2] w-full rounded-[4px]">
              Subscribe
            </button>
          </div>
        </ul>
      </main>

      <small className="text-lg text-center text-[--footer-col] font-medium">
        © 2023 Codeville, All Rights Reserved
      </small>
    </footer>
  );
};

export default Footer;
