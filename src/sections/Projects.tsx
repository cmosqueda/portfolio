// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import favicon from "../assets/personal/favicon.png";
// import tukinter from "../assets/project-logos/python_tukinter_logo.png";
// import unideals from "../assets/project-logos/figma_unideals_logo.png";
// import fredsFastFood from "../assets/project-logos/figma_fff_logo.png";
// import interture from "../assets/project-logos/interture_icon.png";
// import moongleBuddy from "../assets/project-logos/moongle_icon.png";
// import sudokuGame from "../assets/project-logos/sudoku_icon.png";
import quickease from "../assets/project-logos/quickease-social-card.png";

const projectsData = [
  // {
  //   logoSrc: favicon,
  //   name: "Java UDBMS",
  //   type: ["Java", "GUI"],
  //   description:
  //     "A simple GUI standalone student and instructor database management system using text file handling, developed with java windowbuilder, a drag-and-drop GUI designer.",
  //   link: "https://github.com/cmosqueda/group6_ustpdbms",
  // },
  // {
  //   logoSrc: tukinter,
  //   name: "TUkinter",
  //   type: ["Python", "tkinter"],
  //   description: "A simple GUI tkinter tutorial application developed with Python's tkinter.",
  //   link: "https://github.com/cmosqueda/tkinter_gui",
  // },
  // {
  //   logoSrc: unideals,
  //   name: "Unideals",
  //   type: ["Figma", "UI/UX"],
  //   description:
  //     "A figma prototype for a proposed one-stop ordering, bartering, and queueing system for academic materials.",
  //   link: "https://www.figma.com/proto/hIvYdOgvDCLvtDO1TrHzP7...",
  // },
  // {
  //   logoSrc: fredsFastFood,
  //   name: "Fred's Fast Food",
  //   type: ["Figma", "UI/UX"],
  //   description: "A fastfood e-commerce web application mockup designed on figma.",
  //   link: "https://www.figma.com/proto/mfrYEEvKEqFmlEj4IBabNb...",
  // },
  // {
  //   logoSrc: interture,
  //   name: "Interture",
  //   type: ["React", "Vite"],
  //   description: "Frontend prototype for an e-commerce site using ReactJS and Vite.",
  //   link: "https://github.com/cmosqueda/interture-react",
  // },
  // {
  //   logoSrc: moongleBuddy,
  //   name: "MOONGLE Buddy",
  //   type: ["React Native", "Firebase"],
  //   description: "A proposed study helper app built with Expo React Native and Firebase.",
  //   link: "https://github.com/cmosqueda/moongle-buddy-app-gh",
  // },
  // {
  //   logoSrc: favicon,
  //   name: "Currency Converter",
  //   type: ["React Native", "API"],
  //   description: "A currency converter built in Expo React Native.",
  //   link: "https://github.com/cmosqueda/currency-converter-repo",
  // },
  // {
  //   logoSrc: sudokuGame,
  //   name: "Sudoku React",
  //   type: ["React Native"],
  //   description: "A simple Sudoku game built using React Native.",
  //   link: "https://github.com/cmosqueda/sudoku-react",
  // },
  // {
  //   logoSrc: favicon,
  //   name: "Affitnity",
  //   type: ["React", "Django"],
  //   description: "A fitness app using React, Django, and PostgreSQL. (WIP)",
  //   link: "https://github.com/cmosqueda/affitnity-react",
  // },
  // {
  //   logoSrc: favicon,
  //   name: "Rock, Paper, Scissors CLI",
  //   type: ["Python", "CLI"],
  //   description: "A retro-style CLI-based game written in Python.",
  //   link: "https://github.com/cmosqueda/rock-paper-scissors-cli",
  // },
  // {
  //   logoSrc: favicon,
  //   name: "Sulat",
  //   type: ["React Native", "Drizzle", "SQLite"],
  //   description: "A simple text editor that mimics markdown editor behavior.",
  //   link: "https://github.com/cmosqueda/sulat",
  // },
  {
    logoSrc: quickease,
    name: "QuickEase 2.0 Docs",
    type: ["Docusaurus", "Documentation"],
    description: "The official documentation for QuickEase 2.0",
    link: "https://github.com/cmosqueda/quickease-docs",
  },
];

export default function Projects() {
  return (
    <section className="w-full px-4 my-20 bg-lvlzero text-lvlfive flex flex-col items-center">
      <h2 className="text-3xl sm:text-3xl font-bold mb-10 txtcolor text-center">PROJECTS</h2>

      {/* Project Cards */}

      <div className="h-auto flex flex-row flex-wrap gap-4 mx-3 sm:w-5/6 w-auto  rounded-md  ">
        {projectsData.map((project) => (
          <a
            // key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-grow items-center  rounded-lg overflow-hidden w-auto sm:w-[300px] sm:h-72 h-auto shadow hover:scale-105 transition-transform duration-300"
          >
            {/* image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.logoSrc})`,
              }}
            />

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center sm:items-start p-5 w-full h-full bg-black/40 ">
              <h3 className="sm:text-xl text-lg font-semibold my-3 text-center sm:text-left text-neutral-100">
                {project.name}
              </h3>
              <p className="text-xs  text-neutral-100 mb-4 text-center sm:text-left">{project.description}</p>
              {/* Types  */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.type.map((tech, index) => (
                  <span key={index} className="px-2 py-1 text-xs bg-lvlthree text-lvleight rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
