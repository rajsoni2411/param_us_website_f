import gsap from "gsap";
import React, { useEffect, useState } from "react";
import big from "../assets/images/bigpolygon.png";
import padc from "../assets/images/padc.png";
import pcf from "../assets/images/pcf.png";
import pcsi from "../assets/images/pcsi.png";
import phis from "../assets/images/phis.png";
import pie from "../assets/images/pie.png";
import rnd from "../assets/images/rnd.png";
import small from "../assets/images/smallpolygon.svg";
import wellness from "../assets/images/wellness.png";

const hexagonDetails = [
  
  {
    title: "IT Consulting",
    mainTitle: "Param Consulting Services",
    highlight:
      "Occupy your resource and unlock new paradigms with our IT solutions.",
    p1: "Founded in 2001, Param Consulting Services Inc. aims to solve all IT-related requirements of clients. Be it application development, training, or project management; PCSI is one roof that covers it all. Param Consulting offers cost-effective and value-driven IT solutions to clients looking forward to inducing technology in regular business activities. With the state of the art technology, the company guarantees a comprehensive solution to all your managerial needs.",
    p2: "At PCSI, we believe that employees are key resources for any organization. Nowadays, finding the right candidate for the job has become extremely critical. Therefore, we offer effective staff augmentation services to meet your qualified personnel needs. We are equipped with resources that help us creatively segregate the cream candidates and present them to you. Maintaining cost-effectiveness for clients has been one of the most prominent features of the business model throughout our journey. Need help in IT staffing? You know where to find us!",
    url: "",
    image: pcsi,
  },
  {
    title: "Healthcare",
    mainTitle: "Param Healthcare Services",
    highlight:
      "Committed to taking care of your every medical need. We offer a diverse wellness portfolio of services to relieve your worries.",
    p1: "All of us have dealt with the hustle of getting proper medical care in life for ourselves or our loved ones. Well, not anymore, Param Healthcare Services is one of the fastest-growing healthcare companies offering all medical services in one place. Adult day care, medical billing, home healthcare—you name it, we have covered it all.",
    url: "",
    image: phis,
  },
  {
    title: "Education",
    mainTitle: "Param Institute Of Education",
    highlight:
      "Get trained with us and your fineness will attract opportunities for life.",
    p1: "Param Institute of Education is a medical training and education service provider present in the industry for more than two decades. The company aims to become the torchbearer for all the students pursuing their careers in healthcare services. With this imagination, the founders established Param Institute of Education in 2009 to offer uncompromising education along with a promise of a job.",
    url: "",
    image: pie,
  },
  {
    title: "Adult Day Care",
    mainTitle: "Param Adult Day Care",
    highlight:
      "A home away from home/ Parents are not the burden, burden is the care and attention that follow. Make your parents happy by giving the best services and care.",
    p1: "Param Adult Day Care is a Not-for-profit organization helping senior citizens a comfortable road in their second innings of life. The foundation of the company is to build a healthier community by offering a safe, friendly, and fun environment to the aging population. Family caregivers trust us because we offer a homely environment and the best healthcare services in the area.",
    p2: "Aging and getting old is a phase of life that should not be burdensome for anyone. We at Param Adult Day Care are here to help you shed your burden on responsible shoulders. We present you with a positive and friendly atmosphere to support you in taking care of your parents. Our Day Care is equipped with all the healthcare, social, and fun activities to engage an aged mind and make them feel at home. Our staff is experienced and well trained in treating aged individuals and managing their day-to-day struggles. Let us take care of your loved ones here so that you can take care of them from afar.",
    url: "",
    image: padc,
  },
  {
    title: "Wellness",
    mainTitle: "Ayurveda & Nature Cure Center",
    highlight:
      "Find your inner peace and discover the holistic ways of wellness",
    p1: "Param Wellness is a blend of healthcare and wellness service provider using Ayurveda and Natural body healing. This US-based organization focuses on refreshing, restoring, and rejuvenating the mind, body, and spirit naturally with the action. The company’s motto is to improve the quality of life of individuals using complementary healing approaches along with conventional treatments.",
    p2: "Your health is your asset—it is the most important part you need in life. In today’s lifestyle, people have forgotten the essence of healthy living. Param Wellness is a committed organization offering authentic and realistic wellness and healthcare services to people. We use all-natural methods like Acupuncture, Homeopathy, Reiki, Yoga, etc. as a part of Integrative Healthcare Therapy. At Param Wellness, our mission is to help you heal internally as well as externally with our unconventional approaches. We use time-tested herbs that have been used for centuries in medical practices to provide a whole body healing experience.",
    url: "",
    image: wellness,
  },
  {
    title: "Care Foundation",
    mainTitle: "Param Care Foundation",
    highlight:
      "Join us in our mission to spread awareness, motivate people and transform lives",
    p1: "Param CARE Foundation, a charitable organization founded in New Jersey to actively improve healthy living in the community. The foundation envisions making society aware of the everyday decisions that make them one step closer to their healthcare goal. The association conducts seminars, yoga sessions, and healthcare screenings to connect with the community and motivate them to improve their lifestyle.",
    p2: "With the changing environment, our lifestyle and habits are also changing rapidly. This change is making our bodies age before their time. We, at Param CARE, are working towards a social cause to make significant changes in your lifestyle for good. Our motto is to collaborate actions to reach and educate the society about harmful effects of their lifestyle. Our committed partners help us in organizing yoga sessions, seminars, and other events to generate social awareness and help others suffering from chronic illness. Having a healthy body has become a privilege these days; Param CARE is committed to changing and making everyone achieve their healthcare goals.",
    url: "",
    image: pcf,
  },
  {
    title: "R & D",
    mainTitle: "Param Healthcare & Research Services",
    highlight:
      "Each day we get one step closer to finding solutions to improve your health and lifestyle",
    p1: "With Science on one hand and healthcare on the other, Param Bhakti Healthcare and Research is a research organization dealing in novel drug testing and development. The organization’s vision is to find natural medicinal treatments for people to cure their chronic lifestyle diseases. Inspired by B. B. Thakar, the association aims to use innovation in offering healthy growth in life.",
    p2: "Param Group of Companies always believes that science is worth exploring. At Param Bhakti Healthcare and Research we believe in exploring, innovating, and inventing new products along with strategies that can help healthcare professionals effectively deal with the disease. Our dedicated research team uses integrated approaches to solve current healthcare problems like Alzheimer’s, Diabetes, etc. Our company focuses on finding extraordinary ways to assist patients in their healthcare. We induce innovation and technology with wellness to help get a better health experience.",
    url: "",
    image: rnd,
  },
];

