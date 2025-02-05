// ---------------------------------------------------------------- All Imports ----------------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import addressImage from '../assets/footer/address.svg';
import dotImage from '../assets/footer/dot.svg';
import emailImage from '../assets/footer/email.svg';
import phoneImage from '../assets/footer/phone.svg';
import sendImage from '../assets/footer/tabler_send.svg';

// ---------------------------------------------------------------- All Imports ----------------------------------------------------------------

const Footer = () => {

    return (
      <>
        <div className='mt-72'>
          {/* ------------------------------------------- Section-1 includes hr address email phone and hr  ------------------------------------------- */}
          <div className="flex flex-col xs:flex-row md:flex-row justify-center items-center relative md:py-12 lg:py-16">
            <div className="w-[90%] md:w-[80%] h-full absolute left-[5%] md:left-[10%] div-2-mini z-10"></div>
            <div className="div-1 w-full md:w-[10%]  xs:w-1/5 flex mb-4 md:mb-0">
              <hr className="border-0 h-[3px] md:h-[5px] bg-gradient-to-r from-sky-400 to-cyan-300 my-2 md:my-4 w-11/12  mx-auto md:mx-0 rounded-r" />
            </div>
            <div className="relative z-1 w-[90%] sm:w-full md:w-4/5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-300 to-teal-300 p-[3px] md:p-[5px]">
              <div className="bg-black w-full h-full rounded-xl flex flex-col md:flex-row items-center md:items-start justify-center px-4 md:px-10 py-6 md:py-8 text-white gap-6 md:gap-8 lg:gap-16">
                <div className="flex items-center gap-4 md:gap-6 lg:gap-8 w-full md:w-[40%]">
                  <img
                    src={addressImage}
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt="Address"
                  />
                  <div className="address-text flex flex-col gap-1 md:gap-2">
                    <h5 className="text-lg md:text-xl lg:text-2xl font-faustina font-semibold uppercase">
                      Address
                    </h5>
                    <p className="text-sm md:text-base lg:text-xl font-medium font-faustina">
                      200 MIDDLESEX ESSEX TPK., SUITE 110, ISELIN, NJ, 08830
                    </p>
                  </div>
                </div>
                <div className="email flex items-center gap-4 md:gap-6 lg:gap-8 w-full md:w-[30%]">
                  <img
                    src={emailImage}
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt="Email"
                  />
                  <div className="email-text flex flex-col gap-1 md:gap-2">
                    <h5 className="text-lg md:text-xl lg:text-2xl font-faustina font-semibold uppercase">
                      Email
                    </h5>
                    <p className="text-sm md:text-base lg:text-xl font-medium font-faustina">
                      info@pcsionweb.com hr@pcsionweb.com
                    </p>
                  </div>
                </div>
                <div className="phone flex items-center gap-4 md:gap-6 lg:gap-8 w-full md:w-[30%]">
                  <img
                    src={phoneImage}
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt="Phone"
                  />
                  <div className="phone-text flex flex-col gap-1 md:gap-2">
                    <h5 className="text-lg md:text-xl lg:text-2xl font-semibold font-faustina uppercase">
                      Phone
                    </h5>
                    <p className="text-sm md:text-base lg:text-xl font-medium font-faustina">
                      +1 732 404 0466
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[10%] xs:w-1/5 mt-4 md:mt-0">
              <hr className="border-0 h-[3px] md:h-[5px]   bg-gradient-to-r from-teal-300 to-teal-200 my-2 md:my-4 w-11/12 mx-auto md:ml-auto rounded-l" />
            </div>
          </div>

          {/* ------------------------------------------- Section-2 includes about us, reference, subscribe ---------------------------------------------------------- */}

          <div className="font-faustina text-white px-4 sm:px-8 md:px-24 mt-16">
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-start py-[100px] gap-16 md:gap-0">
              <div className="about-us w-full md:w-1/3 ">
                <div className="about-us-text">
                  <p className="text-2xl font-semibold ">
                    About Us
                    <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                  </p>
                  <div className="about-us-content flex flex-col text-lg leading-[30px] gap-4 w-full md:w-[70%] mt-4">
                    <p>
                      "At the end of the day, care is a human activity.
                      Technology is not there to replace caregivers; it is there
                      to support them."
                    </p>
                    <p>
                      With a similar vision, Param Group was developed by Mr.
                      Vipul Amin
                    </p>
                    <p className="bg-gradient-to-r from-[#1FA2FF] from-[0%] to-[#A6FFCB] to-[10%] text-transparent bg-clip-text">
                      Read More
                    </p>
                  </div>
                </div>
              </div>
              <div className="reference col w-full md:w-1/3">
                <p className="text-2xl font-semibold">
                  Reference Link
                  <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                </p>
                <div className="reference-content flex col-span-3 mt-4">
                  <div className="left text-lg flex flex-col  gap-5 leading-9 w-1/2 ">
                    <p>Our Services</p>
                    <p>Our Clients</p>
                    <p>Career</p>
                    <p>Legal Notice</p>
                  </div>
                  <div className="right leading-9 flex flex-col gap-5 w-1/2 text-lg">
                    <p>
                      <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                  </div>
                </div>
              </div>
              <div className="subscribe w-full md:w-1/3 flex flex-col gap-8">
                <p className="text-2xl font-semibold">
                  Subscribe
                  <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                </p>
                <p className="text-lg">
                  Subscribe to our newsletter to get our latest updates
                </p>
                <div className="email-input flex flex-row text-base">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    className="pl-3 text-[#495057] w-full focus:outline-none focus:ring-0  rounded-s"
                  />
                  <div className="bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB] h-full w-[56px] flex justify-center items-center px-4 py-2 relative rounded-e">
                    <img src={sendImage} className="w-6 h-6 relative" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------- Last part Grey footer --------------------------------------------------- */}

          <div className="font-poppins bg-[#3E3E3E] text-white  flex flex-col md:flex-row justify-between items-center h-full px-4 sm:px-8 md:px-24 py-3">
            <p className="text-xs">
              Copyright © 2024 Param Group of Companies. All Rights Reserved.
            </p>
            <div className="right w-full md:w-96 underline flex justify-center items-center gap-4 text-xs mt-2 md:mt-0">
              <a href="http://www.freepik.com/">
                Images by storyset on Freepik
              </a>
              <img src={dotImage} alt="" className="w-2 h-2" />
              <a href="https://unsplash.com/">Images by unslpash</a>
            </div>
          </div>
        </div>
      </>
    );
}

export default Footer
