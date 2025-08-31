import React from "react";
import { CatIcon } from "../icons";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";



function Header() {
  return (
    <div className="relative z-20 text-background flex justify-between items-center p-4 lg:px-16 lg:py-6 text-sm lg:text-lg">
      <div className="icon">
        <CatIcon  />
      </div>
      <ul className="menu list-none flex gap-4 m-0 p-0">
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
  );
}

export default Header;
