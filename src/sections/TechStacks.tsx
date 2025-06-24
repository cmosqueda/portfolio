import {
  DiHtml5,
  DiCss3,
  DiJava,
  DiJavascript,
  DiPython,
  DiReact,
  DiMysql,
  DiFirebase,
  DiPostgresql,
  DiNodejs,
  DiDjango,
  DiGithub,
  DiMarkdown,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpo,
  SiAxios,
  SiPostman,
  SiFigma,
  SiCanva,
  SiGooglesheets,
  SiGoogledocs,
  SiTrello,
  SiMiro,
  SiJupyter,
  SiTailwindcss,
  SiVite,
  SiJest,
} from "react-icons/si";

const stacks = [
  { name: "HTML", Icon: DiHtml5 },
  { name: "CSS", Icon: DiCss3 },
  { name: "JavaScript", Icon: DiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: DiPython },
  { name: "Java", Icon: DiJava },
  { name: "React", Icon: DiReact },
  { name: "Vite", Icon: SiVite },
  { name: "Expo", Icon: SiExpo },
  { name: "TailwindCSS", Icon: SiTailwindcss },
  { name: "Firebase", Icon: DiFirebase },
  { name: "MySQL", Icon: DiMysql },
  { name: "PostgreSQL", Icon: DiPostgresql },
  { name: "node.js", Icon: DiNodejs },
  { name: "Django", Icon: DiDjango },
  { name: "Axios", Icon: SiAxios },
  { name: "Github", Icon: DiGithub },
  { name: "Postman", Icon: SiPostman },
  { name: "Figma", Icon: SiFigma },
  { name: "Canva", Icon: SiCanva },
  { name: "Sheets", Icon: SiGooglesheets },
  { name: "Docs", Icon: SiGoogledocs },
  { name: "Trello", Icon: SiTrello },
  { name: "Miro", Icon: SiMiro },
  { name: "Jupyter", Icon: SiJupyter },
  { name: "Markdown", Icon: DiMarkdown },
  { name: "Jest", Icon: SiJest },
];

export default function TechStacks() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-5">
        <div className="flex flex-col items-center my-5 py-5 txtcolor">
          <p className="text-3xl mx-3 font-bold">TECH STACKS</p>
          {/* stack container, layout */}
          <div className="my-5 mx-3 text-xs">
            <div className="flex flex-wrap gap-2 items-center justify-center">
              {stacks.map(({ name, Icon }, index) => (
                <div
                  key={index}
                  className="bg-lvlone flex flex-grow flex-row p-3 items-center justify-center border border-lvlfive/50 rounded-lg shadow transition-transform duration-300 hover:scale-105 hover:bg-lvlfive/20"
                >
                  <Icon className="w-6 h-6"></Icon>
                  <p className="ml-3">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="flex w-full h-3 sm:h-5 my-3 bg-lvlfour"></div> */}
      </div>
    </>
  );
}
