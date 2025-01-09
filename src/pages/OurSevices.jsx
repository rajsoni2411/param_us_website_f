import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import big from '../assets/images/bigpolygon.png';
import padc from '../assets/images/padc.png';
import pcf from '../assets/images/pcf.png';
import pcsi from '../assets/images/pcsi.png';
import phis from '../assets/images/phis.png';
import pie from '../assets/images/pie.png';
import rnd from '../assets/images/rnd.png';
import small from '../assets/images/smallpolygon.svg';
import wellness from '../assets/images/wellness.png';
const hexagonDetails = [
    { title: "IT Consulting", mainTitle: 'Param Consulting Services', highlight: "Occupy your resource and unlock new paradigms with our IT solutions.", p1: 'Founded in 2001, Param Consulting Services Inc. aims to solve all IT-related requirements of clients. Be it application development, training, or project management; PCSI is one roof that covers it all. Param Consulting offers cost-effective and value-driven IT solutions to clients looking forward to inducing technology in regular business activities. With the state of the art technology, the company guarantees a comprehensive solution to all your managerial needs.', p2: 'At PCSI, we believe that employees are key resources for any organization. Nowadays, finding the right candidate for the job has become extremely critical. Therefore, we offer effective staff augmentation services to meet your qualified personnel needs. We are equipped with resources that help us creatively segregate the cream candidates and present them to you. Maintaining cost-effectiveness for clients has been one of the most prominent features of the business model throughout our journey. Need help in IT staffing? You know where to find us!', url: '', image: pcsi },
    { title: "Healthcare", mainTitle: 'Param Healthcare Services', highlight: "Committed to taking care of your every medical need. We offer a diverse wellness portfolio of services to relieve your worries.", p1: 'All of us have dealt with the hustle of getting proper medical care in life for ourselves or our loved ones. Well, not anymore, Param Healthcare Services is one of the fastest-growing healthcare companies offering all medical services in one place. Adult day care, medical billing, home healthcare- you name it, we have covered it all.', url: '', image: phis },
    { title: "Education", mainTitle: 'Param Institute Of Education', highlight: "Get trained with us and your fineness will attract opportunities for life.", p1: 'Param Institute of Education is a medical training and education service provider present in the industry for more than two decades. The company aims to become the torchbearer for all the students pursuing their careers in healthcare services. With this imagination, the founders established Param Institute of Education in 2009 to offer uncompromising education along with a promise of a job.', url: '', image: pie },
    { title: "Adult Day Care", mainTitle: 'Param Adult Day Care', highlight: "A home away from home/ Parents are not the burden, burden is the care and attention that follow. Make your parents happy by giving the best services and care.", p1: 'Param Adult Day Care is a Not-for-profit organization helping senior citizens a comfortable road in their second innings of life. The foundation of the company is to build a healthier community by offering a safe, friendly, and fun environment to the aging population. Family caregivers trust us because we offer a homely environment and the best healthcare services in the area.', p2: 'Aging and getting old is a phase of life that should not be burdensome for anyone. We at Param Adult Day Care, are here to help you shed your burden on responsible shoulders. We present you with a positive and friendly to support you in taking care of your parents. Our Day Care is equipped with all the healthcare, social and fun activities to engage an aged mind and make them feel at home. Our staff is experienced and well trained in treating aged individuals and managing their day-to-day struggles. Let us take care of your loved ones here so that you can take care of them from afar.', url: '', image: padc },
    { title: "Wellness", mainTitle: 'Ayurveda & Nature Cure Center', highlight: "Find your inner peace and discover the holistic ways of wellness", p1: 'Param Wellness is a blend of healthcare and wellness service provider using Ayurveda and Natural body healing. This US-based organization focuses on refreshing, restoring, and rejuvenating the mind, body, and spirit naturally with the action. The company’s motto is to improve the quality of life of individuals using complementary healing approaches along with conventional treatments.', p2: 'Your health is your asset- it is the most important part you need in life. In today’s lifestyle, people have forgotten the essence of healthy living. Param Wellness is a committed organization offering authentic and realistic wellness and healthcare services to people. We use all-natural methods like Acupuncture, Homeopathy, Reiki, Yoga, etc. as a part of Integrative Healthcare Therapy. At Param Wellness, our mission is to help you heal internally as well as externally with our unconventional approaches. We use tested herbs that are centuries-old herbs in medical practices to provide a whole body healing experience.', url: '', image: wellness },
    { title: "Care Foundation", mainTitle: 'Param Care Foundation', highlight: "Join us in our mission to spread awareness, motivate people and transform lives", p1: 'Param CARE Foundation, a charitable organization founded in New Jersey to actively improve healthy living in the community. The foundation envisions making society aware of the everyday decisions that make them one step closer to their healthcare goal. The association conducts seminars, yoga sessions, and healthcare screenings to connect with the community and motivate them to improve their lifestyle.', p2: 'With the changing environment, our lifestyle and habits are also changing rapidly. This change is making our bodies age before their time. We, at Param CARE, are working towards a social cause to make significant changes in your lifestyle for good. Our motto is to collaborate actions to reach and educate the society about harmful effects of their lifestyle. Our committed partners help us in organizing yoga sessions, seminars, and other events to generate social awareness and help others suffering from chronic illness. Having a healthy body has become a privilege these days, Param CARE is committed to changing and making everyone achieve their healthcare goals.', url: '', image: pcf },
    { title: "Research & Development", mainTitle: 'Param Healthcare & Research Services', highlight: "Each day we get one step closer to finding solutions to improve your health and lifestyle", p1: 'With Science on one hand and healthcare on the other, Param Bhakti Healthcare and Research is a research organization dealing in novel drug testing and development. The organization’s vision is to find natural medicinal treatments for people to cure their chronic lifestyle diseases. Inspired by B. B. Thakar, the association aims to use innovation in offering healthy growth in life.', p2: 'Param Group of Companies always believes that science is worth exploring. At Param Bhakti Healthcare and Research we believe in exploring, innovating, and inventing new products along with strategies that can help healthcare professionals effectively deal with the disease. Our dedicated research team uses integrated approaches to solve current healthcare problems like Alzheimer’s, Diabetes, etc. Our company focuses on finding extraordinary ways to assist patients in their healthcare. We induce innovation and technology with wellness to help to get a better health experience.', url: '', image: rnd },
];

