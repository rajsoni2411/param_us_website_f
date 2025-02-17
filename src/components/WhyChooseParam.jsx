import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import crossImage from '../assets/hexagons/crossImage.svg'
import hex1Image from '../assets/hexagons/hex1Image.png'
import hex2Image from '../assets/hexagons/hex2Image.png'
import hex3Image from '../assets/hexagons/hex3Image.png'
import hex4Image from '../assets/hexagons/hex4Image.png'
import hex5Image from '../assets/hexagons/hex5Image.png'
import hex6Image from '../assets/hexagons/hex6Image.png'
import plusImage from '../assets/hexagons/plusImage.svg'

const WhyChooseParam = () => {
    const hex1Ref = useRef(null);
    const hex2Ref = useRef(null);
    const hex3Ref = useRef(null);
    const hex4Ref = useRef(null);
    const hex5Ref = useRef(null);
    const hex6Ref = useRef(null);

    const activeRef = useRef(null);

    const [active, setActive] = useState(null)

    useEffect(() => {
        // console.log('active: ', active)

        if (active !== null) {
            gsap.to(hex1Ref.current, {
                x: '-600', opacity: 0, duration: 1, ease: 'power2.out',
            });

            gsap.to(hex2Ref.current, {
                x: '-600', y: '600', opacity: 0, duration: 1, ease: 'power2.out',
            });

            gsap.to(hex3Ref.current, {
                x: '-600', y: '-600', opacity: 0, duration: 1, ease: 'power2.out',
            });

            gsap.to(hex4Ref.current, {
                x: '600', y: '600', opacity: 0, duration: 1, ease: 'power2.out',
            });

            gsap.to(hex5Ref.current, {
                x: '600', y: '600', opacity: 0, duration: 1, ease: 'power2.out',
            });
            gsap.to(hex6Ref.current, {
                x: '600', opacity: 0, duration: 1, ease: 'power2.out',
            });

            gsap.fromTo(
                activeRef.current,
                { x: '600', y: '600', opacity: 0, },
                { x: 0, y: 0, opacity: 1, duration: 1, }
            );
        }
    }, [active])

    const handleCancelClick = () => {
        console.log(activeRef.current)
        gsap.to(
            activeRef.current,
            {
                x: '600', y: '600', opacity: 0, duration: 1, ease: 'power1.in', onComplete: () => {
                    setActive(null);
                }
            },

        );

        gsap.fromTo(hex1Ref.current,
            { x: '-600', opacity: 0, ease: 'power2.in' },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );

        gsap.fromTo(hex2Ref.current,
            { x: '-600', y: '600', opacity: 0, ease: 'power2.in' },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );

        gsap.fromTo(hex3Ref.current,
            { x: '-600', y: '-600', opacity: 0, ease: 'power2.in' },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );

        gsap.fromTo(hex4Ref.current,
            { x: '600', y: '600', opacity: 0, ease: 'power2.in' },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );

        gsap.fromTo(hex5Ref.current,
            { x: '600', y: '600', opacity: 0, ease: 'power2.in' },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );

        gsap.fromTo(hex6Ref.current,
            { x: '600', opacity: 0, ease: 'power2.in' },
            { x: 0, opacity: 1, duration: 1, ease: 'power2.in' }
        );
        // setActive(null)

    }
    const hexRefs = [hex1Ref, hex2Ref, hex3Ref, hex4Ref, hex5Ref, hex6Ref];
    const handleMouseEnter = (index) => {
        gsap.to(hexRefs[index].current, {
            scale: 1.07,            // scale the element by 1.07x
            duration: 0.5,       // animation duration of 0.5 seconds
            transformOrigin: "bottom left", // scale from the bottom left
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(hexRefs[index].current, {
            scale: 1,            // revert to original size
            duration: 0.5,       // animation duration of 0.5 seconds
            transformOrigin: "bottom left", // scale from the bottom left
        });
    };
    const hexArray = [
        {
            img: hex1Image,
            title: 'Always there for you',
            content: 'Our workforce involves a dedicated team of diverse individuals helping clients grow with each passing day. Our team loves to exceed clients’ expectations and share a long-term bonding with them.'
        },
        {
            img: hex2Image,
            title: 'Enthusiastic Employees',
            content: 'Our workforce involves a dedicated team of diverse individuals helping clients grow with each passing day. Our team loves to exceed clients’ expectations and share a long-term bonding with them.'
        },
        {
            img: hex3Image,
            title: 'Specialized Customer Model',
            content: 'Our system involves a well-crafted business model that focuses on the needs of the customers. Our business model implies keeping you in the center and communicating with you at every step.'
        },
        {
            img: hex4Image,
            title: 'Affordable yet Effective',
            content: 'Technology is the need of the hour and should be afforded by all. We are here to change your vision toward using technology. It is not a costly investment until you optimize it in the right direction.'
        },
        {
            img: hex5Image,
            title: 'Innovation at it’s best',
            content: 'Our team’s love for technology and innovation has always kept the spirits alive at work. We believe we can make a difference in society by making the best use of technology in healthcare.'
        },
        {
            img: hex6Image,
            title: 'We bet to be on Time',
            content: 'We understand how precious your time is and guarantee to meet your expectations within time. Come picture an idea with us and we will tell you how it’s done within time.'
        }
    ]
    return (
      <div className="w-full flex justify-center overflow-hidden  md:-mt-64 lg:-mt-1 ">
        <div className="w-full flex flex-col justify-center items-center md:gap-[60px]">
          {/* Text */}
          <div className="w-[80%]">
            <div className="text-center flex flex-col gap-4 animate-zoomIn">
              <h2 className="bg-gradient-to-r  from-[#1FA2FF] from-[40%] via-cyan-300 via-60% to-[#A6FFCB] to-72% text-transparent bg-clip-text font-semibold  lg:text-[56px] md:text-[56px] xs:text-[35px] font-[Faustina]">
                Why Choose Param
              </h2>

              <p className="lg:text-[18px] md:text-[18px] xs:text-[14px]  font-normal text-white font-[Poppins] leading-[35px]">
                What Do Opportunities Say To Businesses With No Technology? They
                Say Better Luck Next Time. To Make Sure You Jump On Every
                Opportunity Available, Param Group Of Companies Offers You
                Top-Notch Engineering Solutions With Brainstorming Ideas To
                Shift You Closer To Your Targets.
              </p>
            </div>
          </div>
          {/* Hexagon */}
          <div className={` ${active !== null ? "h-0" : "h-full"} w-[10%]  `}>
            <div className="flex    lg:flex-row xl:flex-row sm:flex-col  xs:flex-col md:flex-row   justify-center items-center font-[Faustina] font-semibold xl:text-[32px] xs:text-[25px] relative  sm:py-4">
              <div className=" flex xs:flex-col  2xl:flex-row md:gap-10 xs:gap-1 relative 2xl:pt-0 xl:pt-[88%]  md:-mr-10 2xl:mr-0">
                {/* Hex 1*/}
                <div
                  className=" 2xl:w-[277px] 2xl:h-[525px] xl:w-[277px] xl:h-[238px] lg:w-[277px] lg:h-[250px]  md:w-[250px] md:h-[250px]   xs:w-[300px]  xs:h-[525px]  2xl:mb-0 xs:-mb-32    md:mb-0 flex justify-center items-center relative
                    "
                  ref={hex1Ref}
                >
                  <div
                    className="hex hex-parent group xl:w-[277px] xl:h-[238px]  md:w-[250px] lg:w-[277px] lg:h-[250px]  md:h-[250px] xs:w-[250px] xs:h-[227px] bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                  >
                    <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden">
                      {/* inner shadow of hex */}
                      <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-4">
                        <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                          Always there for you
                        </p>

                        <div
                          className="w-[43px] h-[43px] cursor-pointer"
                          onClick={() => setActive(0)}
                        >
                          <img src={plusImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Outer shadow of hex */}
                  <div className="hex-shadow absolute w-[100%] h-[90%] top-[10px] left-[-15px]"></div>
                </div>

                {/* Hex 2 */}
                <div
                  className="2xl:w-[277px] 2xl:h-[525px] xl:w-[277px] xl:h-[238px] lg:w-[277px] lg:h-[250px]  md:w-[250px]  md:h-[250px] xs:w-[315px] xs:h-[525px] flex justify-center items-center relative"
                  ref={hex2Ref}
                >
                  <div
                    className="hex hex-parent group xl:w-[277px] xl:h-[238px] lg:w-[277px] lg:h-[250px]  md:w-[250px]  md:h-[250px] xs:w-[250px] xs:h-[227px] bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                  >
                    <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden">
                      <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-4">
                        <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                          Enthusiastic Employees
                        </p>

                        <div
                          className="w-[43px] h-[43px] cursor-pointer"
                          onClick={() => setActive(1)}
                        >
                          <img src={plusImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hex-shadow absolute w-[100%] h-[90%] top-[10px] left-[-15px]"></div>
                </div>
              </div>

              {/* Hex 3 and 4 */}
              <div
                className="2xl:w-[277px] 2xl:h-[625px] xl:w-[277px] xl:h-[675px] lg:w-[277px] lg:h-[850px]  md:w-[250px]  md:h-[850px] xs:w-[315px] xs:h-[477px] 
                 flex flex-col md:gap-10 xs:gap-52  relative"
              >
                {/* Hex 3 */}
                <div
                  className="hex hex-parent group 2xl:w-[277px] 2xl:h-[257px] lg:w-[277px] lg:h-[250px] xl:w-[277px] xl:h-[238px]  md:w-[250px]  md:h-[250px] xs:w-[250px] xs:h-[400px]   lg:mb-0 xs:-mb-24 md:mb-0 bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1  xs:ml-8 md:ml-0"
                  ref={hex3Ref}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden">
                    <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                    <div className="w-[72%] h-full flex flex-col justify-center items-center gap-4">
                      <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                        Specialized Customer Service Model
                      </p>

                      <div
                        className="w-[43px] h-[43px] cursor-pointer"
                        onClick={() => setActive(2)}
                      >
                        <img src={plusImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hex-shadow absolute w-[100%] h-[50%] top-[10px] left-[-15px]"></div>

                {/* Hex 4 */}
                <div
                  className="hex hex-parent group 2xl:w-[277px] 2xl:h-[257px] lg:w-[277px] lg:h-[250px] xl:w-[277px] xl:h-[238px]  md:w-[250px]  md:h-[250px] xs:w-[250px] xs:h-[400px]   xs:ml-8 md:ml-0  lg:mb-0 xs:-mb-24  md:mt-0 md:-mb-0 bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1"
                  ref={hex4Ref}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden ">
                    <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                    <div className="w-[60%] h-full flex flex-col justify-center items-center gap-4">
                      <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                        Affordable yet Effective
                      </p>

                      <div
                        className="w-[43px] h-[43px] cursor-pointer"
                        onClick={() => setActive(3)}
                      >
                        <img src={plusImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="hex-shadow absolute w-[130%] h-[90%] top-[46%] left-[-55px]"></div> */}
              </div>

              <div className=" flex xs:flex-col  2xl:flex-row md:gap-10 xs:gap-1 relative 2xl:pt-0 xl:pt-[88%] md:-ml-10 2xl:ml-0">
                {/* Hex 5*/}
                <div
                  className=" 2xl:w-[277px] 2xl:h-[525px] xl:w-[277px] xl:h-[238px]  lg:w-[277px] lg:h-[250px] md:w-[250px] md:h-[250px] xs:w-[315px] xs:h-[525px]  xl:mb-0 xs:-mb-32 xs:mt-24 md:mt-0   md:mb-0 flex justify-center items-center relative
                    "
                  ref={hex5Ref}
                >
                  <div
                    className="hex hex-parent group xl:w-[277px] xl:h-[238px]  lg:w-[277px] lg:h-[250px] md:w-[250px]  md:h-[250px] xs:w-[250px] xs:h-[227px] bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                  >
                    <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden">
                      {/* inner shadow of hex */}
                      <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-4">
                        <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                          Innovation at it's best
                        </p>

                        <div
                          className="w-[43px] h-[43px] cursor-pointer"
                          onClick={() => setActive(4)}
                        >
                          <img src={plusImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Outer shadow of hex */}
                  <div className="hex-shadow absolute w-[100%] h-[90%] top-[10px] left-[-15px]"></div>
                </div>

                {/* Hex 6 */}
                <div
                  className="2xl:w-[277px] 2xl:h-[525px] xl:w-[277px] xl:h-[238px] lg:w-[277px] lg:h-[250px]  md:w-[250px]  md:h-[250px] xs:w-[315px] xs:h-[525px] flex justify-center items-center relative"
                  ref={hex6Ref}
                >
                  <div
                    className="hex hex-parent group xl:w-[277px] xl:h-[238px]  lg:w-[277px] lg:h-[250px] md:w-[250px]  md:h-[250px] xs:w-[250px] xs:h-[227px]  bg-gradient-to-b from-[#A6FFCB] via-[#12D8FA] via-[40%] to-[#1FA2FF] to-[90%] p-1"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={() => handleMouseLeave(5)}
                  >
                    <div className="hex-inner hex bg-black w-full h-full flex justify-center relative overflow-hidden">
                      <div className="hex-shadow-inner absolute w-[100%] h-[100%] z-[-1] group-hover:opacity-[0.3]"></div>

                      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-4">
                        <p className="text-white text-center xl:text-[26px] 2xl:text-text-[32px]">
                          We bet to be on time
                        </p>

                        <div
                          className="w-[43px] h-[43px] cursor-pointer"
                          onClick={() => setActive(5)}
                        >
                          <img src={plusImage} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hex-shadow absolute w-[100%] h-[90%] top-[10px] left-[-15px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hex-detail lg:w-[90%] xs:w-[100%] xs:mt-10 md:mt-0 lg:px-60 items-center justify-center xs:flex-col xl:flex-row font-[Faustina] flex lg:flex-row ${
              active !== null ? "h-auto" : "h-0"
            }`}
            ref={activeRef}
          >
            <div className="img-text-container w-[95%] flex justify-center items-center">
              <div className="img-text-inner h-full w-full flex lg:flex-row xs:flex-col ">
                {/* Left Side - Image */}
                <div className="w-full lg:w-[40%] flex justify-center items-center relative">
                  <img
                    src={hexArray[active]?.img}
                    alt=""
                    className="img-container lg:w-[100%] lg:h-[100%]  xs:w-[50%] xs:h-[100%] "
                  />
                  {/* Close Button - Positioned at the Top-Right */}
                  <img
                    src={crossImage}
                    alt="Close"
                    className="w-[40px] h-[40px] cursor-pointer absolute top-[2rem] right-0 lg:hidden xl:hidden"
                    onClick={handleCancelClick}
                  />
                </div>

                {/* Right Side - Text */}
                <div className="text-container w-full lg:w-[89%]  flex flex-col items-center justify-center text-center text-white   ">
                  <p className="lg:text-[40px] md:text-start md:text-[35px] xs:text-[30px] font-semibold bg-gradient-to-r from-[#1FA2FF] from-0% via-45% to-[#A6FFCB] to-92% bg-clip-text text-transparent">
                    {hexArray[active]?.title}
                  </p>
                  <p className="text-[20px] leading-[30px] font-normal">
                    {hexArray[active]?.content}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[5%] flex justify-start items-start">
              <div className="hidden absolute -top-[4.25rem] lg:block xl:block w-[40px] h-[40px] cursor-pointer">
                <img src={crossImage} alt="" onClick={handleCancelClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default WhyChooseParam