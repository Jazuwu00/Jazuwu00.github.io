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
import MainTitle from "../MainTitle";

const technologyIcons = {
  Java: { icon: <FaJava />, color: "#f89820" },
  React: { icon: <FaReact />, color: "#61dafb" },
  JavaScript: { icon: <FaJsSquare />, color: "#f7df1e" },
  Typescript: { icon: <SiTypescript />, color: "#3178c6" },
  Bootstrap: { icon: <FaBootstrap />, color: "#7952b3" },
  Tailwind: { icon: <SiTailwindcss />, color: "#38bdf8" },
  HTML5: { icon: <FaHtml5 />, color: "#e34f26" },
  CSS3: { icon: <FaCss3Alt />, color: "#1572b6" },
  Mysql: { icon: <FaDatabase />, color: "#00758f" },
  Github: { icon: <FaGithub />, color: "#ffffff" },
  Git: { icon: <FaGit />, color: "#f1502f" },
  Jira: { icon: <FaJira />, color: "#0052cc" },
  Bitbucket: { icon: <FaBitbucket />, color: "#0052cc" },
  Figma: { icon: <FaFigma />, color: "#a259ff" },
};

function Technologies() {
  return (
    <section
      id="technologies"
      className="relative flex flex-col items-center gap-6 px-4 py-12 lg:px-20 text-primary overflow-hidden"
    >
      <MainTitle title="Technologies" />

      <div className="flex flex-wrap justify-center gap-6 ">
        {Object.entries(technologyIcons).map(([name, { icon, color }]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <div style={{ color }} className="text-4xl">
              {icon}
            </div>
            <span className="mt-2 text-sm font-medium text-center">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
