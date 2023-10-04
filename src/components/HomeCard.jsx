import React from "react";
import homeCardImg1 from "../assets/homeCardImg1.png";
import { GoArrowRight } from "react-icons/go";

const HomeCard = () => {
  return (
    <div className="flex flex-col border rounded-md overflow-hidden shadow-homeCardShadow gap-[20px] pb-[26px] transition-all duration-150 cursor-pointer hover:scale-105 lg:min-h-[380px] lg:pb-[15px]">
      <div id="card-img" className="w-full lg:h-4/6">
        <img src={homeCardImg1} alt="" className="w-full h-full" />
      </div>

      <div id="card-text" className="px-[14px]">
        <h3 className="text-md font-bold text-[--pri-col] 400:text-lg">
          Introduction to Programming
        </h3>

        <p className="mt-[12px] text-[11px] font-light leading-snug 400:text-md lg:text-sm 1100:text-md">
          Learn the fundamentals of programming languages such as Python and
          JavaScript, Develop problem-solving skills and logical thinking and
          Build a strong foundation for further specialization in coding.
        </p>

        <button className="mt-[21px] flex text-sm items-center text-[--pri-col] font-semibold gap-2 hover:gap-3 transition-all ease-linear duration-150 lg:mt-5">
          Learn More
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
