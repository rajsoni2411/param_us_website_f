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
        borderRadius: "79px",
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
      <div className="text-white md:h-[1000px] xs:h-[1250px]  sm:h-[1550px] mt-3 overflow-hidden relative z-50 md:flex">
        {/* Left Content */}
        <div className="md:w-[45%] w-[100%] overflow-hidden">
          <div className="flex flex-col gap-3 mt-20  xl:ml-28 md:ml-8 xs:ml-6">
            <p className="font-raleway font-medium xs:text-[20px] md:text-[24px] xl:text-[36px]">
              Since 2001
            </p>
            <h1 className="font-raleway font-medium xs:text-[25px] md:text-[32px] xl:text-[48px]">
              Delivering Excellence in{" "}
            </h1>
            <div className="scroller font-faustina font-semibold xs:text-[48px] md:text-[65px] xl:text-[90px]">
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

          {/* Desktop Ring Boxes (visible on md and lg) */}
          <div className="hidden md:block w-full h-full overflow-hidden">
            <div className="ring-3 single-round 2xl:top-[51%]  md:top-[53%] 2xl:-left-[14%] xl:-left-[17%] lg:-left-[20%] lg:top-[54%] md:-left-[47%] md:w-[94%] md:h-[81%] lg:w-[841px] lg:h-[778px]">
              <div className="w-full h-full relative -top-8 font-faustina">
                <div className="box1 md:w-[180px] md:h-[85px] lg:w-[180px] lg:h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute md:top-[8%] lg:top-0 md:left-[56%] lg:left-[35%]">
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

                <div className="box2 md:w-[180px] md:h-[85px] lg:w-[180px] lg:h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute md:top-[23%] lg:top-28 md:right-[5%] lg:right-[2.5%]">
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
                    <p className="md:text-lg lg:text-lg leading-[25px]">
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
          <div className="hidden md:block ring-1 ring-zoom-out absolute"></div>
          <div className="hidden md:block ring-2 ring-zoom-out absolute"></div>
          <div className="block md:hidden ring-1 ring-zoom-out absolute xs:left-[30%] xs:top-[0%] xs:w-[54%] xs:h-[15%]"></div>
          <div className="block md:hidden ring-2 ring-zoom-out absolute xs:left-[52%] xs:top-[2%] xs:w-[80%] xs:h-[29%]"></div>

          <div className="flex gap-5 items-end pt-10">
            <div className="image overflow-hidden xs:w-[55%] xs:h-[81%] md:w-[56%] md:h-[260px]">
              <img
                src={image2}
                alt="2"
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="zoom-out overflow-hidden xs:w-[35%] xs:h-[135%] md:w-[38%] md:h-[362px]">
              <img
                src={image1}
                alt="1"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex gap-5 pb-10">
            <div className="zoom-out overflow-hidden xs:w-[35%] xs:h-[135%] md:w-[38%] md:h-[362px]">
              <img
                src={image3}
                alt="3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rotate-x overflow-auto xs:w-[55%] xs:h-[81%] md:w-[56%] md:h-[260px]">
              <img
                src={image4}
                alt="4"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile Ring Boxes (visible on xs/sm only) */}
        <div className="block md:hidden w-full h-full overflow-hidden">
          <div className="ring-3 xs:top-[70%] sm:top-[67.5%] xs:left-[-87%] xs:w-[179%] xs:h-[43%] md:top-0 single-round">
            <div className="w-full h-full relative -top-16 font-faustina">
              <div className="box1 xs:w-[20%] xs:top-[8%] xs:h-[18%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[50%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[20px] md:text-[40px] leading-[33px] font-semibold">
                    109 +
                  </p>
                  <p className="xs:text-xs md:text-xl leading-[25px]">
                    Client Served
                  </p>
                </div>
              </div>

              <div className="box2 xs:w-[20%] xs:top-[24%] xs:h-[18%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[73%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[20px] md:text-[40px] leading-[33px] font-semibold">
                    28000 +
                  </p>
                  <p className="xs:text-xs md:text-xl leading-[25px]">
                    PEOPLE HELPED
                  </p>
                </div>
              </div>

              <div className="box3 xs:w-[20%] xs:top-[60%] xs:h-[18%] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col gap-2 items-center justify-center absolute xs:left-[82%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="xs:text-[20px] md:text-[40px] leading-[33px] font-semibold">
                    2100 +
                  </p>
                  <p className="xs:text-xs md:text-xl leading-[25px]">
                    STUDENT TRAINED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Our Success Speaks For Itself" Section */}
      <div className="flex md:flex-row flex-col w-full justify-center items-center text-white font-faustina gap-20 z-10 relative h-[320px] md:-mt-[80px] lg:-mt-[120px] bg-black md:p-7 lg:p-7 xl:p-0">
        <p className="font-semibold xs:text-[29px] md:text-[60px] lg:text-[80px] xs:leading-none md:leading-[80px] lg:leading-[100px]">
          Our Success Speaks For Itself
        </p>
        <div className="flex gap-8 items-center">
          <div className="play lg:w-[83px] lg:h-[83px] w-[70px] h-[50px] rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(31,162,255)] via-[rgb(18,216,250)] to-[rgb(166,255,203)]">
            <img
              src={tringle}
              alt="TriangleImage"
              className="lg:max-w-full lg:h-auto w-[20px] h-[20px]"
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
            <div className="flex flex-col md:w-[700px] md:h-[450px] lg:w-[984px] lg:h-[579px] justify-between mb-32 gap-10">
              <p className="hidden md:block lg:block bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-[95%] to-[#A6FFCB] to-[100%] text-transparent bg-clip-text font-semibold xs:text-3xl md:text-5xl lg:text-6xl font-faustina pt-20">
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
            <div className="flex justify-center">
              <img
                src={walk}
                alt="walk through"
                className="xs:w-[90%] xs:h-[90%] md:w-[680px] md:h-[700px] lg:w-[780px] lg:h-[831px] object-contain"
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