const OurServices = () => {
  const [active, setActive] = useState(0);

  // Animate the background container on mount
  useEffect(() => {
    gsap.fromTo(
      ".bg-container",
      { opacity: 0, x: 200, y: 200 },
      { x: 0, y: 0, opacity: 1, duration: 3, ease: "power2.out" }
    );
  }, []);

  // Animate hexagon elements and the center image on active change
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

  // Button hover animations
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

  return (
    <div className="our-clients bg-container w-full flex justify-center overflow-hidden  -z-50">
      <div className="lg:w-[calc(100%_-_90px)] xs:w-[calc(100%_-_30px)]">
        <div className="font-faustina h-auto  xs:h-[200px] lg:h-[440px] md:h-[313px] sm:h-[313px]  w-full mt-[60px] bg-service-bg  xs:rounded-[84px] rounded-[110px] text-white flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat sm:gap-10">
          <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#1FA2FF] from-[0%] via-25% to-[#A6FFCB] to-[70%] opacity-20 md:rounded-[79px]    xs:rounded-[83px] "></div>
          <p className="font-bold text-4xl  md:text-4xl lg:text-7xl  sm:text-4xl xs:text-2xl mb-9">
            Our Core Services
          </p>
          <p className="font-medium text-xl md:text-2xl  lg:text-3xl xs:px-10 sm:px-0  xs:text-[14px] text-center">
            "Explore the world of technology with us. Come find your hidden
            competencies by kick-starting your business with new insights"
          </p>
        </div>
        <div className="w- mt-24  overflow-x-auto gray-100">
          <div className="p-8 overflow-x-auto flex xs:justify-start Txl:justify-center no-scrollbar">
            {hexagonDetails.map((hex, index) => (
              <div
                key={index}
                className="flex w-64 justify-center items-center relative cursor-pointer mx-0"
                onClick={() => handleHexagonClick(index)}
              >
                <div
                  className={`hex hex-parent group w-64 px-2 py-1 bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] via-[90%] to-[#1FA2FF] to-[180%]`}
                >
                  <div
                    className={`hex bg-black ${
                      active === index
                        ? "bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] via-[90%] to-[#1FA2FF] to-[180%]"
                        : "bg-black"
                    } w-full h-full flex justify-center items-center relative`}
                  >
                    <p
                      className={`text-center font-faustina text-2xl font-bold p-6 whitespace-nowrap px-10 ${
                        active === index ? "text-black" : "text-white"
                      }`}
                    >
                      {hex.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-24 flex flex-col items-center gap-3   justify-center">
          <p className="uppercase text-2xl font-bold font-faustina text-white">
            {hexagonDetails[active].title}
          </p>
          <p className="font-faustina font-semibold text-head-gradient md:text-[56px] xs:text-[25px]  xs:text-center">
            {hexagonDetails[active].mainTitle}
          </p>
          <p className="md:text-xl xs:text-[16px] font-faustina text-center text-white">
            {hexagonDetails[active].highlight}
          </p>

          <div className="mt-24 flex flex-col lg:flex-row items-center justify-center lg:gap-28 xs:flex-col-reverse w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-8 w-1/2 xs:w-full">
              {hexagonDetails[active]?.p1 && (
                <p className="mt-10 font-poppins md:text-xl xs:text-sm tracking-[1px] font-normal text-white">
                  {hexagonDetails[active].p1}
                </p>
              )}
              {hexagonDetails[active]?.p2 && (
                <p className=" font-poppins md:text-xl xs:text-sm tracking-[1px] text-white">
                  {hexagonDetails[active].p2}
                </p>
              )}
              <p className="md:mt-10  font-poppins md:text-2xl xs:text-sm tracking-[1px] text-white">
                For More Information
              </p>
              <div className="flex justify-center items-center md:w-[220px] md:h-[62px] xs:w-[150px]  xs:h-[50px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                <button
                  className="button-main bg-black uppercase w-full h-full rounded-[14px] font-poppins font-medium  xs:text-[12px] md:text-[18px] diagonal text-xl text-center relative py-[16px] sm:py-[14px] px-[52px] sm:px-[45px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
                    VISIT OUR WEBSITE
                  </span>
                  <span className="btn2  absolute tranistion-all opacity-0 top-[50px] left-0 w-full h-full flex justify-center items-center text-white">
                    VISIT OUR WEBSITE
                  </span>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex items-center justify-center md:w-1/2 xs:w-[80%] lg:mr-16">
              {/* Small Hexagon */}
              <img
                src={small}
                alt="small hexagon"
                className="absolute -z-10 hexagon 
                  xl:left-[2%] lg:left-[9%] md:left-[7%] sm:left-[2%] xs:left-[7%]
                  xl:w-[30%] lg:w-[28%] md:w-[22%] sm:w-[42%] xs:w-[31%]
                  xl:top-[8%] 2xl:top-[12%] lg:top-[7%] md:top-[11%] sm:top-[7%] xs:top-[5%]"
              />

              {/* Main Center Hexagon */}
              <img
                src={hexagonDetails[active].image}
                alt="center hexagon"
                className="zoom-out w-full flex items-center justify-center"
              />

              {/* Big Hexagon */}
              <img
                src={big}
                alt="big hexagon"
                className="absolute -z-10 hexagon 
                  xl:left-[23%] lg:left-[41%] md:left-[45%] sm:left-[32%] xs:left-[28%]
                  xl:bottom-[3%] lg:bottom-[3%] md:bottom-[6%] sm:bottom-[2.5%] xs:bottom-[2%]
                  xl:w-[82%] xl:h-[78%] lg:w-[66%] lg:h-[75%] md:w-[64%] md:h-[65%] sm:w-[75%] sm:h-[77%] xs:w-[81%] xs:h-[83%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
