import React from "react";

function AboutMe() {
  return (
    <div
      className="relative  flex flex-col items-center justify-center gap-4 px-6 py-12 text-primary overflow-hidden"
      id="aboutMe"
    >
      <div className="flex flex-col items-center gap-10">
        <div className="image animate-fade-in">
          <img
            src="./assets/foto.jpg"
            alt="Foto"
            className="rounded-full w-32 h-32 mx-auto border-4 border-white shadow-lg"
          />
        </div>
        <div className="text-center gap-4 flex flex-col w-full lg:w-1/2 max-w-2xl">
          <h2 className="font-extrabold text-4xl tracking-widest text-links">About Me</h2>
          <p className="text-md text-gray-300 leading-relaxed">
            Hello! My name is <span className="text-links font-semibold">Jazmin Saravia</span>, I'm a
            <span className="text-links font-semibold"> front-end developer</span> with a passion for building beautiful and functional web applications.
          </p>
          <p className="text-md text-gray-400">
            I love learning new technologies and collaborating on projects. In my free time, I enjoy watching movies and playing video games.
          </p>
          <a
            href="mailto:saraviajazminv@gmail.com"
            className="mt-4 inline-block px-6 py-2 bg-links text-primary rounded-full font-bold tracking-widest hover:bg-opacity-80 transition hover:text-primary"
            aria-label="Mail"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
