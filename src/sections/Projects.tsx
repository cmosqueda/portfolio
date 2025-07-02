import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

import favicon from "../assets/personal/favicon.png";
import tukinter from "../assets/project-logos/python_tukinter_logo.png";
import unideals from "../assets/project-logos/figma_unideals_logo.png";
import fredsFastFood from "../assets/project-logos/figma_fff_logo.png";
import interture from "../assets/project-logos/interture_icon.png";
import moongleBuddy from "../assets/project-logos/moongle_icon.png";
import sudokuGame from "../assets/project-logos/sudoku_icon.png";

const projectsData = [
  {
    logoSrc: favicon,
    name: "Java UDBMS",
    description:
      "A simple GUI standalone student and instructor database management system using text file handling, developed with java windowbuilder, a drag-and-drop GUI designer.",
    link: "https://github.com/cmosqueda/group6_ustpdbms",
    category: "Desktop",
  },
  {
    logoSrc: tukinter,
    name: "TUkinter",
    description: "A simple GUI tkinter tutorial application developed with Python's tkinter.",
    link: "https://github.com/cmosqueda/tkinter_gui",
    category: "Desktop",
  },
  {
    logoSrc: unideals,
    name: "Unideals",
    description:
      "A figma prototype for a proposed one-stop ordering, bartering, and queueing system for academic materials, school merchandise, and tutoring services in our university.",
    link: "https://www.figma.com/proto/hIvYdOgvDCLvtDO1TrHzP7/R6-%7C-Mosqueda%2C-Christine-Reisa-P.?type=design&node-id=1-2&t=4qdUzuuNV9ysUgAD-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2",
    category: "Figma",
  },
  {
    logoSrc: fredsFastFood,
    name: "Fred's Fast Food",
    description: "A fastfood e-commerce web application mockup designed on figma.",
    link: "https://www.figma.com/proto/mfrYEEvKEqFmlEj4IBabNb/R6---Mosqueda%2C-Christine-Reisa-P.-%7C-Finals-PIT?node-id=2-2&scaling=scale-down-width",
    category: "Figma",
  },
  {
    logoSrc: interture,
    name: "Interture",
    description:
      "A frontend prototype for an e-commerce developed using ReactJS Vite. (Collaborative work with P.N.Salaan, S.N.Tilan, R.A.Naliatan, D.J.Ebajay, L.C.Flores)",
    link: "https://github.com/cmosqueda/interture-react",
    category: "Web",
  },
  {
    logoSrc: moongleBuddy,
    name: "MOONGLE Buddy",
    description:
      "A proposed study helper app developed using Expo React Native as frontend and Firebase as a serverless backend and database. (Collaborative work with S.N.Tilan, J.Baraocor, L.C.Flores)",
    link: "https://github.com/cmosqueda/moongle-buddy-app-gh",
    category: "Mobile",
  },
  {
    logoSrc: favicon,
    name: "Currency Converter",
    description: "A simple currency converter made for practicing API calls, developed using Expo React Native.",
    link: "https://github.com/cmosqueda/currency-converter-repo",
    category: "Mobile",
  },
  {
    logoSrc: sudokuGame,
    name: "Sudoku React",
    description: "A simple Sudoku game developed using Expo React Native as frontend.",
    link: "https://github.com/cmosqueda/sudoku-react",
    category: "Mobile",
  },
  {
    logoSrc: favicon,
    name: "Affitnity",
    description: "A fitness app using React, Django, and PostgreSQL. (WIP)",
    link: "https://github.com/cmosqueda/affitnity-react",
    category: "Web",
  },
  {
    logoSrc: favicon,
    name: "Rock, Paper, Scissors CLI",
    description: "A retro-style CLI-based game written in Python, packaged as an .exe for Windows.",
    link: "https://github.com/cmosqueda/rock-paper-scissors-cli",
    category: "Desktop",
  },
  {
    logoSrc: favicon,
    name: "Sulat",
    description:
      "Sulat is a simple text editor that mimics the functionalities of markdown editors. This is made entirely with React components.",
    link: "https://github.com/cmosqueda/sulat",
    category: "Mobile",
  },
];

const categories = ["All", "Web", "Mobile", "Figma", "Desktop"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All" ? projectsData : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <div className="w-full px-4 py-10 bg-lvlzero text-lvlfive">
      <div className=" mx-auto ">
        <h2 className="text-3xl sm:text-3xl font-bold mb-6 txtcolor text-center">PROJECTS</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-transform duration-300 border border-lvlfive/40 ${
                selectedCategory === cat
                  ? "bg-lvlseven text-lvlone scale-110"
                  : " bg-lvlone text-lvlsix  hover:bg-lvlfive/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="h-[500px] sm:h-[400px] overflow-auto flex  flex-wrap gap-4 my-5 mx-3 bg-lvlfour/50 rounded-md p-5 scrollbar-thin scrollbar-thumb-lvlfive scrollbar-track-lvleight ">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col flex-grow sm:items-start items-center rounded-lg overflow-hidden w-auto sm:w-[300px] shadow hover:scale-105 transition-transform duration-300"
            >
              {/* Blurred background layer */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center blur-sm scale-110"
                style={{
                  backgroundImage: `url(${project.logoSrc})`,
                  filter: "blur(8px)",
                }}
              />

              {/* Optional overlay to darken */}
              <div className="absolute inset-0 bg-black/40 z-0" />

              {/* Foreground content */}
              <div className="relative z-10 flex flex-col items-center sm:items-start p-5 w-full h-full bg-neutral-900/30 backdrop-blur-sm rounded-lg">
                <h3 className="sm:text-xl text-lg font-semibold my-3 text-center sm:text-left text-neutral-100">
                  {project.name}
                </h3>
                <p className="text-xs sm:block hidden text-neutral-100 mb-4 text-center sm:text-left">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-neutral-300 text-neutral-900 text-sm px-4 py-2 rounded-md font-medium sm:w-[140px] w-full text-center hover:bg-lvlfive/80 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
