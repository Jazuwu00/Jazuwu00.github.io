import React, { useState } from "react";
import { CatIcon } from "../icons";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAlignJustify,
  FaTimesCircle,
} from "react-icons/fa";
import { useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="relative z-20 text-primary ">
      {/* Desktop menu button */}
      <div className="hidden md:flex justify-between  items-center p-4 lg:px-16 lg:py-6 text-sm lg:text-lg">
        <div className="icon">
          <CatIcon />
        </div>
        <ul className=" flex menu list-none gap-4 m-0 p-0">
          <li>
            <a
              href="#aboutMe"
              className="cursor-pointer font-bold tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("aboutMe")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#proyects"
              className="cursor-pointer font-bold tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("proyects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Proyects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="cursor-pointer font-bold tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#courses"
              className="cursor-pointer font-bold tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Courses
            </a>
          </li>
        </ul>
        <ul className="links list-none flex gap-1 text-sm md:gap-4 lg:text-lg m-0 p-0">
          <li>
            <a
              href="https://www.linkedin.com/in/jazmin-saravia-776a30189/"
              className="cursor-pointer font-bold tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jazuwu00"
              className="cursor-pointer font-bold tracking-widest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto:saraviajazminv@gmail.com"
              className="cursor-pointer font-bold tracking-widest"
              aria-label="Mail"
            >
              <FaEnvelope size={20} />
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile menu button */}
      <div>
        <div className="md:hidden flex justify-between items-center p-4 lg:px-16 lg:py-6 text-sm lg:text-lg">
          <div className="icon">
            <CatIcon />
          </div>
          <button
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <FaAlignJustify size={25} color="white" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 z-[9999] md:hidden bg-black/50 backdrop-blur-md p-4 w-full h-screen flex flex-col items-start space-y-8">
            <div className="w-full flex justify-end " onClick={toggleMenu}>
              <FaTimesCircle
                size={25}
                color="white"
                className=" cursor-pointer"
              />
            </div>
            
            <ul className=" list-none flex flex-col gap-4 ">
              <li>
                <a
                  href="#aboutMe"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("aboutMe")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  About me
                </a>
              </li>
                <li>
                <a
                  href="#technologies"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("technologies")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#proyects"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("proyects")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Proyects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Experience
                </a>
              </li>
               <li>
                <a
                  href="#technologies"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("technologies")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="cursor-pointer font-bold tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("courses")
                      ?.scrollIntoView({ behavior: "smooth" });
                                          setIsMenuOpen(false);

                  }}
                >
                  Courses
                </a>
              </li>
            </ul>
            <ul className="links   list-none  md:hidden flex space-x-4 gap-1  text-sm md:gap-4 lg:text-lg ">
              <li>
                <a
                  href="https://www.linkedin.com/in/jazmin-saravia-776a30189/"
                  className="cursor-pointer font-bold tracking-widest"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jazuwu00"
                  className="cursor-pointer font-bold tracking-widest"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:saraviajazminv@gmail.com"
                  className="cursor-pointer font-bold tracking-widest"
                  aria-label="Mail"
                >
                  <FaEnvelope size={20} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
