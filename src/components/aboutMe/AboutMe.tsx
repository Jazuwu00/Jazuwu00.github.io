import React from "react";

function AboutMe() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4 p-4 text-white overflow-hidden" id="aboutMe">
   
      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center gap-10 my-10">
        <div className="image">
          <img
            src="./assets/foto.jpg"
            alt="Foto"
            className="rounded-full w-32 h-32 mx-auto border-2 border-white object-fill"
          />
        </div>
        <div className="text-center gap-4 flex flex-col w-full lg:w-1/2">
          <h2 className="font-bold text-2xl">About Me</h2>
          <p className=" font-bold">
            Hello! my name is Jazmin Saravia, I'm a front-end developer with a
            passion for creating web applications. I enjoy learning new
            technologies and improving my skills.
          </p>
          <p>In my free time, I like to watch movies and play videogames.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;