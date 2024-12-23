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

                <div className="h-48 flex justify-center items-center relative">
                    <div className='w-[80%] h-[90%] absolute top-[10px] left-[10%] div-2-mini z-10'></div>
                    <div className="div-1 w-1/5">
                        <hr className="border-0 h-[5px] bg-gradient-to-r from-sky-400 to-cyan-300 my-4 w-11/12 rounded-r" />
                    </div>
                    <div className="relative z-1 w-3/5 h-[100%] rounded-xl bg-gradient-to-r from-sky-500 via-cyan-300 to-teal-300 p-[5px]">
                        <div className="bg-black w-full h-full rounded-xl flex items-start justify-center px-10  text-white gap-16 ">
                            <div className="flex items-center gap-8 w-[40%] h-[100%]">
                                <img src={addressImage} className='w-8 h-8' alt="" />
                                <div className="address-text flex flex-col gap-2">
                                    <h5 className="text-2xl font-faustina font-semibold uppercase ">Address</h5>
                                    <p className="text-xl font-medium font-faustina">200 MIDDLESEX ESSEX TPK.,SUITE
                                        110, ISELIN, NJ, 08830</p>
                                </div>
                            </div>
                            <div className="email flex items-center gap-8 w-[30%] h-[100%]">
                                <img src={emailImage} className='w-8 h-8' alt="" />
                                <div className="email-text flex flex-col gap-2">
                                    <h5 className="text-2xl font-faustina  font-semibold uppercase">Email</h5>
                                    <p className="text-xl font-medium font-faustina">info@pcsionweb.com
                                        hr@pcsionweb.com</p>
                                </div>
                            </div>
                            <div className="phone flex items-center gap-8 w-[30%] h-[100%]">
                                <img src={phoneImage} className='w-8 h-8' alt="" />
                                <div className="phone-text flex flex-col gap-2">
                                    <h5 className="text-2xl font-semibold font-faustina uppercase">Phone</h5>
                                    <p className="text-xl font-medium font-faustina">+1 732 404 0466</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <hr className="border-0 h-[5px] bg-gradient-to-r from-teal-300 to-teal-200 my-4 w-11/12 rounded-l" />
                    </div>
                </div>

                {/* ------------------------------------------- Section-2 includes about us, reference, subscribe ----------------------------------------------------------*/}

                <div className="font-faustina text-white px-24 mt-16">
                    <div className="flex justify-between items-start py-[100px]">
                        <div className="about-us w-1/3">
                            <div className="about-us-text">
                                <p className='text-2xl font-semibold '>
                                    About Us
                                    <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                                </p>
                                <div className="about-us-content flex flex-col text-lg leading-[30px] gap-4 w-[70%] mt-4">
                                    <p>"At the end of the day, care is a human activity.
                                        Technology is not there to replace caregivers; it
                                        is there to support them."</p>
                                    <p>
                                        With a similar vision, Param Group was
                                        developed by Mr. Vipul Amin
                                    </p>
                                    <p className='bg-gradient-to-r from-[#1FA2FF] from-[0%] to-[#A6FFCB] to-[10%] text-transparent bg-clip-text'>Read More</p>

                                </div>
                            </div>
                        </div>
                        <div className="reference w-1/3">
                            <p className='text-2xl font-semibold'>Reference Link
                                <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                            </p>
                            <div className="reference-content flex mt-4">
                                <div className="left text-lg flex flex-col gap-5 leading-9 w-1/2 ">
                                    <p>Our Services</p>
                                    <p>Our Clients</p>
                                    <p>Career</p>
                                    <p>Legal Notice</p>
                                </div>
                                <div className="right leading-9 flex flex-col gap-5 w-1/2 text-lg">
                                    <p><Link to={'/privacy-policy'}>Privacy Policy</Link></p>
                                    <p>About Us</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe w-1/3 flex flex-col gap-8">
                            <p className='text-2xl font-semibold'>Subscribe
                                <hr className="w-1/12 mt-2 border-0 h-1 bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB]" />
                            </p>
                            <p className='text-lg'>Subscribe to our newsletter to get our latest updates</p>
                            <div className="email-input flex flex-row text-lg">
                                <input type="text" name="email" id="email" placeholder='Your Email Address' className='p-3 text-black w-[85%] focus:outline-none focus:ring-0  rounded-s' />
                                <div className="bg-gradient-to-r from-[#1FA2FF] to-[#A6FFCB] h-full w-[15%] flex justify-center items-center p-4 relative rounded-e">
                                    <img src={sendImage} className='w-6 h-6 relative' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------------- Last part Grey footer --------------------------------------------------- */}

                <div className="font-poppins bg-[#3E3E3E] text-white  flex justify-between items-center h-11 px-24 py-3">
                    <p className='text-xs'>Copyright © 2024 Param Group of Companies. All Rights Reserved.</p>
                    <div className="right w-96 underline flex justify-center items-center gap-4 text-xs">
                        <a href="http://www.freepik.com/">Images by storyset on Freepik</a>
                        <img src={dotImage} alt="" className='w-2 h-2' />
                        <a href="https://unsplash.com/">Images by unslpash</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
