import React from "react";
import HomeWisdomInspirationCard from "./HomeWisdomInspirationCard";

const HomeWisdomInspiration = () => {
  return (
    <div className="flex bg-homeWisdomAndInspirationMobile px-[--px]  py-[26px] relative lg:py-[71px] lg:px-[69px] lg:bg-homeWisdomAndInspirationPC">
      <span
        id="psuedo-element"
        className="absolute top-0 left-0 w-full h-full backdrop:blur-md"
      />

      <main
        id="slider"
        className="grid grid-cols-1 gap-6 w-full mx-auto 700:max-w-xl lg:max-w-none lg:grid-cols-3"
      >
        <HomeWisdomInspirationCard />
        <HomeWisdomInspirationCard />
        <HomeWisdomInspirationCard />
      </main>
    </div>
  );
};

export default HomeWisdomInspiration;
