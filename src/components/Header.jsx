// ----------------------------------------------------- All Imports ----------------------------------------------------

import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fbImage from '../assets/navbar/fb.svg';
import instaImage from '../assets/navbar/insta.svg';
import linkedinImage from '../assets/navbar/linkedin.svg';
import paramLogo from '../assets/navbar/param-logo 1.svg';
import xImage from '../assets/navbar/x.svg';
import menuLine from '../assets/navbar/menu-line.svg';
import closeButton from '../assets/navbar/close-button.svg';
// import { FiMenu, FiX } from 'react-icons/fi';
// ------------------------------------------------------ All Imports ----------------------------------------------------

const Header = () => {
    // ------------------------------------------- All Variables ----------------------------------------------------

    const location = useLocation();
    const headerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    //  -------------------------------------------  Function to determine if a link is active  -------------------------------------------

    const isActive = (path) => location.pathname === path;

    // ---------------------------------------------------------------- gsap UseEffects (Animation) ----------------------------------------------------

    useEffect(() => {
        gsap.fromTo(headerRef.current,
            { y: '-100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 2, ease:
            'power2.out' });
    }, []);


    return (
      <header ref={headerRef} className="font-poppins h-full px-6 lg:px-16 py-4 relative z-50">
        {/*  -------------------------------------------  Mini Navbar  -------------------------------------------  */}

        <div className="hidden md:flex justify-end items-center text-xs sm:text-sm md:text-base font-medium text-white gap-2 sm:gap-4 md:gap-6 lg:gap-10">
          <span>Connect With Us</span>
          <img
            src={xImage}
            className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            alt="Twitter icon"
          />
          <img
            src={fbImage}
            className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            alt="Facebook icon"
          />
          <img
            src={instaImage}
            className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            alt="Instagram icon"
          />
          <img
            src={linkedinImage}
            className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
            alt="LinkedIn icon"
          />
        </div>

        {/*  ------------------------------------------- Main Navbar  -------------------------------------------  */}

        <div className="flex justify-between items-center mt-4">
          {/*  ---------------------------------- Mobile sidebar button  -------------------------------------------  */}

          <button
            className="md:hidden text-white text-2xl sm:text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={closeButton} className="w-8 h-8" alt="close icon" />
            ) : (
              <img src={menuLine} className="w-8 h-8" alt="menu icon" />
            )}
          </button>

          {/* ------------------------------------------- Logo ----------------------------------------- */}

          <Link to="/" className="">
            <img
              src={paramLogo}
              className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
              alt="Param Logo"
            />
          </Link>

          {/* -------------------------------------------  Navigation Links  -------------------------------------------  */}

          <nav className="hidden md:flex">
            <ul className="text-white flex gap-4 lg:gap-8 xl:gap-12 font-semibold text-sm lg:text-lg xl:text-xl">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Our Services", path: "/our-services" },
                { name: "Our Clients", path: "/our-clients" },
                { name: "Career", path: "/careers" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path} className="group">
                  <Link
                    to={link.path}
                    className={`relative ${
                      isActive(link.path)
                        ? "text-gradient"
                        : "hover:text-gradient"
                    }`}
                  >
                    {link.name}
                    <div
                      className={`absolute left-0 bottom-0 h-[2px] ${
                        isActive(link.path) ? "w-full" : "w-0"
                      } bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] group-hover:w-full transition-all duration-500`}
                      style={{
                        width: isActive(link.path) ? "calc(100% - 10px)" : "0",
                      }}
                    ></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`lg:hidden  fixed top-0 left-0 w-full  h-auto bg-white text-black flex flex-col items-center gap-6 pt-20 transition-transform  duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <img src={closeButton} className="w-8 h-8" alt="close icon" />
            </button>
            <ul className="flex flex-col gap-6 text-lg font-semibold bg-white w-full z-50 h-full static ">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Our Services", path: "/our-services" },
                { name: "Our Clients", path: "/our-clients" },
                { name: "Career", path: "/careers" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.path} onClick={() => setIsOpen(false)}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 ${
                      isActive(link.path)
                        ? "text-gradient"
                        : "hover:text-gradient"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
};

export default Header;
