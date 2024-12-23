import gsap from 'gsap';
import React, { useEffect } from 'react'
import image1 from "../../assets/images/Rectangle 102.png";
import image2 from "../../assets/images/Rectangle 104.png";
import image3 from "../../assets/images/Rectangle 105.png";
import image4 from "../../assets/images/Rectangle 106.png";
const HeroSection = () => {
    useEffect(() => {
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
                borderRadius: "79px"
            }
        );

        // Zoom-out effect for specific images
        gsap.fromTo(
            ".zoom-out",
            { scale: 0, opacity: 0, filter: "blur(10px)", borderRadius: "100%" },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2.5,
                ease: "power2.out",
                borderRadius: "79px"
            }
        );

        // Zoom-out effect for specific images
        gsap.fromTo(
            ".ring-zoom-out", // Target the element with this class
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

        // Animation for Image 4 with small height/width to full size + rotationX
        gsap.fromTo(
            ".rotate-x",
            { rotationX: -180, transformOrigin: "center center", opacity: 0, scale: 0, borderRadius: "100%" },
            {
                rotationX: 0,
                transformOrigin: "center center",
                opacity: 1,
                duration: 2.5,
                ease: "power2.out",
                scale: 1,
                repeatDelay: 0.8,
                borderRadius: "79px"
            }
        );

        gsap.utils.toArray(".text").forEach((text, index) => {
            gsap.fromTo(
                text,
                {
                    opacity: 0,
                    x: -200, // Start from off-screen left
                },
                {
                    opacity: 1,
                    x: 0, // Move into view
                    duration: 2,
                    delay: index * 0.5, // Stagger animations
                    ease: "power2.out",
                }
            );
        });
        // single Round Animation

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

        // round box animation

        gsap.fromTo(
            ".gradBorder",
            { scale: 0.2, transformOrigin: "center center", borderRadius: "100%" },
            {
                transformOrigin: "center center",

                scale: 1,
                duration: 3,
                ease: "power2.out",
                // stagger: 0.3,
                borderRadius: "50px",
            }
        );

    }, []);
  return (
      <>
          <div className="text-white pb-36 h-full mt-3 overflow-hidden" style={{ display: "flex" }}>
              <div className=" w-[45%] !rounded-none  overflow-hidden">
                  <div className="flex flex-col gap-3 mt-20 ml-28 ">
                      <p className="text font-raleway font-medium text-[32px]">Since 2001</p>
                      <h1 className="text text-[40px] font-raleway font-medium">Delivering Excellence in </h1>
                      <div class="scroller font-faustina text font-semibold text-[80px]">
                          <span>
                              IT Consulting<br />
                              Wellness<br />
                              Social Services<br />
                              Education
                          </span>
                      </div>
                  </div>

                  <div className="w-full h-full overflow-hidden">
                      <div className="ring-3 single-round">
                          <div className="w-full h-full relative font-faustina">
                              <div className="box1 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-0 left-[35%]">
                                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                                      <p className="text-[40px] leading-[33px] font-semibold">109 +</p>
                                      <p className="text-xl leading-[25px]">Client Served</p>
                                  </div>
                              </div>

                              <div className="box2 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-28 right-[2.5%]">
                                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                                      <p className="text-[40px] leading-[33px] font-semibold">28000 +</p>
                                      <p className="text-xl leading-[25px]">PEOPLE HELPED</p>
                                  </div>
                              </div>

                              <div className="box3 w-[200px] h-[95px] gradBorder uppercase z-10 bg-black rounded-2xl text-white flex flex-col absolute gap-2 items-center justify-center top-80 left-[90%]">
                                  <div className="absolute inset-0 rounded-2xl border-gradient"></div>
                                  <div className="relative flex flex-col gap-1 justify-center items-center z-10">
                                      <p className="text-[40px] leading-[33px] font-semibold">2100 +</p>
                                      <p className="text-xl leading-[25px]">STUDENT TRAINED</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* <div className="h-[400px] absolute -bottom-[470px] z-10 w-full bg-black">

                      </div> */}
                  </div>

              </div>

              <div className="flex flex-col w-[55%] gap-9 relative h-full">

                  <div className=" ring-1 ring-zoom-out absolute">

                  </div>
                  <div className=" ring-2 ring-zoom-out absolute">

                  </div>

                  <div className="flex gap-5 items-end pt-10">
                      <div className="image overflow-hidden w-[560px] h-[260px]"><img src={image2} alt="2" className=" object-cover object-top size-full" /></div>
                      <div className="zoom-out overflow-hidden w-[400px] h-[362px]"><img src={image1} alt="1" className=" object-cover size-full" /></div>
                  </div>
                  <div className="flex gap-5 pb-10">
                      <div className="zoom-out overflow-hidden w-[400px] h-[362px] object-cover"><img src={image3} alt="3" className="object-cover size-full" /></div>
                      <div className="rotate-x overflow-auto w-[560px] h-[260px]  object-cover">
                          <img src={image4} alt="4" className="size-full object-cover object-top" />
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default HeroSection