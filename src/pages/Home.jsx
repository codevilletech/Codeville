import React from "react";
import Navbar from "../components/navbar/Navbar";
import homeHero from "../assets/homeHero.svg";
import heroTutor from "../assets/heroTutors.svg";
import HomeCard from "../components/HomeCard";
import HomeSoftwareDevCard from "../components/HomeSoftwareDevCard";
import enhanceSkill1 from "../assets/enhanceSkill1.jpeg";
import enhanceSkill2 from "../assets/enhanceSkill2.jpeg";
import enhanceSkill3 from "../assets/enhanceSkill3.jpeg";
import { homeData } from "../data/homeData";
import HomeWhyUsCard from "../components/HomeWhyUsCard";

const Home = () => {
  return (
    <section>
      <Navbar />

      <header className="flex flex-col mt-[27px] mx-[--px] md:flex-row md:items-cente md:justify-between md:gap-[45px] lg:mt-[64px]">
        <div className="flex flex-col 1000:w-12/12 ">
          <h1 className="text-[--pri-col] font-bold text-[24px] 400:text-3xl 400:leading-[40px] 500:text-4xl 500:leading-[45px] 700:text-[38px] 700:leading-[50px] md:text-[25px] md:leading-[40px] 800:text-3xl 900:text-[35px] 900:leading-[50px] lg:text-[40px] lg:leading-[60x] 1200:text-[40px] 1200:leading-[60px] 1300:text-[50px] 1300:leading-[70px] 1400:text-[55px] 1400:leading-[75px]">
            Experience the Codeville Difference: Tech
            <span>
              {" "}
              <span className="border-b-4 border-[--accent1] lg:border-b-[6px]">
                Beyond{" "}
              </span>
              <span> Boundaries</span>
            </span>
          </h1>

          <p className="mt-3 500:mt-6 500:text-lg md:text-lg lg:text-1xl">
            Discover a World of Possibilities in Software and Tech Learning
          </p>

          <div
            id="buttons"
            className="flex flex-col py-[36px] text-lg gap-6 lg:flex-row "
          >
            <button className="w-full font-bold text-[--accent2] bg-[--sec-col] rounded-[4px] py-3 px-6 500:text-lg lg:w-fit">
              Get Started
            </button>

            <button className="w-full font-bold text-[--sec-col] border-2 border-[--sec-col] rounded-[4px] py-3 px-6 lg:w-fit">
              Explore our Courses
            </button>
          </div>

          <div className="hidden items-center gap-[45px] md:flex">
            <div className="flex items-center gap-3">
              <span className="flex h-fit p-2 items-center text-[--accent2] rounded-md bg-[--sec-col]">
                <img
                  src={heroTutor}
                  alt=""
                  className="md:w-[20px] lg:w-[25px]"
                />
              </span>

              <h4 className="flex flex-col md:text-md lg:text-lg xl:text-1xl">
                <strong className="text-[--pri-col] font-bold">10+</strong>
                Tutors
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-fit p-2 items-center text-[--accent2] rounded-md bg-[--sec-col]">
                <img
                  src={heroTutor}
                  alt=""
                  className="md:w-[20px] lg:w-[25px]"
                />
              </span>

              <h4 className="flex flex-col  md:text-md lg:text-lg xl:text-1xl">
                <strong className="text-[--pri-col] font-bold">50+</strong>
                Video Courses
              </h4>
            </div>
          </div>
        </div>

        <img
          src={homeHero}
          alt=""
          className="400:mx-auto 500:w-3/4 md:w-full"
        />
      </header>

      <div
        id="unlock-your-skills"
        className="mt-[100px] mx-auto flex flex-col px-[--px] 500:w-11/12 700:w-10/12 lg:w-full xl:mt-[163px]"
      >
        <h2 className="font-bold text-1xl text-[--pri-col] leading-snug text-center mx-auto 400:text-[20px] 400:w-11/12 600:text-[25px] 800:text-[28px] lg:text-[40px] xl:text-[40px]">
          Unlock Your Tech Skills and Expand Your Knowledge
        </h2>

        <p className="text-center text-[12px] mx-auto mt-3 400:mt-6 400:w-11/12 600:text-md lg:w-8/12 xl:textlg">
          Explore our curated curriculum, learn from industry experts, and gain
          hands-on experience to unlock your full potential. Choose your path
          and embark on a transformative learning journey with us.
        </p>

        <div
          id="unlock-skills-card"
          className="mt-[24px] gap-[24px] grid grid-cols-1 400:mt-[40px] 400:gap-[40px] lg:grid-cols-3"
        >
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>

        <button className="mt-[32px] mx-auto py-3 px-6 w-full text-[--accent2] font-bold bg-[--sec-col] rounded-[4px] 400:text-[1rem] 600:w-fit md:w-fit md:mx-auto">
          Explore Courses
        </button>
      </div>

      <div
        id="custom-software-dev-service"
        className="mt-[100px] mx-auto flex flex-col px-[--px]"
      >
        <h2 className="font-bold text-[19px] text-[--pri-col] leading-snug text-center mx-auto 400:text-[20px] 600:text-[25px] 800:text-[28px] lg:text-[40px] xl:text-[40px] xl:mt-[150px]">
          Custom Software Development Services
        </h2>

        <p className="text-center text-[12px] mx-auto mt-3 400:mt-6  400:text-[14px] lg:w-[850px] xl:text-lg 1200:w-[80%]">
          We don't just offer online courses, we are also your trusted partner
          for turning your ideas into reality. From concept to deployment, we
          are committed to delivering cutting-edge software that empowers your
          business to thrive in the digital landscape.
        </p>

        <div
          id="software-dev-cards"
          className="mt-[24px] mx-auto gap-[24px] grid grid-cols-1 400:mt-[40px] 400:gap-[40px] 600:grid-cols-2 lg:mt-[72px] xl:grid-cols-4"
        >
          {homeData.softWareDev.map((data, index) => (
            <HomeSoftwareDevCard
              key={index}
              icon={data.icon}
              title={data.title}
              text={data.text}
            />
          ))}
        </div>

        <button className="hidden mt-[60px] py-3 px-6 w-fit mx-auto text-[--accent2] font-bold bg-[--sec-col] rounded-[4px] 400:text-[1rem] lg:flex">
          Let use Build Together
        </button>
      </div>

      <div id="why-choose-us" className="flex flex-col">
        <div className="border border-black mt-[150px] flex flex-row gap-[60px] px-[--px] 1100:gap-10 xl:mt-[150px]">
          <div id="why-us-text" className="border border-red-600 lg:w-1/2">
            <h5 className="font-medium text-[--accent2] bg-[--accent1] text-sm rounded-3xl w-fit py-2 px-4 mx-auto lg:mx-0 lg:text-lg">
              Why Choose Codeville?
            </h5>

            <h2 className="font-bold mt-4 text-[19px] text-[--pri-col] leading-snug text-center mx-auto 400:text-[20px] 600:text-[25px] 800:text-[28px] lg:text-[40px] xl:text-[40px]">
              Enhance Your Skills with Best Online Courses
            </h2>

            <div id="heading" className="mt-[16px]">
              <p className="text-md text-center lg:text-start lg:mt-[24px] lg:text-lg lg:max-w-[525px]">
                Experience the Codeville Advantage: Unlocking the Path to Tech
                Excellence Through Innovation, Expertise, and Community
                Engagement
              </p>
            </div>

            <div
              id="mobile-image"
              className="relative aspect-video mt-[55px] md:w-5/6 md:mx-auto 800:w-[600px] md:h-[300px] lg:hidden"
            >
              <img
                src={enhanceSkill2}
                alt=""
                className=" w-full h-full relative z-10 object-cover rounded-[5px] md:rounded-[10px]"
              />

              <span className="absolute w-[66px] h-[66px] bg-[#FFDFB0] rounded-full -top-5 -left-5 opacity-50 500:w-[100px] 500:h-[100px] 500:-top-10 500:-left-10 md:w-[180px] md:h-[180px] md:-top-12 md:-left-12" />

              <span className="absolute w-[66px] h-[66px] bg-[#FFDFB0] rounded-full -bottom-5 -right-5 opacity-50 500:w-[100px] 500:h-[100px] 500:-bottom-10 500:-right-10 md:w-[180px] md:h-[180px] md:-bottom-12 md:-right-12" />
            </div>

            <div
              id="why-us-cards"
              className="grid mt-[45px] gap-[24px] 600:grid-cols-2 lg:grid-cols-1 lg:mt-[40px] lg:w-11/12"
            >
              {homeData.whyChooseUs.map((data, index) => (
                <HomeWhyUsCard
                  key={index}
                  icon={data.icon}
                  title={data.title}
                  text={data.text}
                />
              ))}
            </div>
          </div>

          <div
            id="why-us-img"
            className="hidden border border-green-600 w-1/2 gap-4 lg:flex"
          >
            <div
              id="main-img"
              className="w-1/2 h-[65%] rounded-lg overflow-hidden place-self-center"
            >
              <img
                src={enhanceSkill1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div
              id="other-img"
              className="flex flex-col gap-4 w-1/2 h-full justify-center"
            >
              <div className="overflow-hidden rounded-lg h-2/6 border-2 border-red-600">
                <img
                  src={enhanceSkill2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg h-2/6 border-2 border-emerald-600">
                <img
                  src={enhanceSkill3}
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[32px] px-[--px] place-self-center">
          <button className="py-2 px-6 mx-auto w-full place-self-center text-[--accent2] bg-[--sec-col] font-medium rounded-[4px] 600:w-fit">
            Take a Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
