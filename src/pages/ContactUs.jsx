import gsap from "gsap";
import React, { useEffect,useState } from "react";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { div } from "framer-motion/client";


const ContactUs = () => {
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

    useEffect(() => {
        gsap.fromTo(
            ".paragraph",
            {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".paragraph",
                    start: "top 50%",
                },
            }
        );
    });

  
  
  const [formData, setFormData] = useState({
    fullName: '',
    emailId: '',
    country: '',
    phoneNo: '',
    message: '',
  });
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:4000/api/contact/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await res.json();
    setResponseMsg(result.message);

    setFormData({
      fullName: "",
      emailId: "",
      country: "",
      phoneNo: "",
      message: "",
    });

    toast.success("Message Sent Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } catch (error) {
    toast.error("Error sending your message!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};


    return (
      // ----------main-div-----------
      <div>
        <div className="w-full flex flex-col   gap-[10px] mt-20  -z-50 ">
          {/* ---------------div-1--------------- */}
          <div className="w-full px-4 lg:px-10 flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex justify-center lg:justify-start w-full">
              <p className="line-1 xs:text-[35px] 2xl:text-[72.96px] lg:text-[55.96px] xl:text-[60.96px] font-faustina font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text tracking-widest text-center">
                Connect With Us
              </p>
            </div>

            {/* --------text-2--------- */}
            <div className="flex justify-center  w-full xs:text-[24px] sm:text-[48px] text-border font-faustina font-medium  2xl:text-[69.51px] xl:text-[59.51px] lg:text-[39.51px] opacity-40 text-[#00000080]">
              "Let's Start A Project Together"
            </div>
          </div>

          {/* -----------------------div-2----------------- */}
          <div className="relative flex w-full h-full justify-center items-center">
            <div className="hidden md:flex gradient-box absolute md:h-[37%] xl:h-[28%]   lg:top-[33%] md:top-[33%] xl:top-[36%] w-full bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-sky-300 z-[-1]"></div>
            {/* --------3-container-div---------- */}

            <div className="grid lg:grid-cols-2 md:grid-cols-2  xs:grid-cols-1 xl:grid-cols-3 sm:grid-cols-1 w-[90%] h-full gap-[60px] ">
              <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-auto rounded-[25px] gap-8 p-1 self-stretch lg:mx-auto  md:mx-auto">
                <div className="flex flex-col bg-black rounded-[25px] h-full w-full gap-8 px-[25px] py-[32px]">
                  <p className="font-faustina font-semibold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  xs:text-[18px]  sm:text-[22px] lg:text-[32px]">
                    Param Group of Companies Headquarter - USA
                  </p>
                  <div className="flex flex-col gap-8 text-white">
                    <div className="flex gap-8 items-center ">
                      <img
                        src={logo1}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +1 732 404 0466
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo2}
                        alt="img"
                        className="object-contain  xs:w-5  sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +1 732 404 0422
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo3}
                        alt="img"
                        className="object-contain  xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        info@pcsionweb.com
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo4}
                        alt="img"
                        className="object-contain  xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        200 Middlesex Essex TPK., Suite 110
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-auto rounded-[25px] gap-8 p-1 self-stretch xl:mx-auto lg:mx-auto  md:mx-auto">
                <div className="flex flex-col bg-black rounded-[25px] h-full w-full gap-8 px-[25px] py-[32px]">
                  <p className="font-faustina font-semibold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  xs:text-[18px]  sm:text-[22px] lg:text-[32px] ">
                    Param Group of Companies - INDIA
                  </p>
                  <div className="flex flex-col gap-8 text-white">
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo1}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +91 265 2466950
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo2}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +91 265 2466950
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo3}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        info@pcsionweb.com
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo4}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        709 - 710 Everest Onyx, Opp Inox Multiplex, Race Course
                        Rd, Vadodara - 3900 007
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] h-auto rounded-[25px] gap-8 p-1 self-stretch md:col-span-2 lg:col-span-2 xl:col-span-1  lg:mx-auto  md:mx-auto">
                <div className="flex flex-col bg-black rounded-[25px] h-full w-full gap-8 px-[25px] py-[32px]">
                  <p className="font-faustina font-semibold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text  xs:text-[18px]  sm:text-[22px] lg:text-[32px]">
                    Param Group of Companies - CANADA
                  </p>
                  <div className="flex flex-col gap-8 text-white">
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo1}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +1 647 833 7205
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo2}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        +1 905 604 0647
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo3}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        info@pcsionweb.com
                      </p>
                    </div>
                    <div className="flex gap-8 items-center">
                      <img
                        src={logo4}
                        alt="img"
                        className="object-contain xs:w-5 sm:w-6 md:w-8"
                      />
                      <p className="font-faustina text-[24px] xs:text-[16px] sm:text-[20px] font-normal">
                        84 Redkey DR., Markham, Ontario Canada, L3S 4R6
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ----------------container-div-close--------------------- */}
            </div>
          </div>

          {/* -----------------div-3------------------------- */}
          <div className="flex flex-col  h-full w-full justify-center items-center gap-[42px]">
            <div className="flex justify-center items-center">
              <p className="paragraph flex  items-center font-faustina font-semibold bg-gradient-to-r from-[#1FA2FF] from-0% via-[#12D8FA] via-50% to-[#A6FFCB]  to-80% text-transparent bg-clip-text lg:text-[60px] xs:text-[40px] sm:text-[24px] md:tetx-[28px] xl:text-[34px]">
                Send Us a Message
              </p>
            </div>

            {/* ---------form & map---------- */}
            <div className="flex w-[90%] xs:flex-col-reverse md:flex-row  md:w-[90%]   xs:w-full  md:gap-[30px] gap-[165px] justify-center items-center">
              {/* -------info----------- */}
              <form
                onSubmit={handleSubmit}
                className="md:w-[50%] xs:w-[90%]  flex flex-col  gap-6"
              >
                <div className=" flex flex-col gap-6 ">
                  <div className="flex bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  w-full h-auto rounded-[5px] p-0.5 self-stretch">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-black w-full rounded-[5px] font-poppins text-[14px] font-normal text-[#CAC4C4] pl-[16px] py-[9px] self-stretch"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="flex bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  w-full h-auto rounded-[5px] p-0.5 self-stretch">
                    <input
                      name="emailId"
                      type="text"
                      className="bg-black w-full rounded-[5px] font-poppins text-[14px] font-normal text-[#CAC4C4] pl-[16px] py-[9px]"
                      placeholder="Email ID"
                      value={formData.emailId}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex lg:flex-row xs:flex-col gap-[20px]">
                    <div className="flex bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] w-[100%] h-auto rounded-[5px] p-0.5 self-stretch">
                      <select
                        name="country"
                        id="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-[100%] bg-black rounded-[5px] font-poppins text-[14px] font-normal text-[#CAC4C4] pl-[16px] py-[9px]"
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="US">US</option>
                      </select>
                    </div>
                    <div className="flex bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  w-full h-auto rounded-[5px] p-0.5 self-stretch">
                      <input
                        type="text"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="bg-black w-full rounded-[5px] font-poppins text-[14px] font-normal text-[#CAC4C4] pl-[16px] py-[9px]"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="flex bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]  w-full h-auto rounded-[5px] p-0.5 self-stretch">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-black w-full h-[110px] rounded-[5px] font-poppins text-[14px] font-normal text-[#CAC4C4] pl-[16px] py-[9px] self-stretch"
                      placeholder="Your Message"
                    >
                      {/* Your Message */}
                    </textarea>
                  </div>
                  <div className="flex justify-center items-center w-[155px] h-[62px] bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] rounded-[14px] bg-transparent p-0.5">
                    <button
                      className="button-main bg-black w-full h-full rounded-[14px]  font-poppins font-medium text-[20px] diagonal text-xl text-center relative py-[16px] px-[52px]"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="btn1 absolute transition-all top-0 left-0 w-full h-full flex justify-center items-center text-white">
                        SEND
                      </span>
                      <span className="btn2 absolute tranistion-all opacity-0 top-[50px] left-0 w-full h-full flex justify-center items-center text-white">
                        SEND
                      </span>
                    </button>
                  </div>
                </div>
              </form>

              {/* ----------map---------- */}
              <div className="flex md:w-[50%] xs:w-[90%] rounded-[15px]">
                {/* <img src={map} a alt="img"lt="location" /> */}
                <div className="rounded-[15px] h-full w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29528.443383203376!2d73.12096057431638!3d22.313743600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49fb8a803f41fa9%3A0xa349bba25c4ea4dc!2sParam%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1735039444947!5m2!1sen!2sin"
                    // style={{ width: "620px", height: "620px", borderRadius:'50px' }}
                    className="w-full h-[600PX] rounded-[20px] "
                    allowfullscreen=""
                    loading="lazy"
                    title="iframe"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* -----------form & map-close------------- */}
            </div>

            {/* ---------div-3-close------------------  */}
          </div>

          {/* -------main-div-close-----------   */}
        </div>
          <ToastContainer />
      </div>
    );
};

export default ContactUs;
