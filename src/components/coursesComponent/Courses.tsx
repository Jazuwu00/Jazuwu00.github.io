import React from "react";
const excelTasks = [
  "navigation, formatting, and data manipulation.",
  "create and customize charts and graphs to visually represent data.",
  "Functions and formulas",
];
const techTasks = [
  "Developing interactive 3D environments using Unity.",
  "Implementing C# scripts for game logic and behaviors.",
  "Managing assets and optimizing performance in Unity projects.",
  "Collaborating in teams using version control (Git).",
  "Deploying projects to multiple platforms.",
];
const iftsInfo = [
  "Software analysis and design.",
  "Database modeling and SQL.",
  "Object-oriented programming (Java, C#).",
  "Web development with HTML, CSS, and JavaScript.",
  "Systems analysis and project management.",
];

const uni = [
  "Educational technology and digital resources.",
  "Digital citizenship and ethics.",
  "Collaborative projects and research in digital technologies.",
];
const UBATasks = [
  "Improving English reading, writing, listening, and speaking skills.",
  "Participating in group discussions and presentations.",
  "Expanding vocabulary and understanding grammar structures.",
  "Preparing for international English exams.",
];
const CodoACodoTasks = [
  "Building responsive web interfaces with HTML, CSS, and JavaScript.",
  "Using Git and GitHub for version control.",
  "Applying best practices for code organization and readability.",
  "Collaborating in group projects using Agile methodologies.",
];
function Courses() {
  return (
    <div
      className="relative z-20  text-white overflow-hidden  p-4 lg:px-20"
      id="courses"
    >
      <h2 className=" font-bold text-3xl mb-6  w-full border-2 rounded-3xl p-4 border-white/10 ">Courses</h2>
        <div className="mb-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-lg">
            Higher Technician in Systems Analysis
          </h1>
          <span>2021 – 2023</span>
        </div>
        <p>IFTS 16</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {iftsInfo.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-lg">
            Bachelor's Degree in Digital Technologies
          </h1>
          <span>Future</span>
        </div>
        <p>Universidad de la Ciudad</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {uni.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex flex-row items-center justify-between ">
          <h1 className=" font-bold text-lg">Unity 3D</h1>
          <span>2025 - present</span>
        </div>
        <p>Talento tech</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {techTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
       <div className="mb-6">
        <div className="flex flex-row items-center justify-between ">
          <h1 className=" font-bold text-lg">Ingles</h1>
          <span>2022 - present</span>
        </div>
        <p>UBA</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {UBATasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
       <div className="mb-6">
        <div className="flex flex-row items-center justify-between ">
          <h1 className=" font-bold text-lg">JS FRONT-END</h1>
          <span>2022 - 2022</span>
        </div>
        <p>Codo a codo</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {CodoACodoTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
       <div className="mb-6">
        <div className="flex flex-row items-center justify-between ">
          <h1 className=" font-bold text-lg">Excel avanzado</h1>
          <span>2022 - 2022</span>
        </div>
        <p>Municipalidad 3 de febrero</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {excelTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Courses;
