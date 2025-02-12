import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import capVector from '../../assets/images/capVector.svg'
import handVector from '../../assets/images/handVector.svg'
import healthVector from '../../assets/images/healthVector.svg'
import heartVector from '../../assets/images/heartVector.svg'
import homeVector from '../../assets/images/homeVector.svg'
import leafVector from '../../assets/images/leafVector.svg'
import leftArrow from '../../assets/images/leftarrow2.svg'
import phoneVector from '../../assets/images/phoneVector.svg'
import rightArrow from '../../assets/images/rightarrow.svg'

const OurServices = () => {
    const [active, setActive] = useState(0);
    const prevActiveRef = useRef(active);

    //left right arrow scaling
    useEffect(() => {
        gsap.to('.arrow-container', {
            scale: 1.5,
            opacity: 1,
            duration: 2,
            ease: "power4.inOut",
            repeat: -1,
            yoyo: true,
            yoyoEase: 'power4.inOut'
        });
    }, []);

    //small circle fade in fade out
    useEffect(() => {
        gsap.fromTo(
            '.left-1-circle',
            { opacity: 0.7, duration: 1.5, ease: 'power1.inOut' },
            { opacity: 1, duration: 1.5, ease: 'power1.inOut' }
        );
        gsap.fromTo(
            ['.left-1-circle-text'],
            { opacity: 0, duration: 1.5, ease: 'power1.inOut' },
            { opacity: 1, duration: 1.5, ease: 'power1.inOut' }
        );
        gsap.fromTo(
            ['.inner-2'],
            { opacity: 0.1, duration: 1.2, ease: 'power2.in' },
            { opacity: 1, duration: 1.0, ease: 'power2.in' }
        );
        gsap.to(".play", {
            scale: 1,
            duration: 1.5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
        })
        const prevActive = prevActiveRef.current; // previous value

        // this will update ref for the next render
        prevActiveRef.current = active;

        console.log("last", prevActive)
        console.log("active", active)
        if (((prevActive < active) && !(prevActive === 0 && active === 6)) || (prevActive === 6 && active === 0)) {
            gsap.fromTo(
                '.top-circle-hidden-left',
                {
                    x: '0',
                    opacity: 0
                },
                {
                    x: '-320',
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power1.inOut'
                }
            );

            gsap.to(
                '.top-circle', {
                x: '-320',
                opacity: 0,
                duration: 0.8,
                ease: 'power1.inOut'
            })
            gsap.fromTo('.top-circle-hidden-right', {
                x: '0',
                opacity: 0,
                duration: 0.8,
                ease: 'power1.inOut'
            },
                {
                    x: '-320',
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power1.inOut'
                })

        } else if ((prevActive > active) || (prevActive === 0 && active === 6)) {
            gsap.fromTo(
                '.top-circle-hidden-left', {
                x: '0',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut'
            }, {
                x: '320',
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
            gsap.to(
                '.top-circle', {
                x: '320',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut'
            })
            gsap.fromTo(
                '.top-circle-hidden-right',
                {
                    x: '0',
                    opacity: 0
                },
                {
                    x: '320',
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                }
            );
        } else {
            gsap.set(['.top-circle'], {
                x: 0
            })
            gsap.set(['.top-circle-hidden-right', '.top-circle-hidden-left'], {
                x: 0, opacity: 0
            })
        }


    }, [active]);

    //limited carousel movement
    // const carouselMoveNext = () => {
    //     if (active < carouselArray.length - 1) {
    //         setActive(active + 1);
    //     }
    // }
    // const carouselMovePrev = () => {
    //     if (active > 0) {
    //         setActive(active - 1);
    //     }
    // }

    //full carousel movement
    const carouselMoveNext = () => {
        setActive((active + 1) % carouselArray.length);
    }

    const carouselMovePrev = () => {
        setActive((active - 1 + carouselArray.length) % carouselArray.length);
    }

    const getSmallCircleTitle = (offset) => {
        const totalCircles = carouselArray.length;
        const currentIndex = (active + offset + totalCircles) % totalCircles;
        return carouselArray[currentIndex].title;
    };

    // Button Text Roll
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
    const carouselArray = [
        {
            id: 1,
            name: 'Param Consulting Service',
            title: 'IT Consulting',
            img: phoneVector,
            content: 'Founded in 2001, Param Consulting Services Inc. aims to solve all IT-related requirements of clients. Be it application development, training, or project management; PCSI is one roof that covers it all. Param Consulting offers cost-effective and value-driven IT solutions to clients looking forward to inducing technology in regular business activities. With the state of the art technology, the company guarantees a comprehensive solution to all your managerial needs.',
        },
        {
            id: 2,
            name: 'Param Healthcare Service',
            title: 'Research & Development',
            img: handVector,
            content: 'All of us have dealt with the hustle of getting proper medical care in life for ourselves or our loved ones. Well, not anymore, Param Healthcare Services is one of the fastest-growing healthcare companies offering all medical services in one place. Adult day care, medical billing, home healthcare- you name it, we have covered it all.',
        },
        {
            id: 3,
            name: 'Param Institute OF Education',
            title: 'Education',
            img: capVector,
            content: 'Param Institute of Education is a medical training and education service provider present in the industry for more than two decades. The company aims to become the torchbearer for all the students pursuing their careers in healthcare services. With this imagination, the founders established Param Institute of Education in 2009 to offer uncompromising education along with a promise of a job.',
        },
        {
            id: 4,
            name: 'Param Adult Day Care',
            title: 'Adult Day Care',
            img: homeVector,
            content: 'Param Adult Day Care is a Not-for-profit organization helping senior citizens a comfortable road in their second innings of life. The foundation of the company is to build a healthier community by offering a safe, friendly, and fun environment to the aging population. Family caregivers trust us because we offer a homely environment and the best healthcare services in the area.',
        },
        {
            id: 5,
            name: 'Param Wellness',
            title: 'Research and Development',
            img: leafVector,
            content: 'Param Wellness is a blend of healthcare and wellness service provider using Ayurveda and Natural body healing. This US-based organization focuses on refreshing, restoring, and rejuvenating the mind, body, and spirit naturally with the action. The company’s motto is to improve the quality of life of individuals using complementary healing approaches along with conventional treatments.',
        },
        {
            id: 6,
            name: 'Param Care Foundation',
            title: 'Care Foundation',
            img: heartVector,
            content: 'Param Care Foundation, a charitable organization founded in New Jersey to actively improve healthy living in the community. The foundation envisions making society aware of the everyday decisions that make them one step closer to their healthcare goal. The association conducts seminars, yoga sessions, and healthcare screenings to connect with the community and motivate them to improve their lifestyle.',
        },
        {
            id: 7,
            name: 'Param Healthcare Services',
            title: 'Healthcare Services',
            img: healthVector,
            content: 'With Science on one hand and healthcare on the other, Param Bhakti Healthcare and Research is a research organization dealing in novel drug testing and development. The organization’s vision is to find natural medicinal treatments for people to cure their chronic lifestyle diseases. Inspired by B. B. Thakar, the association aims to use innovation in offering healthy growth in life.',
        }
    ]


    return (
      // Main container
      <div className="w-full flex justify-center overflow-hidden">
        {/* Container inner */}
        <div className=" xl:w-[96%] 2xl:w-[80%] lg:w-[110%] md:w-[90%] sm:w-[90%] xs:w-[100%] flex flex-col justify-center items-center gap-[60px]">
          {/* Our Services Text */}
          <div className="w-full flex flex-col md:pt-72 text-center gap-4 font-['Faustina'] animate-zoomIn">
            <h2 className="text-[56px] sm:text-[48px] font-semibold bg-gradient-to-r from-[#1FA2FF] from-[40%] via-cyan-300 via-50% to-[#A6FFCB] to-60% text-transparent bg-clip-text">
              Our Services
            </h2>
            <p className="text-[18px] sm:text-[16px] font-normal text-white">
              Explore The World Of Technology With Us. Come Find Your Hidden
              Competencies
            </p>
            <p className="text-[18px] sm:text-[16px] font-normal text-white">
              By Kick-Starting Your Business With New Insights
            </p>
          </div>

          {/* carousel container */}
          <div className="w-full flex flex-col">
            {/* Carousel 1 */}
            {carouselArray?.map((item, i) => {
              if (i !== active) return null;

              return (
                <div
                  className="w-full xl:h-[1281px] lg:h-[1240px] md:h-[1281px] sm:h-[1150px] xs:h-[1000px] flex justify-center md:pt-[125px] sm:pt-[100px] relative"
                  key={item.id}
                >
                  {/* Main circle */}
                  <div className="main-circle  xl:w-[80%] lg:w-[95%] md:w-[96%] lg:h-[100%] md:h-[78%] sm:w-[96%] xs:w-[100%] h-full px-1 pt-1 md:bg-gradient-to-r from-[#1FA2FF] from-[35%] via-cyan-300 via-50% to-[#A6FFCB] to-90% sm:bg-none xs:bg-none">
                    <div className="main-circle w-full h-full bg-black flex justify-center items-center">
                      {/* main circle inner */}
                      <div className="flex lg:w-[59%] xl:w-[65%] 2xl:w-[60%] md:w-[79%]  sm:w-[76%] xs:w-[71%] md:gap-20 sm:gap-[15px] xs:gap-10 justify-center items-center">
                        <div className="static arrow-container h-full md:w-[65px]  mb-10 sm:w-[55px] xs:w-[40px] flex items-center mt-[40%] sm:mt-[35%]">
                          <div className="left-arrow rounded-[6px] bg-gradient-to-r from-[#1FA2FF] from-[30%] via-[#12D8FA] via-50% to-[#A6FFCB] to-100% p-[2px] md:h-[50px] sm:h-[40px] xs:h-[30px] w-full">
                            <div
                              className="bg-black w-full h-full rounded-[6px]  flex justify-center items-center cursor-pointer play"
                              onClick={carouselMovePrev}
                            >
                              <img
                                src={leftArrow}
                                alt=""
                                className="play w-4 h-4"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content inside main circle */}
                        <div className="inner-2 w-full flex flex-col justify-center gap-4 lg:mt-0 md:mt-[17%] sm:mt-[24px] xs:mt-28">
                          <div className="vector-img-div w-full md:h-[110px] sm:h-[80px] xs:h-[50px] flex justify-center">
                            {/* img */}
                            <img
                              src={item?.img}
                              alt=""
                              className="lg:w-[80px]  md:w-[40px] sm:w-[60px] xs:w-full h-full"
                            />
                          </div>
                          <div className="carousel-text w-full h-full flex flex-col text-center gap-8 text-white">
                            {/* name */}
                            <p className="font-[Faustina] lg:text-[40px] md:text-[27px] sm:text-[30px] xs:text-[20px] font-semibold">
                              {item?.name}
                            </p>
                            {/* content */}
                            <p className="font-[Faustina] lg:text-[20px] md:text-[17px] sm:text-[15px] xs:text-[10px] font-normal md:leading-10 sm:leading-7 xs:leading-4">
                              {item?.content}
                            </p>
                            {/* button */}
                            <div className="w-full flex justify-center items-center">
                              <div className="flex justify-center items-center w-[155px] sm:w-[140px] h-[62px] sm:h-[55px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                                <button
                                  className="button-main bg-black uppercase w-full h-full rounded-[14px] font-poppins font-medium text-[20px] diagonal text-xl text-center relative py-[16px] sm:py-[14px] px-[52px] sm:px-[45px]"
                                  onMouseEnter={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave}
                                >
                                  <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
                                    Learn more
                                  </span>
                                  <span className="btn2 absolute tranistion-all opacity-0 top-[50px] sm:top-[45px] left-0 w-full h-full flex justify-center items-center text-white">
                                    Learn more
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="arrow-container h-full md:w-[65px] sm:w-[55px] xs:w-[40px] flex items-center mt-[40%] sm:mt-[35%]">
                          <div className="right-arrow rounded-[6px] bg-gradient-to-l mb-10  from-[#1FA2FF] from-[30%] via-[#12D8FA] via-50% to-[#A6FFCB] to-100% p-[2px] md:h-[50px] sm:h-[40px] xs:h-[30px] w-full">
                            <div
                              className="bg-black w-full h-full rounded-[6px]  flex justify-center items-center cursor-pointer play"
                              onClick={carouselMoveNext}
                            >
                              <img
                                src={rightArrow}
                                alt=""
                                className="play w-4 h-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute"></div>
                  </div>

                  {/* Top circle */}
                  <div className="top-circle absolute flex justify-center items-center top-0 lg:left-[42%] md:left-[36%] sm:left-[30%] xs:left-[19%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[263px] w-[263px] rounded-[50%] p-1">
                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="top-circle-text xs:w-[60%] md:w-[80%]  h-[70%] p-4">
                        <p className="font-[Faustina] lg:text-[40px] md:text-[30px]  text-[30px]  font-bold text-white text-center flex items-center justify-center">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* top circle hidden on right */}
                  <div className="top-circle-hidden-right flex justify-center items-center absolute top-0 md:left-[72%] lg:left-[62%] sm:left-[80%] xs:left-[95%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100%  h-[263px] w-[263px] rounded-[50%] p-1">
                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="top-circle-text w-[80%] h-[70%] p-4">
                        <p className="font-[Faustina] lg:text-[40px] md:text-[30px] text-[30px] font-bold text-white text-center flex items-center justify-center">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* top circle hidden on left */}
                  <div className="top-circle-hidden-left flex justify-center items-center absolute top-0 lg:left-[22%] md:-left-[2%] sm:-left-[30%] xs:-left-[56%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[263px] w-[263px] rounded-[50%] p-1">
                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="top-circle-text w-[80%] h-[70%] p-4">
                        <p className="font-[Faustina] lg:text-[40px] md:text-[30px]   text-[30px]font-bold text-white text-center flex items-center justify-center">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* small gradient vertical line */}
                  <div className="gradient-vertical absolute top-[263px] md:left-[50%] sm:left-[45%] h-[34px] w-1 bg-gradient-to-b from-[#1FA2FF] from-[5%] via-cyan-300 via-70% to-[#A6FFCB] to-100%"></div>

                  {/* design below top circle */}
                  <div className="mini-circle-1 w-[10px] h-[10px] rounded-[50%] absolute top-[294px] md:left-[40%] sm:left-[32%] xs:left-[23%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-1% to-[#A6FFCB] to-2%"></div>

                  <div className="gradient-horizontal lg:w-[313px] md:w-[180px] sm:w-[270px] xs:w-[229px] h-1 absolute top-[297px] md:left-[40%] sm:left-[32%] xs:left-[23%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-3% to-[#A6FFCB] to-4%"></div>

                  <div className="mini-circle-1 w-[10px] h-[10px] rounded-[50%] absolute top-[294px] md:left-[60%] sm:left-[67%] xs:left-[75%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-1% to-[#A6FFCB] to-2%"></div>

                  {/* left-1-circle */}
                  <div className="hidden md:block left-1-circle absolute top-[11%] md:left-[15%] xl:left-[22%]  lg:left-[16%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1">
                    <div
                      className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center cursor-pointer"
                      onClick={carouselMovePrev}
                    >
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(6)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* left-2-circle */}
                  <div className="hidden md:block left-2-circle absolute xl:top-[31%] sm:top-[31%]  lg:top-[48%] md:-left-[2%] lg:left-[0%] xl:left-[7%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1">
                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(5)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* left-3-circle */}
                  <div className="hidden md:block left-3-circle absolute md:top-[69%] xl:top-[58%]  lg:top-[81%] md:left-[16%]  lg:left-[16%] xl:left-[6%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1">
                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right-1-circle */}
                  <div className="hidden md:block left-1-circle absolute top-[11%] md:right-[11%] lg:right-[17%] xl:right-[22%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1 cursor-pointer">
                    <div
                      className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center"
                      onClick={carouselMoveNext}
                    >
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(1)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right-2-circle */}
                  <div className="hidden md:block right-2-circle absolute md:top-[31%] xl:top-[33%] xl:right-[7%] lg:top-[47%] md:-right-[2%] lg:right-[0%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1">
                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* right-3-circle */}
                  <div className="hidden md:block right-3-circle absolute  md:top-[68%] xl:top-[59%]  lg:top-[81%] md:right-[10%] lg:right-[17%] xl:right-[6%]  bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% lg:h-[195px] lg:w-[195px] md:h-[142px] md:w-[142px] rounded-[50%] p-1">
                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                      <div className="left-1-circle-text w-[80%] h-[70%]">
                        <p className="font-[Faustina] md:text-[20px] lg:text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full">
                          {getSmallCircleTitle(3)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-[250px] sm:h-[220px] bg-black -mt-[120px] sm:-mt-[100px] w-full z-10"></div>
          {/* {active == 2 && <p className='text-red-400'>TEstt 2</p>}
    {active == 1 && <p className='text-red-400'>TEstt ------------- 2</p>} */}
        </div>
      </div>
    );
}

export default OurServices
