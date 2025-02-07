import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const Careers = () => {

    // For Content Div animation
    useEffect(() => {
        gsap.utils.toArray('.content-box').forEach((box) => {
            gsap.fromTo(
                box,
                {
                    x: -3000, // Starting position: 200px off-screen to the left
                    opacity: 0, // Starting opacity
                },
                {
                    x: 0, // End position: original position
                    opacity: 1, // Fully visible
                    duration: 1.7, // Animation duration
                    ease: 'power4.inout', // Smooth easing
                    scrollTrigger: {
                        trigger: box, // Each box triggers its own animation
                        start: 'top 80%', // Animation starts when the box enters the viewport
                        toggleActions: 'play none none none', // Play animation only once
                    },
                }
            );
        });


        // Second set of animations for '.cylinder'
        gsap.utils.toArray('.cylinder').forEach((box) => {
            gsap.fromTo(
                box,
                {
                    x: -1000, // Starting position: 200px off-screen to the top
                    opacity: 0, // Starting opacity
                },
                {
                    x: 0, // End position: original position
                    opacity: 1, // Fully visible
                    duration: 1.5, // Animation duration
                    ease: 'power.inOut', // Smooth easing
                    scrollTrigger: {
                        trigger: box, // Each cylinder triggers its own animation
                        start: 'top 80%', // Animation starts when the cylinder enters the viewport
                        toggleActions: 'play none none none', // Play animation only once
                    },
                }
            );
        });




        // Button Hover
        gsap.utils.toArray('.career-button').forEach((button) => {
            const text1 = button.querySelector('.button-text-1'); // First text
            const text2 = button.querySelector('.button-text-2'); // Second text

            // Initially, make the second text invisible and positioned below
            gsap.set(text2, { y: '-20px', opacity: 0 });

            // Hover in animation (move the first text up and second text down into place)
            button.addEventListener('mouseenter', () => {
                gsap.to(text1, {
                    y: '-20px', // Move the first text up
                    opacity: 0, // Fade out the first text
                    duration: 1,
                    ease: 'power4.out'
                });
                gsap.to(text2, {
                    y: '0px', // Move the second text into place
                    opacity: 1, // Fade in the second text
                    duration: 1,
                    ease: 'power4.out'
                });
            });

            // Hover out animation (move the first text back down and second text up)
            button.addEventListener('mouseleave', () => {
                gsap.to(text1, {
                    y: '0px', // Reset the position of the first text
                    opacity: 1, // Fade in the first text
                    duration: 1,
                    ease: 'power4.in'
                });
                gsap.to(text2, {
                    y: '20px', // Move the second text back down
                    opacity: 0, // Fade out the second text
                    duration: 1,
                    ease: 'power4.in'
                });
            });
        });







    },
        []);


    // const handleMouseEnter = (e) => {
    //     const button = e.currentTarget;
    //     const visibleSpan = button.querySelector('.button-text-visible');
    //     const hiddenSpan = button.querySelector('.button-text-hidden');

    //     gsap.to(visibleSpan, {
    //         duration: 1,
    //         y: -100,
    //         ease: 'power2.inOut',
    //     });
    //     gsap.to(hiddenSpan, {
    //         duration: 1,
    //         y: -50,
    //         ease: 'power2.inOut',
    //         opacity: 1,
    //     });
    // };

    // const handleMouseLeave = (e) => {
    //     const button = e.currentTarget;
    //     const visibleSpan = button.querySelector('.button-text-visible');
    //     const hiddenSpan = button.querySelector('.button-text-hidden');

    //     gsap.to(visibleSpan, {
    //         duration: 1,
    //         y: 0,
    //         ease: 'power2.inOut',
    //     });
    //     gsap.to(hiddenSpan, {
    //         duration: 1,
    //         y: 0,
    //         ease: 'power2.inOut',
    //         opacity: 0,
    //     });
    // };

    return (
      <div className="h-full w-full flex  justify-center items-center relative z-50">
        <div className="w-[90%] flex flex-col justify-center items-center">
          {/* Background image of Career */}
          {/* <div className="bg-careers-bg h-[440px] w-full  bg-center bg-cover object-cover opacity-95 rounded-[110px] flex flex-col justify-center items-center mt-20  font-faustina text-white gap-4 relative mb-[60px]">
            <div className=" absolute inset-0 bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  opacity-15 rounded-[110px]"></div>
            <div className="z-50 flex  flex-col justify-center items-center">
              <p className="font-bold text-6xl leading-20">Come Work With Us</p>
              <p className="font-medium text-3xl leading-10">
                {" "}
                "You Are Standing At The Door Of Opportunities, Explore Your
                Professional Journey With Us"
              </p>
            </div>
          </div> */}
          <div className="font-faustina h-auto  mb-10  xs:h-[200px] lg:h-[440px] md:h-[313px] sm:h-[313px]  w-full mt-[60px] bg-careers-bg xs:rounded-[62px] rounded-[110px] text-white flex flex-col justify-center items-center relative bg-cover bg-center bg-no-repeat">
            <div className="bg-inner absolute inset-0 bg-gradient-to-r from-[#1FA2FF] from-[0%] via-25% to-[#A6FFCB] to-[70%] opacity-20 rounded-[110px] xs:rounded-[62px]"></div>
            <p className="font-bold text-4xl lg:text-[64px] xs:text-2xl mb-9">
              Come Work With Us
            </p>
            <p className="font-medium text-xl lg:text-[32px] xs:text-[18px] text-center">
              "You Are Standing At The Door Of Opportunities, Explore Your
              Professional Journey With Us"
            </p>
          </div>

          {/* Career Box Main div */}
          <div className="flex flex-col gap-[60px] justify-center items-center w-[100%]">
            {/* IT Consulting */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="text-white">
                      <h2 className="font-faustina font-bold leading-[50.4px] text-[40px]">
                        IT Consulting
                      </h2>
                    </div>
                    <div className=" text-white text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Occupy your resource and unlock new paradigms with our
                        IT solutions."
                      </p>
                      <p className="font-poppins font-base pt-3">
                        Param Consulting Services Inc., founded in 2001,
                        delivers cost-effective IT solutions and staffing
                        services, meeting diverse client needs with advanced
                        technology and expertise.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Param Healthcare Services */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="  text-white">
                      <h2 className="font-faustina font-bold leading[50.4px] text-[40px]">
                        Param Healthcare Services
                      </h2>
                    </div>
                    <div className=" text-white mt-1 text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Committed to taking care of your every medical need. We
                        offer a diverse wellness portfolio of services to
                        relieve your worries."
                      </p>
                      <p className="font-poppins font-base pt-3">
                        Param Healthcare Services simplifies the journey to
                        quality medical care by offering all essential services
                        in one place. From adult daycare to medical billing and
                        home healthcare, we’ve got you covered, making
                        healthcare convenient and accessible.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Param Institute Of Education */}
            <div className="flex justify-start h-full w-full content-box">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="text-white">
                      <h2 className="font-faustina font-bold leading[50.4px] text-[40px]">
                        Param Institute Of Education
                      </h2>
                    </div>
                    <div className=" text-white text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Get trained with us and your fineness will attract
                        opportunities for life."
                      </p>
                      <p className="font-poppins font-base pt-3">
                        Param Institute of Education, founded in 2009, offers
                        quality medical training with a promise of employment.
                        With over two decades of experience, it empowers
                        students to excel in healthcare careers.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Param Adult Day Care */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="  text-white">
                      <h2 className="font-faustina font-bold leading[50.4px] text-[40px]">
                        Param Adult Day Care
                      </h2>
                    </div>
                    <div className=" text-white text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "A home away from home/ Parents are not the burden,
                        burden is the care and attention that follow. Make your
                        parents happy by giving the best services and care."
                      </p>
                      <p className="font-poppins font-base pt-3">
                        Param Adult Day Care, a not-for-profit organization,
                        provides senior citizens with a safe, friendly, and
                        engaging environment to enjoy their golden years. With
                        experienced staff and comprehensive healthcare and
                        social activities, we offer families peace of mind while
                        caring for their loved ones.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Param Wellness */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="  text-white">
                      <h2 className="font-faustina font-bold leading[50.4px] text-[40px]">
                        Param Wellness
                      </h2>
                    </div>
                    <div className=" text-white text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Find your inner peace and discover the holistic ways of
                        wellness"
                      </p>
                      <p className="font-poppins font-base pt-3">
                        Param Wellness, a US-based organization, blends Ayurveda
                        and natural healing to rejuvenate mind, body, and
                        spirit. Offering therapies like acupuncture, yoga, and
                        homeopathy, we promote holistic health through
                        integrative and time-tested approaches.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Param Care Foundation */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>

              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="  text-white">
                      <h2 className="font-faustina font-bold leading[50.4px] text-[40px]">
                        Param Care Foundation
                      </h2>
                    </div>
                    <div className=" text-white text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Join us in our mission to spread awareness, motivate
                        people and transform lives"
                      </p>
                      <p className="font-poppins font-base pt-3">
                        ParamCARE Foundation, based in New Jersey, promotes
                        healthy living through seminars, yoga, and screenings.
                        The foundation educates the community on lifestyle
                        choices to help improve health and manage chronic
                        illnesses..
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research & Development */}
            <div className="flex justify-start h-full w-full">
              <div className="bg-gradient-to-r from-[#A6FFCB] via-[#12D8FA] to-[#1FA2FF] rounded-[11px]  w-7 cylinder"></div>
              <div className="bg-gradient-to-r from-[#1FA2FF]  via-[#12D8FA]   to-[#A6FFCB]  p-1 rounded-[20px] -ml-2 my-2 w-full h-[80%] content-box">
                <div className="bg-black rounded-[15px] ">
                  <div className="flex flex-col py-8 px-10 gap-8">
                    <div className="text-white">
                      <h2 className="font-faustina font-bold leading-[50.4px] text-[40px]">
                        Research & Development
                      </h2>
                    </div>
                    <div className=" text-white  text-xl/[30px]">
                      <p className="font-poppins font-semibold ">
                        "Each day we get one step closer to finding solutions to
                        improve your health and lifestyle"
                      </p>
                      <p className="font-poppins font-base pt-3">
                        {" "}
                        Research & Development focuses on developing natural
                        treatments for chronic diseases through innovative drug
                        testing. With a dedicated team, we integrate science and
                        wellness to improve healthcare solutions for conditions
                        like Alzheimer's and diabetes.
                      </p>
                    </div>
                    {/* Button */}
                    <div class="bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-[67px] w-[161px] p-[2px] rounded-[14px] ">
                      <button class="form-input button-style diagonal mb-0 mt-0 ">
                        <span class="old-text">VISIT CAREER</span>
                        <span class="new-text">VISIT CAREER</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Careers
