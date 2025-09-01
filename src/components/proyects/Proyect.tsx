import React from "react";
import Carousel from "../carousel";
import {
  FaReact,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const technologyIcons: { [key: string]: JSX.Element } = {
  Java: <FaJava size={20} />,
  React: <FaReact size={20} />,
  JavaScript: <FaJsSquare size={20} />,
  Typescript: <SiTypescript size={20} />,
  Bootstrap: <FaBootstrap size={20} />,
  Tailwind: <SiTailwindcss size={20} />,
  HTML5: <FaHtml5 size={20} />,
  CSS3: <FaCss3Alt size={20} />,
  Mysql: <FaDatabase size={20} />,
};

type Props = {
  images: {
    src: string;
    alt: string;
  }[];
  description: string;
  title: string;
  link: string;
  technologies: string[];
};
function Proyect({ images, description, title, link, technologies }: Props) {
  return (
    <div className="mb-6  flex flex-col  text-slate-300 gap-4 lg:flex-row lg:gap-20 lg:justify-between ">
      <div className="flex flex-col  lg:w-3/4  gap-4 ">
        <div className=" flex justify-between items-center ">
          <h1 className=" font-bold text-2xl text-links capitalize">{title}</h1>
          <a
            href={link}
            className="cursor-pointer font-bold tracking-widest"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p>
          <span className=" font-bold">Technologies :</span>
          <span className="flex gap-2 items-center mt-2">
            {technologies.map((tech) =>
              technologyIcons[tech] ? (
                <span key={tech} title={tech}>
                  {technologyIcons[tech]}
                </span>
              ) : (
                <span key={tech} className="text-xs italic">
                  {tech}
                </span>
              )
            )}
          </span>
        </p>

        <p className="description overflow-hidden text-ellipsis ">
          {description}
        </p>
      </div>

      <Carousel images={images} />
    </div>
  );
}

export default Proyect;
