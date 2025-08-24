import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faHouse,
  faLaptop,
  faPhone,
  faScrewdriverWrench,
  faUserCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <div
          className="fixed top-0 left-0 right-0 z-50 shadow-md 
          bg-white/10 backdrop-blur-md px-10 border-b border-white/20"
        >
          {/* Top Navbar */}
          {/* <div className="hidden lg:flex items-center justify-between py-2 text-sm  text-white">
            <ul className="flex items-center justify-center gap-5">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-primary-300" />
                <a href="tel:+201024443168" className="hover:text-primary-400 transition-colors">
                  +201024443168
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary-300" />
                <a href="mailto:dev.mohamedhedia@gmail.com" className="hover:text-primary-400 transition-colors">
                  dev.mohamedhedia@gmail.com
                </a>
              </li>
            </ul>
          </div> */}

          {/* Main Navbar */}
          <nav className="flex items-center justify-between py-4 gap-2">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCode}
                className=" fa-beat text-primary-600 text-xl lg:text-2xl"
              />
              <h1 className="flex items-center font-bold text-xl lg:text-3xl text-white hover:text-primary-300 transition-colors">
                <Link to={`/`} className="tracking-wide">
                  Mohammed
                </Link>
                <span className="ml-2 w-1 h-1 md:w-2 md:h-2 rounded-full bg-primary-600"></span>
              </h1>
            </div>

            <ul className="hidden lg:flex items-center gap-15 text-white">
              <li>
                <a
                  href="#home"
                  className="flex flex-col items-center gap-1 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="text-sm">Home</span>
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="" />
                  <span className="text-sm">About Me</span>
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faScrewdriverWrench} className="" />
                  <span className="text-sm">Skills</span>
                </a>
              </li>
              <li>
                <a
                  href="#Projects"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faLaptop} className="" />
                  <span className="text-sm">Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#ContactMe"
                  className="flex flex-col items-center gap-2 hover:text-primary-300 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="" />
                  <span className="text-sm">Contact Me</span>
                </a>
              </li>
            </ul>

            <button
              onClick={toggleMenu}
              className="bg-primary-400 text-white text-sm block lg:hidden btn px-2 py-1 "
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>

        {/* OffCanvas */}
        {isMenuOpen && (
          <>
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 z-40 cursor-pointer"
            ></div>

            <div
              className="OffCanvas fixed z-50 bg-white/10 backdrop-blur-lg 
                text-white top-0 bottom-0 p-5 space-y-5 animate-slide-in 
                border-r border-white/20 w-64"
            >
              <div className="flex items-center justify-between py-5 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCode}
                    className=" fa-beat text-primary-600 text-xs md:text-xs"
                  />
                  <h1 className="font-bold text-xs md:text-xs hover:text-primary-300 transition-colors">
                    <Link to={`/`} className="tracking-wide">
                      Mohammed Hedia
                    </Link>
                    <span className="ml-2 w-1 h-1 rounded-full bg-primary-600"></span>
                  </h1>
                </div>
                <button onClick={toggleMenu} className="text-white ">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <h2 className="text-xl font-bold text-primary-300">Main Menu</h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#home"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faHouse} className="text-xl" />
                    <span className="text-sm">Home</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="text-2xl" />
                    <span className="text-sm">About Me</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon
                      icon={faScrewdriverWrench}
                      className="text-2xl"
                    />
                    <span className="text-sm">Skills</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faLaptop} className="text-2xl" />
                    <span className="text-sm">Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#ContactMe"
                    onClick={toggleMenu}
                    className="flex gap-2 px-2 py-3 text-white rounded hover:text-primary-300"
                  >
                    <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                    <span className="text-sm">Contact Me</span>
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
}
