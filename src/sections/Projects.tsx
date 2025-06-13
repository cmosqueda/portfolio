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
  },
  {
    logoSrc: tukinter,
    name: "TUkinter",
    description: "A simple GUI tkinter tutorial application developed with Python's tkinter.",
    link: "https://github.com/cmosqueda/tkinter_gui",
  },
  {
    logoSrc: unideals,
    name: "Unideals",
    description:
      "A figma prototype for a proposed one-stop ordering, bartering, and queueing system for academic materials, school merchandise, and tutoring services in our university.",
    link: "https://www.figma.com/proto/hIvYdOgvDCLvtDO1TrHzP7/R6-%7C-Mosqueda%2C-Christine-Reisa-P.?type=design&node-id=1-2&t=4qdUzuuNV9ysUgAD-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    logoSrc: fredsFastFood,
    name: "Fred's Fast Food",
    description: "A fastfood e-commerce web application mockup designed on figma.",
    link: "https://www.figma.com/proto/mfrYEEvKEqFmlEj4IBabNb/R6---Mosqueda%2C-Christine-Reisa-P.-%7C-Finals-PIT?node-id=2-2&scaling=scale-down-width",
  },
  {
    logoSrc: interture,
    name: "Interture",
    description:
      "A frontend prototype for an e-commerce developed using ReactJS Vite. (Collaborative work with P.N.Salaan, S.N.Tilan, R.A.Naliatan, D.J.Ebajay, L.C.Flores)",
    link: "https://github.com/cmosqueda/interture-react",
  },
  {
    logoSrc: moongleBuddy,
    name: "MOONGLE Buddy",
    description:
      "A proposed study helper app developed using Expo React Native as frontend and Firebase as a serverless backend and database. (Collaborative work with S.N.Tilan, J.Baraocor, L.C.Flores)",
    link: "https://github.com/cmosqueda/moongle-buddy-app-gh",
  },
  {
    logoSrc: favicon,
    name: "Currency Converter",
    description: "A simple currency converter made for practicing API calls, developed using Expo React Native.",
    link: "https://github.com/cmosqueda/currency-converter-repo",
  },
  {
    logoSrc: sudokuGame,
    name: "Sudoku React",
    description: "A simple Sudoku game developed using Expo React Native as frontend.",
    link: "https://github.com/cmosqueda/sudoku-react",
  },
  {
    logoSrc: favicon,
    name: "Affitnity",
    description: "A fitness app using React, Django, and PostgreSQL. (WIP)",
    link: "https://github.com/cmosqueda/affitnity-react",
  },
  {
    logoSrc: favicon,
    name: "Rock, Paper, Scissors CLI",
    description: "A retro-style CLI-based game written in Python, packaged as an .exe for Windows.",
    link: "https://github.com/cmosqueda/rock-paper-scissors-cli",
  },
];

export default function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        {/* sub container */}
        <div className="flex flex-col my-5 items-center mx-5">
          {/* title */}
          <p className="text-neutral-50 text-3xl font-bold">PROJECTS</p>

          {/* outer layout */}
          <div className="my-3 mx-3 text-sm">
            {/* projects wrapper */}
            <div className="flex flex-wrap gap-2 my-4 max-w-7xl mx-auto overflow-y-auto">
              {projectsData.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-50 flex flex-col flex-grow items-center text-center border rounded-lg p-5 bg-neutral-900 hover:bg-neutral-200 hover:text-neutral-900 hover:shadow-xl transition-all w-auto sm:w-[260px] h-auto cursor-pointer"
                >
                  <img
                    src={project.logoSrc}
                    alt={project.name}
                    className="object-cover w-14 h-14 sm:w-20 sm:h-20 rounded-md transition-all"
                  />
                  <div className="mt-3">
                    <p className="text-sm sm:text-lg font-bold">{project.name}</p>
                    <p className="text-xs hidden sm:block">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full h-3 sm:h-5 my-3 bg-neutral-300"></div>
        </div>
      </div>
    </>
  );
}