const OurServices = () => {
    const [active, setActive] = useState(0);
    useEffect(() => {
        gsap.fromTo(".bg-container", { opacity: 0, x: 200, y: 200 }, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power2.out",
        });

    }, [])
    useEffect(() => {
        gsap.fromTo(
            ".hexagon",
            { opacity: 0, scale: 0, rotation: -160, filter: "blur(5px)" },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                filter: "blur(0px)",
                duration: 2,
                ease: "power2.out",
                stagger: 0.3,
            }
        );

        gsap.fromTo(
            ".zoom-out",
            { scale: 0, opacity: 0, filter: "blur(10px)" },
            {
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2.5,
                ease: "power2.out",
            }
        );
    }, [active]);

    const handleHexagonClick = (index) => {
        setActive(index);
    };

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
        <div className="our-clients bg-container  w-full flex justify-center">
            <div className="our-clients-inner w-[calc(100%_-_200px)]">

                {/* -------------------------------------------------- Background Image div ----------------------------------------------- */}

                <div className="font-faustina  h-[440px] w-full mt-[60px] bg-service-bg rounded-[110px] text-white flex flex-col justify-center items-center  relative bg-cover bg-center bg-no-repeat">
                    <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#A6FFCB66] from-[0%] via-30% to-[#12d8fa] to-[90%] opacity-20 rounded-[110px]"></div>
                    <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#00000080] from-[0%] via-25% to-[00000087] opacity-90 rounded-[110px]"></div>
                    <p className="font-bold text-[64px] z-10 bg-container">Our Core Services</p>
                    <p className="font-medium text-[32px] bg-container w-10/12 text-center z-10">
                        "Explore the world of technology with us. Come find your hidden competencies by kick-starting your business with new insights"
                    </p>
                </div>
                <div className="w-full flex flex-wrap justify-between mt-20">
                    {hexagonDetails.map((hex, index) => (
                        <div
                            key={index}
                            className="w-[14%] h-[62px] flex justify-center items-center relative cursor-pointer"
                            onClick={() => handleHexagonClick(index)}
                        >
                            <div
                                className={`hex hex-parent group w-full p-1 bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] via-[90%] to-[#1FA2FF] to-[180%]`}                            >
                                <div className={`hex bg-black ${active === index
                                    ? "bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] via-[90%] to-[#1FA2FF] to-[180%]"
                                    : "bg-black"
                                    } w-full p-4 h-full flex justify-center relative overflow-hidden`}>
                                    <div className="w-[60%] h-full flex flex-col justify-center items-center">
                                        <p className={`text-center font-faustina text-2xl font-bold ${active === index ? "text-black" : "text-white"}`}>
                                            {hex.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full flex flex-col items-center  justify-center mt-24'>
                    <p className='uppercase text-2xl font-bold font-faustina text-white'>{hexagonDetails[active].title}</p>
                    <p className='text-[56px] font-semibold text-head-gradient font-faustina'>{hexagonDetails[active].mainTitle}</p>
                    <p className='text-xl font-faustina text-white'>{hexagonDetails[active].highlight}</p>
                    <div className='w-full flex mt-24 gap-28'>
                        <div className='w-1/2 flex flex-col gap-8'>
                            {hexagonDetails[active]?.p1 && <p className='font-poppins text-2xl tracking-[1px] font-normal  text-white'>{hexagonDetails[active]?.p1}</p>}
                            {hexagonDetails[active]?.p2 && <p className='font-poppins text-2xl tracking-[1px]  text-white'>{hexagonDetails[active]?.p2}</p>}
                            <p className='font-poppins text-2xl tracking-[1px] text-white'>For More Information</p>
                            <div className="flex justify-center  items-center w-[220px] h-[62px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                                <button className="button-main bg-black uppercase w-full h-full rounded-[14px]  font-poppins font-medium diagonal text-xl text-center relative py-[20px] !px-[60px]"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}>
                                    <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
                                        VISIT OUR WEBSITE
                                    </span>
                                    <span className="btn2 absolute tranistion-all opacity-0 top-[50px] left-0 w-full h-full flex justify-center items-center text-white">
                                        VISIT OUR WEBSITE
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='w-1/2 flex justify-center relative'>
                            <img src={small} className='w-[138px] absolute left-48 top-10 -z-10 hexagon' />
                            <img src={hexagonDetails[active].image} className='zoom-out' />
                            <img src={big} className='w-[478px] h-[470px] absolute right-11 bottom-0 -z-10 hexagon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
