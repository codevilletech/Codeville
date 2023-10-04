import React from "react";
import wisdomAndInspiration1 from "../../assets/wisdomAndInspiration1.jpeg";

const HomeWisdomInspirationCard = () => {
  return (
    <div className="flex flex-col px-[20px] py-6 rounded-[4px] border border-[#A0A0A0] w-full gap-3 bg-[--accent2] h-fit">
      <img
        src={wisdomAndInspiration1}
        alt=""
        className="rounded-full w-[50px] h-[50px]"
      />

      <p className="text-[--pri-col] ">
        "Technology is not just a tool; it's the heartbeat of our modern
        society, connecting us, empowering us, and shaping our future. Embrace
        its potential, and together, let's create a world of endless
        possibilities."
      </p>

      <h3>
        <b className="font-bold text-lg border-r-2 border-[#757575] pr-[8px]">
          Steve Jobs
        </b>
        <span className="font-normal text-sm pl-[8px]">
          Cofounder of Apple
        </span>
      </h3>
    </div>
  );
};

export default HomeWisdomInspirationCard;
