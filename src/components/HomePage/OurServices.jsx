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
        <div className='w-full flex justify-center'>
            {/* Container inner */}
            <div className="w-[80%] flex flex-col justify-center items-center gap-[60px]">

                {/* Our Services Text */}
                <div className="w-full flex flex-col text-center gap-4 font-['Faustina'] animate-zoomIn">
                    <h2 className='text-[56px] font-semibold bg-gradient-to-r from-[#1FA2FF] from-[40%] via-cyan-300 via-50% to-[#A6FFCB] to-60% text-transparent bg-clip-text'>Our Services</h2>
                    <p className='text-[18px] font-normal text-white'>Explore The World Of Technology With Us. Come Find Your Hidden Competencies</p>
                    <p className='text-[18px] font-normal text-white'>By Kick-Starting Your Business With New Insights</p>
                </div>

                {/* carousel container */}
                <div className="w-full flex flex-col">
                    {/* Carousel 1*/}
                    {carouselArray?.map((item, i) => {
                        if (i !== active) return null;

                        return (

                            <div className="w-full h-[1281px] flex justify-center pt-[125px] relative" key={item.id}>

                                {/* Main circle */}
                                <div className="main-circle w-[80%] h-full px-1 pt-1 bg-gradient-to-r from-[#1FA2FF] from-[35%] via-cyan-300 via-50% to-[#A6FFCB] to-90% ">
                                    <div className="main-circle w-full h-full bg-black flex justify-center items-center">

                                        {/* main circle inner */}
                                        <div className="flex w-[60%] gap-12 ">

                                            <div className="arrow-container h-full w-[65px] flex items-center mt-[40%]">
                                                <div className="left-arrow rounded-[6px] bg-gradient-to-r from-[#1FA2FF] from-[30%] via-[#12D8FA] via-50% to-[#A6FFCB] to-100% p-[2px] h-[50px] w-full" >

                                                    <div className="bg-black w-full h-full rounded-[6px] flex justify-center items-center cursor-pointer" onClick={carouselMovePrev}>

                                                        <img src={leftArrow} alt="" className='' />
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Content inside main circle */}
                                            <div className="inner-2 w-full flex flex-col justify-center gap-4">
                                                <div className="vector-img-div  w-full h-[110px] flex justify-center">
                                                    {/* img */}
                                                    <img src={item?.img} alt="" className='w-[80px] h-full' />
                                                </div>
                                                <div className="carousel-text w-full h-full  flex flex-col text-center gap-8 text-white">
                                                    {/* name */}
                                                    <p className='font-[Faustina] text-[40px] font-semibold'>{item?.name}</p>
                                                    {/* content */}
                                                    <p className='font-[Faustina] text-[20px] font-normal leading-10'>{item?.content}</p>
                                                    {/* button */}
                                                    <div className="w-full flex justify-center items-center">
                                                        <div className="flex justify-center items-center w-[155px] h-[62px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                                                            <button
                                                                className="button-main bg-black uppercase w-full h-full rounded-[14px]  font-poppins font-medium text-[20px] diagonal text-xl text-center relative py-[16px] px-[52px]"
                                                                onMouseEnter={handleMouseEnter}
                                                                onMouseLeave={handleMouseLeave}
                                                            >
                                                                <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
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

                                            <div className="arrow-container h-full w-[65px] flex items-center mt-[40%] ">
                                                <div className="right-arrow rounded-[6px] bg-gradient-to-l from-[#1FA2FF] from-[30%] via-[#12D8FA] via-50% to-[#A6FFCB] to-100% p-[2px] h-[50px] w-full" >
                                                    <div className="bg-black w-full h-full rounded-[6px] flex justify-center items-center cursor-pointer" onClick={carouselMoveNext}>

                                                        <img src={rightArrow} alt="" className='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute'></div>
                                </div>

                                {/* Top circle */}
                                <div className="top-circle absolute top-0 left-[42%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[263px] w-[263px] rounded-[50%] p-1">

                                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">

                                        <div className="top-circle-text w-[80%] h-[70%] p-4">

                                            <p className='font-[Faustina] text-[40px] font-bold text-white text-center flex justify-center'>{item?.title}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* top circle hidden on right */}
                                <div className="top-circle-hidden-right absolute top-0 left-[62%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[263px] w-[263px] rounded-[50%] p-1">

                                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">

                                        <div className="top-circle-text w-[80%] h-[70%] p-4">

                                            <p className='font-[Faustina] text-[40px] font-bold text-white text-center flex justify-center'>{item?.title}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* top circle hidden on left */}
                                <div className="top-circle-hidden-left absolute top-0 left-[22%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[263px] w-[263px] rounded-[50%] p-1">

                                    <div className="top-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">

                                        <div className="top-circle-text w-[80%] h-[70%] p-4">

                                            <p className='font-[Faustina] text-[40px] font-bold text-white text-center flex justify-center'>{item?.title}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* small gradient vertical line */}
                                <div className="gradient-vertical absolute top-[263px] left-[50%] h-[34px] w-1 bg-gradient-to-b from-[#1FA2FF] from-[5%] via-cyan-300 via-70% to-[#A6FFCB] to-100%"></div>

                                {/* design below top circle */}
                                <div className="mini-circle-1 w-[10px] h-[10px] rounded-[50%] absolute top-[294px] left-[40%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-1% to-[#A6FFCB] to-2%"></div>

                                <div className="gradient-horizontal w-[313px] h-1 absolute top-[297px] left-[40%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-3% to-[#A6FFCB] to-4%"></div>

                                <div className="mini-circle-1 w-[10px] h-[10px] rounded-[50%] absolute top-[294px] left-[60%] bg-gradient-to-r from-[#1FA2FF] from-[0%] via-cyan-300 via-1% to-[#A6FFCB] to-2%"></div>

                                {/* left-1-circle */}
                                <div className="left-1-circle absolute top-[11%] left-[22%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center cursor-pointer" onClick={carouselMovePrev}>
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full'>{getSmallCircleTitle(6)}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* left-2-circle */}
                                <div className="left-2-circle absolute top-[31%] left-[7%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full'>{getSmallCircleTitle(5)}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* left-3-circle */}
                                <div className="left-3-circle absolute top-[58%] left-[6%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full'>{getSmallCircleTitle(4)}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* right-1-circle */}
                                <div className="left-1-circle absolute top-[11%] right-[22%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1 cursor-pointer">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center" onClick={carouselMoveNext}>
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full'>{getSmallCircleTitle(1)}</p>

                                        </div>
                                    </div>
                                </div>

                                {/* right-2-circle */}
                                <div className="right-2-circle absolute top-[31%] right-[7%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full' >{getSmallCircleTitle(2)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* right-3-circle */}
                                <div className="right-3-circle absolute top-[58%] right-[6%] bg-gradient-to-r from-[#1FA2FF] from-[25%] via-cyan-300 via-70% to-[#A6FFCB] to-100% h-[195px] w-[195px] rounded-[50%] p-1">
                                    <div className="left-1-circle-inner w-full h-full bg-black rounded-[50%] flex justify-center items-center">
                                        <div className="left-1-circle-text w-[80%] h-[70%]">
                                            <p className='font-[Faustina] text-[24px] font-medium text-white text-center flex justify-center items-center w-full h-full'>{getSmallCircleTitle(3)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='h-[250px] bg-black -mt-[120px] w-full z-10'>

                </div>
                {/* {active == 2 && <p className='text-red-400'>TEstt 2</p>}
                {active == 1 && <p className='text-red-400'>TEstt ------------- 2</p>} */}
            </div>
        </div>
    )
}

export default OurServices
