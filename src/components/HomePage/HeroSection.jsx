// --------------------------------------------- All Imports --------------------------------------------

import gsap from "gsap";
import React, { useEffect } from "react";
import image1 from "../../assets/images/Rectangle 102.png";
import image2 from "../../assets/images/Rectangle 104.png";
import image3 from "../../assets/images/Rectangle 105.png";
import image4 from "../../assets/images/Rectangle 106.png";
import tringle from "../../assets/images/tringle.png";
import walk from "../../assets/images/walk.png";

// --------------------------------------------- All Imports --------------------------------------------

const HeroSection = () => {
  // --------------------------------------------- Use Effect for animations (Hero Section) ----------------------------------------------------

  useEffect(() => {
    // ---------------------------------------------------- Rotate image animations ----------------------------------------------------

    gsap.fromTo(
      ".image",
      { opacity: 0, scale: 0, rotation: -160, borderRadius: "100%" },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2.5,
        ease: "power2.out",
        stagger: 0.3,
        borderRadius: "79px",
        onUpdate: function () {
          const width = window.innerWidth;
          if (width >= 320 && width <= 1280) {
            gsap.set(".image", { borderRadius: "50px" });
          }
        },
      }
    );

    // ----------------------------------------------- Zoom-out effect for specific images -----------------------------------------------

    gsap.fromTo(
      ".zoom-out",
      { scale: 0, opacity: 0, filter: "blur(10px)", borderRadius: "100%" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2.5,
        ease: "power2.out",
        borderRadius: "79px",
        onUpdate: function () {
          const width = window.innerWidth;
          if (width >= 320 && width <= 1280) {
            gsap.set(".zoom-out", { borderRadius: "50px" });
          }
        },
      }
    );

    // ------------------------------------------ Zoom-out effect for specific images ------------------------------------------

    gsap.fromTo(
      ".ring-zoom-out",
      { scale: 0, opacity: 0, filter: "blur(50px)" },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        yoyo: true,
        duration: 2.5,
        ease: "power2.out",
      }
    );

    // --------------------------------------- Animation for Image 4 with small height/width to full size + rotationX -------------------------------------------

    gsap.fromTo(
      ".rotate-x",
      {
        rotationX: -180,
        transformOrigin: "center center",
        opacity: 0,
        scale: 0,
        borderRadius: "100%",
      },
      {
        rotationX: 0,
        transformOrigin: "center center",
        opacity: 1,
        duration: 2.5,
        ease: "power2.out",
        scale: 1,
        repeatDelay: 0.8,
        borderRadius: "50px",
        onUpdate: function () {
          const width = window.innerWidth;
          if (width >= 320 && width <= 1280) {
            gsap.set(".rotate-x", { borderRadius: "50px" });
          }
        },
      }
    );

    // --------------------------------------- Animation for text (left to right) ----------------------------------------

    gsap.utils.toArray(".text").forEach((text, index) => {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          delay: index * 0.5,
          ease: "power2.out",
        }
      );
    });

    // -------------------------------------------------  single Round Animation -------------------------------------------------

    gsap.fromTo(
      ".single-round",
      { scale: 0.3, borderRadius: "0" },
      {
        opacity: 1,
        scale: 1,
        duration: 3,
        ease: "power2.out",
        borderRadius: "50%",
      }
    );

    // ------------------------------------------------- round box animation -------------------------------------------------

    gsap.fromTo(
      ".gradBorder",
      { scale: 0.2, transformOrigin: "center center", borderRadius: "100%" },
      {
        transformOrigin: "center center",

        scale: 1,
        duration: 3,
        ease: "power2.out",
        borderRadius: "50px",
      }
    );

    gsap.to(".play", {
      scale: 1.2,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  // ---------------------------------------------------- rolling text button animation ----------------------------------------------------

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const visibleSpan = button.querySelector(".btn1");
    const hiddenSpan = button.querySelector(".btn2");

    gsap.to(visibleSpan, {
      duration: 1,
      y: -100,
      ease: "power2.inOut",
    });
    gsap.to(hiddenSpan, {
      duration: 1.5,
      y: -50,
      ease: "power2.inOut",
      opacity: 1,
    });
  };

  const handleMouseLeave = (e) => {
    const button = e.currentTarget;
    const visibleSpan = button.querySelector(".btn1");
    const hiddenSpan = button.querySelector(".btn2");

    gsap.to(visibleSpan, {
      duration: 0.5,
      y: 0,
      ease: "power2.inOut",
    });
    gsap.to(hiddenSpan, {
      duration: 1,
      y: 0,
      ease: "power2.inOut",
      opacity: 0,
    });
  };

  // ---------------------------------------------------- rolling text button animation ----------------------------------------------------

  return (
    <div>
      {/* Main Hero Section */}
      <div className="text-white md:h-[820px] lg:h-[820px] xl:h-auto xs:h-[1250px]  sm:h-[1550px] mt-3 overflow-hidden relative z-50 md:flex">
        {/* Left Content */}
        <div className="md:w-[45%] w-[100%] overflow-hidden">
          <div className="flex flex-col gap-3 mt-20 2xl:ml-28 xl:ml-20 md:ml-8 xs:ml-6">
            <p className="font-raleway font-medium xs:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px]">
              Since 2001
            </p>
            <h1 className="font-raleway font-medium xs:text-[25px] md:text-[25px] lg:text-[35px] 2xl:text-[48px] xl:text-[40px]">
              Delivering Excellence in{" "}
            </h1>
            <div className="scroller font-faustina font-semibold xs:text-[48px] md:text-[50px] lg:text-[65px]  2xl:text-[90px] xl:text-[77px]">
              <span>
                IT Consulting
                <br />
                Wellness
                <br />
                Social Services
                <br />
                Education
              </span>
            </div>
          </div>

          {/* only md and lg) */}
          <div className="hidden md:block w-full h-auto overflow-hidden">
            <div className="ring-3 single-round 2xl:top-[51%]  md:top-[49%] 2xl:-left-[14%] xl:-left-[17%] lg:-left-[23%] lg:top-[50%] md:-left-[30%] md:w-[84%] md:h-[78%] lg:w-[841px] lg:h-[778px] 2xl:w-[841px] 2xl:h-[778px] xl:w-[58%] xl:h-[77%]">
              <div className="w-full h-full relative -top-8 font-faustina ">
                <div className="box1 md:w-[180px] md:h-[85px] lg:w-[180px] lg:h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute md:top-[3%] lg:top-7 md:left-[40%] lg:left-[35%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="md:text-[30px] lg:text-[28px] leading-[33px] font-semibold">
                      109 +
                    </p>
                    <p className="md:text-lg lg:text-lg leading-[25px]">
                      Client Served
                    </p>
                  </div>
                </div>

                <div className="box2 md:w-[180px] md:h-[85px] lg:w-[180px] lg:h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute md:top-[23%] lg:top-28 md:right-[5%] lg:right-[11.5%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="md:text-[30px] lg:text-[28px] leading-[33px] font-semibold">
                      28000 +
                    </p>
                    <p className="md:text-lg lg:text-lg leading-[25px]">
                      PEOPLE HELPED
                    </p>
                  </div>
                </div>

                <div className="box3 md:w-[180px] md:h-[85px] lg:w-[180px] lg:h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute md:top-[45%] lg:top-80 md:left-[83%] lg:left-[85%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="md:text-[30px] lg:text-[28px] leading-[33px] font-semibold">
                      2100 +
                    </p>
                    <p className=" md:text-lg lg:text-lg leading-[25px]">
                      STUDENT TRAINED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-col md:w-[55%] xs:w-[100%] md:gap-9 xs:gap-4 z-20 relative h-full px-8 mt-10">
          {/* Decorative Rings */}
          <div className="hidden md:block ring-1 ring-zoom-out absolute   md:left-[17%] md:top-[1%] md:w-[385.47px] md:h-[281.93px] lg:left-[25%] lg:top-[0%] lg:w-[385.47px] lg:h-[281.93px] xl:left-[25%] xl:top-[10%] xl:w-[527px] xl:h-[380px] 2xl:left-[26%] 2xl:top-[10%] 2xl:w-[626px] 2xl:h-[476px]"></div>
          <div className="hidden md:block ring-2 ring-zoom-out absolute md:left-[59%] md:top-[0%] md:w-[619px] md:h-[537.2px] lg:left-[52%] lg:top-[0%] lg:w-[482.82px] lg:h-[546.36px] xl:left-[55%] xl:top-[10%] xl:w-[725px] xl:h-[828px]  2xl:left-[52%] 2xl:top-[10%] 2xl:w-[725px] 2xl:h-[828px]"></div>
          <div className="block md:hidden ring-1 ring-zoom-out absolute xs:left-[30%] xs:top-[4%] xs:w-[54%] xs:h-[15%]"></div>
          <div className="block md:hidden ring-2 ring-zoom-out absolute xs:left-[59%] xs:top-[2%] xs:w-[68%] xs:h-[29%]"></div>

          <div className="flex gap-5 items-end pt-10">
            <div className="image overflow-hidden xs:w-[55%] xs:h-[81%] xl:w-[56%] xl:h-[260px] md:w-[271px] md:h-[171.85px]">
              <img
                src={image2}
                alt="2"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="zoom-out overflow-hidden xs:w-[35%] xs:h-[135%] md:w-[41%] md:h-[141%] xl:w-[38%] xl:h-[362px]">
              <img
                src={image1}
                alt="1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex gap-5 pb-10">
            <div className="zoom-out overflow-hidden xs:w-[35%] xs:h-[135%] md:w-[41%] md:h-[141%] xl:w-[38%] xl:h-[362px]">
              <img
                src={image3}
                alt="3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rotate-x overflow-auto xs:w-[55%] xs:h-[81%] xl:w-[56%] xl:h-[260px] md:w-[271px] md:h-[171.85px]">
              <img
                src={image4}
                alt="4"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* xs/sm only) */}
        <div className="block md:hidden w-full h-full overflow-hidden">
          <div className="ring-3 xs:top-[69%] sm:top-[69%] xs:left-[-89.4%] xs:w-[180.7%] xs:h-[48.2%] md:top-0 single-round">
            <div className="w-full h-full relative -top-16 font-faustina">
              <div className="box1 xs:w-[20%]  sm:top-[10%] xs:top-[14%] xs:h-[13%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[55%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[30px] md:text-[40px] leading-[33px] font-semibold">
                    109 +
                  </p>
                  <p className=" xs:text-xs  sm:text-xl md:text-xl leading-[25px]">
                    Client Served
                  </p>
                </div>
              </div>

              <div className="box2 xs:w-[20%] xs:top-[30%] xs:h-[13%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[79%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[30px] md:text-[40px] leading-[33px] font-semibold">
                    28000 +
                  </p>
                  <p className=" xs:text-xs sm:text-xl md:text-xl leading-[25px]">
                    PEOPLE HELPED
                  </p>
                </div>
              </div>

              <div className="box3 xs:w-[20%] xs:top-[55%] xs:h-[13%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[84%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[30px] md:text-[40px] leading-[33px] font-semibold">
                    2100 +
                  </p>
                  <p className="xs:text-xs sm:text-lg md:text-xl leading-[25px]">
                    STUDENT TRAINED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Our Success Speaks For Itself" Section */}
      <div className="flex md:flex-row flex-col w-full justify-center items-center text-white font-faustina gap-10 z-10 relative  xs:h-[180px] md:h-[320px] md:-mt-[60px] lg:-mt-[60px] bg-black md:p-7 lg:p-7 ">
        <p className="font-semibold xs:text-[29px] md:text-[40px] lg:text-[50px] xl:text-[70px] xs:leading-none md:leading-[80px] lg:leading-[100px]">
          Our Success Speaks For Itself
        </p>
        <div className="flex gap-8 items-center">
          <div className="play lg:w-[83px] lg:h-[83px] xs:w-[50px] xs:h-[50px] rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(31,162,255)] via-[rgb(18,216,250)] to-[rgb(166,255,203)]">
            <img
              src={tringle}
              alt="TriangleImage"
              className="lg:max-w-full lg:h-auto md:w-[30px] md:h-[30px] xs:w-[25px] xs:h-[25px]"
            />
          </div>
          <p className="font-normal xs:text-[20px] md:text-[28px] lg:text-[32px] xs:leading-none md:leading-[80px] lg:leading-[100px]">
            PLAY NOW
          </p>
        </div>
      </div>

      {/* "A Walk Through Us" Section */}
      <div className="w-full h-full flex justify-center md:p-5 lg:p-7 xl:p-0">
        <div className="w-[85%] flex justify-center">
          <div className="flex md:flex-row lg:flex-row xl:flex-row flex-col-reverse justify-center gap-11">
            {/* Text Content */}
            <div className="flex flex-col md:w-[700px] md:h-[450px] lg:w-[984px] lg:h-[579px] justify-between  xs:mb-10 md:mb-32 gap-10">
              <p className="hidden md:block lg:block bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-[95%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text font-semibold xs:text-3xl md:text-5xl lg:text-6xl leading-2 font-faustina pt-20">
                A Walk Through Us
              </p>
              <div className="flex flex-col gap-5 text-white md:text-start lg:text-start text-center font-faustina font-normal text-xl/[35px]">
                <p>Running strong since 2001</p>
                <p>
                  “At the end of the day, care is a human activity. Technology
                  is not there to replace caregivers; it is there to support
                  them.”
                </p>
                <p>
                  With a similar vision, Param Group of Companies was developed
                  by Mr. Vipul Amin in 2001 to help people reach the best
                  healthcare services around them. Param Group was born with
                  just an idea in mind to use technology to benefit the lives of
                  people. Our vision is what drives us to perform exceptional
                  acts and expand human satisfaction. We, at Param Group, do
                  this by offering groundbreaking services in the education,
                  healthcare, and IT industries. Today, we are a celebrated
                  company around the globe that has successfully crossed decades
                  of excellence.
                </p>

                <div className="flex md:justify-start md:items-start xs:justify-center xs:items-center w-full">
                  <div className="flex justify-center items-center w-[155px] md:w-[170px] lg:w-[200px] text-center h-[62px] md:h-[70px] lg:h-[80px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                    <button
                      className="button-main bg-black uppercase w-full h-full rounded-[14px] font-poppins font-medium text-[20px] md:text-[22px] lg:text-[24px] diagonal text-center relative py-[16px] px-[52px]"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
                        Learn more
                      </span>
                      <span className="btn2 absolute transition-all opacity-0 top-[50px] left-0 w-full h-full flex justify-center items-center text-white">
                        Learn more
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex justify-center items-center">
              <img
                src={walk}
                alt="walk through"
                className="xs:w-[90%] xs:h-[90%] md:w-[680px] md:h-[700px] lg:w-[780px] lg:h-[831px] object-contain flex justify-center items-center"
              />
            </div>
            {/* Mobile Title (for xs/sm only) */}
            <p className="block md:hidden bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-[95%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text font-semibold xs:text-[2.7rem]/[40px] text-center font-faustina">
              A Walk Through Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
