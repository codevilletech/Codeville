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
        className="relative z-10 gap-6 flex flex-col w-full overflow-x-scroll mx-auto 700:max-w-xl lg:max-w-none lg:flex-row lg:w-full"
      >
        {/* Un commet the below to make the slider */}
        {/* <span
          id="psuedo-element"
          className="absolute top-0 left-0 w-full h-full backdrop:blur-md bg-black bg-opacity-10"
        /> */}

        <div id="mobile" className="gap-6 flex flex-col min-w-full lg:flex-row">
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
        </div>

        <div
          id="pc-slider"
          className="gap-6 hidden flex-col min-w-full lg:flex lg:flex-row"
        >
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
        </div>

        <div
          id="pc-slider"
          className="gap-6 hidden flex-col min-w-full lg:flex lg:flex-row"
        >
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
          <HomeWisdomInspirationCard />
        </div>
      </main>
    </div>
  );
};

export default HomeWisdomInspiration;
