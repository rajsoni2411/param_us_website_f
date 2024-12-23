// ----------------------------------------------------- All Imports ----------------------------------------------------

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fbImage from '../assets/navbar/fb.svg';
import instaImage from '../assets/navbar/insta.svg';
import linkedinImage from '../assets/navbar/linkedin.svg';
import paramLogo from '../assets/navbar/param-logo 1.svg';
import xImage from '../assets/navbar/x.svg';

// ------------------------------------------------------ All Imports ----------------------------------------------------

const Header = () => {

    // ------------------------------------------- All Variables ----------------------------------------------------

    const location = useLocation();
    const headerRef = useRef(null);

    //  -------------------------------------------  Function to determine if a link is active  ------------------------------------------- 

    const isActive = (path) => location.pathname === path;

    // ---------------------------------------------------------------- gsap UseEffects (Animation) ----------------------------------------------------

    useEffect(() => {
        gsap.fromTo(headerRef.current,
            { y: '-100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 2, ease: "power2.out" });
    }, []);


    return (

        <header className="font-poppins flex flex-col px-24 py-4">

            {/*  -------------------------------------------  Mini Navbar  -------------------------------------------  */}

            <div className="flex justify-end items-center text-base leading-6 font-medium text-white gap-10 h-6">
                <span>Connect With Us</span>
                <img src={xImage} className="w-5 h-5" alt="Twitter icon" />
                <img src={fbImage} className="w-5 h-5" alt="Facebook icon" />
                <img src={instaImage} className="w-5 h-5" alt="Instagram icon" />
                <img src={linkedinImage} className="w-5 h-5" alt="LinkedIn icon" />
            </div>

            {/*  ------------------------------------------- Main Navbar  -------------------------------------------  */}

            <div className="flex justify-between items-center" ref={headerRef}>

                {/* ------------------------------------------- Logo ----------------------------------------- */}

                <Link to={"/"} className="logo">
                    <img src={paramLogo} className="w-52 h-16" alt="Param Logo" />
                </Link>

                {/* -------------------------------------------  Navigation Links  -------------------------------------------  */}

                <nav>
                    <ul className="text-white flex gap-12 font-semibold text-xl leading-6">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/aboutus' },
                            { name: 'Our Services', path: '/services' },
                            { name: 'Our Clients', path: '/our-clients' },
                            { name: 'Career', path: '/careers' },
                            { name: 'Contact Us', path: '/contact' },
                        ].map((link) => (
                            <li key={link.path} className="group">
                                <Link
                                    to={link.path}
                                    className={`relative ${isActive(link.path)
                                        ? 'text-gradient'
                                        : 'hover:text-gradient'
                                        }`}
                                >
                                    {link.name}
                                    <div
                                        className={`absolute left-0 bottom-0 h-[2px] ${isActive(link.path) ? 'w-full' : 'w-0'
                                            } bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] group-hover:w-full transition-all duration-500`}
                                    ></div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;
