import gsap from 'gsap'
import React, { useRef } from 'react'
import crossImage from '../assets/hexagons/cross-diagonal.svg'
import ellipse from '../assets/hexagons/ellipse.svg'
import plus from '../assets/hexagons/plus.svg'
// import Polygon1 from 

const WhyChooseParam = () => {
    const hex1Ref = useRef(null);
    const hex2Ref = useRef(null);
    const hex3Ref = useRef(null);
    const hex4Ref = useRef(null);
    const hex5Ref = useRef(null);
    const hex6Ref = useRef(null);

    const hex1Detail = useRef(null)
    const hex2Detail = useRef(null)
    const hex3Detail = useRef(null)
    const hex4Detail = useRef(null)
    const hex5Detail = useRef(null)
    const hex6Detail = useRef(null)

    const handleClick = (hexDetailRef) => {

        gsap.to(hex1Ref.current, {
            x: '-600', opacity: 0, duration: 1, ease: 'power2.out',
        }
        );

        gsap.to(hex2Ref.current, {
            x: '-600', y: '600', opacity: 0, duration: 1, ease: 'power2.out',
        }
        );

        gsap.to(hex3Ref.current, {
            x: '-600', y: '-600', opacity: 0, duration: 1, ease: 'power2.out',
        }
        );

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
            hexDetailRef.current,
            { x: '600', y: '600', opacity: 0, },
            { x: 0, y: 0, display: "block", opacity: 1, duration: 1, }
        );

    }
    const handleCancelClick = (hexDetailRef) => {
        gsap.fromTo(
            hex1Ref.current,
            {
                x: '-600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );

        gsap.fromTo(
            hex2Ref.current,
            {
                x: '-600',
                y: '600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );

        gsap.fromTo(
            hex3Ref.current,
            {
                x: '-600',
                y: '-600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );

        gsap.fromTo(
            hex4Ref.current,
            {
                x: '600',
                y: '600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );

        gsap.fromTo(
            hex5Ref.current,
            {
                x: '600',
                y: '600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );

        gsap.fromTo(
            hex6Ref.current,
            {
                x: '600',
                opacity: 0,
                ease: 'power2.in'
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.in'
            }
        );


        gsap.to(hexDetailRef.current, {
            x: 600, y: 600, opacity: 0, duration: 1, ease: 'power2.out',
        });

    }

    return (
        <>

            <div className="why-choose-param w-full flex justify-center overflow-hidden">

                <div className="why-choose-param-inner w-[calc(100%_-_200px)]">

                    {/* Text */}
                    <div className="why-choose-param-text text-center mt-16 animate-zoomIn">
                        <h2 className='bg-gradient-to-r from-[#1FA2FF] from-[40%] via-cyan-300 via-50% to-[#A6FFCB] to-60% text-transparent bg-clip-text font-semibold text-[56px] font-[Faustina]'>Why Choose Param</h2>

                        <p className='text-[18px] font-normal text-white font-[Poppins]'>What Do Opportunities Say To Businesses With No Technology? They Say Better Luck Next Time. To Make Sure You Jump On Every Opportunity Available, Param Group Of Companies Offers You Top-Notch Engineering Solutions With Brainstorming Ideas To Shift You Closer To Your Targets.</p>

                    </div>

                    {/* Hexagon section */}
                    <div className="section-hexagons flex gap justify-center items-center my-20 font-[Faustina] font-semibold text-2xl relative">

                        {/* Hex 1*/}
                        <div className="w-64 h-[440px] flex justify-center items-center me-5">

                            <div className="hex w-full h-1/2 bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1 transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-1' ref={hex1Ref}>
                                <div className="hex-inner hex bg-black w-full h-full ">

                                    <div className="hex-content flex flex-col items-center justify-center p-12  hover:cursor-pointer">

                                        <p className='text-white text-center pb-9'>Always there for you</p>

                                        <div className="plus flex justify-center" onClick={() => handleClick(hex1Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[43px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hex 2 */}
                        <div className="w-64 h-[440px] flex justify-center items-center">

                            <div className="hex w-full h-1/2 bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1
    transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-2' ref={hex2Ref}>

                                <div className="hex-inner hex bg-black w-full h-full">

                                    <div className="hex-content flex flex-col items-center justify-center p-12 hover:cursor-pointer ">

                                        <p className='text-white text-center pb-9'>Enthusiastic Employees</p>
                                        <div className="plus flex justify-center" onClick={() => handleClick(hex2Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[43px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Hex 3 and 4 */}
                        <div className="hex-34 w-64 flex flex-col gap-8">
                            {/* Hex 3 */}
                            <div className="hex h-[220px] bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1
    transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-3' ref={hex3Ref}>

                                <div className="hex-inner hex bg-black w-full h-full">

                                    <div className="hex-content flex flex-col items-center justify-center p-9 hover:cursor-pointer ">

                                        <p className='text-white text-center pb-5'>Specialized Customer Service Model</p>
                                        <div className="plus flex justify-center" onClick={() => handleClick(hex3Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[38px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div></div>
                            </div>
                            {/* Hex 4 */}
                            <div className="hex h-[220px] bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1 transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-4' ref={hex4Ref}>

                                <div className="hex-inner hex bg-black w-full h-full">
                                    <div className="hex-content flex flex-col items-center justify-center p-12   hover:cursor-pointer ">

                                        <p className='text-white text-center pb-5'>Affordable yet Effective</p>
                                        <div className="plus flex justify-center" onClick={() => handleClick(hex4Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[59px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hex 5*/}
                        <div className="w-64 h-[440px] flex justify-center items-center">

                            <div className="hex w-full h-1/2 bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1
    transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-5' ref={hex5Ref}>

                                <div className="hex-inner hex bg-black w-full h-full">

                                    <div className="hex-content flex flex-col items-center justify-center p-12   hover:cursor-pointer ">

                                        <p className='text-white text-center pb-9'>Innovation at it's best</p>
                                        <div className="plus flex justify-center" onClick={() => handleClick(hex5Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[43px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Hex 6 */}
                        <div className="w-64 h-[440px] flex justify-center items-center ms-5">

                            <div className="hex w-full h-1/2 bg-gradient-to-t from-sky-400 via-cyan-300 to-teal-400 p-1
    transform transition-all duration-1000 ease-in-out hover:scale-110" id='hex-6' ref={hex6Ref}>

                                <div className="hex-inner hex bg-black w-full h-full">

                                    <div className="hex-content flex flex-col items-center justify-center p-12   hover:cursor-pointer ">

                                        <p className='text-white text-center pb-9'>We bet to be on time</p>
                                        <div className="plus flex justify-center" onClick={() => handleClick(hex6Detail)}>
                                            <img src={ellipse} alt='' className='relative w-[33px] h-[33px]' />
                                            <img src={plus} alt='' className='absolute bottom-[43px] left-[119px] w-[18px] h-[18px]' />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Hidden section of hexagons */}
                    <div className="hex1-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex1Detail}>

                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex1Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex1-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>Always there for you</h2>

                                <p className='text-xl font-normal'>Our workforce involves a dedicated team of diverse individuals helping clients grow with each passing day. Our team loves to exceed clients' expectations and share a long-term bonding with them..</p>
                            </div>

                        </div>
                    </div>

                    <div className="hex2-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex2Detail}>

                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex2Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex2-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>Enthusiastic Employees</h2>

                                <p className='text-xl font-normal'>Our workforce involves a dedicated team of diverse individuals helping clients grow with each passing day. Our team loves to exceed clients' expectations and share a long-term bonding with them.</p>
                            </div>

                        </div>
                    </div>

                    <div className="hex3-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex3Detail}>
                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex3Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex3-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>Specialized Customer Service Model</h2>

                                <p className='text-xl font-normal'>Our system involves a well-crafted business model that focuses on the needs of the customers. Our business model implies keeping you in the center and communicating with you at every step.</p>
                            </div>

                        </div>
                    </div>

                    <div className="hex4-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex4Detail}>

                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex4Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex4-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>Affordable yet Effective</h2>

                                <p className='text-xl font-normal'>Technology is the need of the hour and should be afforded by all. We are here to change your vision toward using technology. It is not a costly investment until you optimize it in the right direction.</p>
                            </div>

                        </div>
                    </div>

                    <div className="hex5-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex5Detail}>

                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex5Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex5-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>Innovation at its Best</h2>

                                <p className='text-xl font-normal'>Our team's love for technology and innovation has always kept the spirits alive at work. We believe we can make a difference in society by making the best use of technology in healthcare.</p>
                            </div>

                        </div>
                    </div>

                    <div className="hex6-detail absolute top-[40%] my-16 mx-[100px] font-[Faustina] hidden" ref={hex6Detail}>

                        <div className="cross-container flex justify-end" onClick={() => handleCancelClick(hex6Detail)}>

                            <img src={ellipse} alt="" className="relative" />
                            <img
                                src={crossImage}
                                alt="Cross"
                                className="absolute right-[17px] top-[16px]"
                            />
                        </div>
                        <div className="img-text-container flex items-center h-[450px] gap-8">

                            <div className="img-container w-[450px] h-[90%] bg-hex6-bg bg-cover">
                            </div>

                            <div className="text-container flex flex-col items-start gap-10 justify-center text-white w-[50%] ps-5">

                                <h2>We bet to be on Time</h2>

                                <p className='text-xl font-normal'>We understand how precious your time is and guarantee to meet your expectations within time. Come picture an idea with us and we will tell you how it's done within time.</p>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default WhyChooseParam

