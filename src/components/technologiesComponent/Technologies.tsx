import React from "react";
import {
  FaReact,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaDatabase,
  FaGit,
  FaJira,
  FaBitbucket,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const technologyIcons = {
  Java: <FaJava size={20} />,
  React: <FaReact size={20} />,
  JavaScript: <FaJsSquare size={20} />,
  Typescript: <SiTypescript size={20} />,
  Bootstrap: <FaBootstrap size={20} />,
  Tailwind: <SiTailwindcss size={20} />,
  HTML5: <FaHtml5 size={20} />,
  CSS3: <FaCss3Alt size={20} />,
  Mysql: <FaDatabase size={20} />,
  Github: <FaGithub size={20} />,
  Git: <FaGit size={20} />,
  Jira:  <FaJira size={20} />,
  Bitbucket: <FaBitbucket size={20} />,
  Figma : <FaFigma  size={20} />,
};
function Technologies() {
  return (
    <div
      className="relative flex flex-col  gap-4 p-4 lg:px-20 text-white overflow-hidden"
      id="technologies"
    >
      <h2 className=" font-bold text-3xl mb-6  w-full border-2 rounded-3xl p-4 border-white/10 ">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-10 my-6">
        {Object.entries(technologyIcons).map(([name, icon]) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            {icon}
            <span className="text-sm font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
