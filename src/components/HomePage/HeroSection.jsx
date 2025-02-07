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
    <>
      <div className="text-white lg:h-full  xs:h-[1500px] h-full mt-3 overflow-hidden relative z-50 md:flex">
        <div className=" md:w-[45%] w-[100]  !rounded-none  overflow-hidden">
          <div className="flex flex-col gap-3 mt-20 ml-28 ">
            <p className="text font-raleway font-medium text-[32px]">
              Since 2001
            </p>
            <h1 className="text text-[40px] font-raleway font-medium">
              Delivering Excellence in{" "}
            </h1>
            <div class="scroller font-faustina text font-semibold text-[80px]">
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

          <div className=" hidden  lg:block  w-full h-full  overflow-hidden">
            <div className="ring-3     single-round">
              <div className="w-full h-full relative -top-16 font-faustina">
                <div className="box1 w-[200px] h-[95px]  gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-0 left-[35%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="text-[40px] leading-[33px] font-semibold">
                      109 +
                    </p>
                    <p className="text-xl leading-[25px]">Client Served</p>
                  </div>
                </div>

                <div className="box2 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-28 right-[2.5%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="text-[40px] leading-[33px] font-semibold">
                      28000 +
                    </p>
                    <p className="text-xl leading-[25px]">PEOPLE HELPED</p>
                  </div>
                </div>

                <div className="box3 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-80 left-[90%]">
                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                    <p className="text-[40px] leading-[33px] font-semibold">
                      2100 +
                    </p>
                    <p className="text-xl leading-[25px]">STUDENT TRAINED</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-[55%] xs:w-[100%] gap-9 z-20 relative h-full">
          <div className=" ring-1 ring-zoom-out absolute"></div>
          <div className=" ring-2 ring-zoom-out absolute"></div>

          <div className="flex gap-5 items-end pt-10">
            <div className="image overflow-hidden w-[560px] h-[260px]">
              <img
                src={image2}
                alt="2"
                className=" object-cover object-top size-full"
              />
            </div>
            <div className="zoom-out overflow-hidden w-[400px] h-[362px]">
              <img src={image1} alt="1" className=" object-cover size-full" />
            </div>
          </div>
          <div className="flex gap-5 pb-10">
            <div className="zoom-out overflow-hidden w-[400px] h-[362px] object-cover">
              <img src={image3} alt="3" className="object-cover size-full" />
            </div>
            <div className="rotate-x overflow-auto w-[560px] h-[260px]  object-cover">
              <img
                src={image4}
                alt="4"
                className="size-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className=" block  lg:hidden   w-full h-full  overflow-hidden">
          <div className="ring-3  xs:top-[80%] xs:left-[10%] md:top-0   single-round">
            <div className="w-full h-full relative -top-16 font-faustina">
              <div className="box1 w-[200px] h-[95px]  gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-0 left-[35%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="text-[40px] leading-[33px] font-semibold">
                    109 +
                  </p>
                  <p className="text-xl leading-[25px]">Client Served</p>
                </div>
              </div>

              <div className="box2 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-28 right-[2.5%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="text-[40px] leading-[33px] font-semibold">
                    28000 +
                  </p>
                  <p className="text-xl leading-[25px]">PEOPLE HELPED</p>
                </div>
              </div>

              <div className="box3 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-80 left-[90%]">
                <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                  <p className="text-[40px] leading-[33px] font-semibold">
                    2100 +
                  </p>
                  <p className="text-xl leading-[25px]">STUDENT TRAINED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-row   flex-col w-full justify-center items-center text-white font-faustina gap-20 z-10 relative h-[320px] lg:-mt-[120px]  bg-black lg:p-7 xl:p-0">
        <p className="font-semibold lg:text-[80px]  text-[40px] lg:leading-[100px]">
          Our Success Speaks For Itself
        </p>
        <div className="flex gap-8 items-center">
          <div className="play  lg:w-[83px] lg:h-[83px] w-[70px] h-[50px] rounded-[50%] flex justify-center items-center bg-gradient-to-r from-[rgb(31,162,255)] via-[rgb(18,216,250)] to-[rgb(166,255,203)]">
            <img
              src={tringle}
              alt="TriangleImage"
              className="play  lg:max-w-[100%] lg:h-auto w-[20px] h-[20px] "
            ></img>
          </div>
          <p className="font-normal lg:text-[32px]  text-[20px] lg:leading-[100px]">
            PLAY NOW
          </p>
        </div>
      </div>
      <div className="w-full h-full flex  justify-center lg:p-7 xl:p-0">
        <div className="w-[85%] flex justify-center">
          <div className="flex lg:flex-row xl:flex-row flex-col-reverse  justify-center gap-11">
            <div className="flex flex-col   lg:w-[984px] lg:h-[579px]  justify-between mb-32 gap-10">
              <p className="hidden lg:block bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-[95%] to-[#A6FFCB] to[100%] text-transparent bg-clip-text font-semibold lg:text-6xl/[70.56px] text-3xl/[30px] font-faustina pt-20">
                A Walk Through Us
              </p>
              <div className="flex flex-col gap-5 text-white lg:text-start text-center font-faustina font-normal text-xl/[35px] ">
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

                <div className="flex lg:justify-start lg:items-start xs:justify-center xs:items-center w-full">
                  <div className="flex justify-center items-center w-[155px] lg:text-start text-center h-[62px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                    <button
                      className="button-main  bg-black uppercase w-full h-full rounded-[14px]   font-poppins font-medium text-[20px] diagonal text-xl text-center relative py-[16px] px-[52px]"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="btn1 absolute  transition-all top-0 left-0 w-full h-full flex  justify-center items-center text-white ">
                        Learn more
                      </span>
                      <span className="btn2 absolute tranistion-all opacity-0 top-[50px] left-0 w-full h-full flex justify-center items-center text-white">
                        Learn more
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={walk}
                className="lg:h-[831px] lg:w-[780px] w-[90%] h-[90%] object-contain"
                alt="walk through"
              />
            </div>
            <p className="block lg:hidden bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-[95%] to-[#A6FFCB] to[100%] text-transparent bg-clip-text font-semibold text-[4rem]/[70px]  text-center font-faustina ">
              A Walk Through Us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
