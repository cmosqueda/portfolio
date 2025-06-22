// import aespaWhiplash from "../assets/personal/aespa_whiplash_1.gif";
// import aespaWhip from "../assets/personal/aespa-whiplash-2.gif";
// import whiplash from "../assets/personal/whiplash.jpg";
// import whiplashtwo from "../assets/personal/whiplashdark.jfif";

// import { useEffect, useState } from "react";
// import { useTheme } from "@/contexts/ThemeContext";

const skillset = [
  { skill: "Project Management" },
  { skill: "Technical Writing" },
  { skill: "Design" },
  { skill: "Frontend Development" },
  { skill: "Quality Assurance" },
];

export default function Banner() {
  return (
    <>
      <div className="flex-col h-screen flex items-center justify-center overflow-hidden">
        {/* text */}
        <div className="text-center text-lvlnine space-y-5 m-5">
          <p className="text-xs sm:text-base">Hello, world! I am</p>
          <p className=" font-black uppercase text-6xl sm:text-8xl">Tine Mosqueda</p>
          <p className="text-lg sm:text-2xl">
            An aspiring{" "}
            <i>
              <strong>systems analyst.</strong>
            </i>
          </p>
          {/* <hr className="border-2" /> */}
        </div>

        {/* skills */}
        <div className="flex flex-wrap gap-2 items-center justify-center mt-5 mx-5">
          {skillset.map((item, index) => (
            <span
              key={index}
              className="bg-lvlfive text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md"
            >
              {item.skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
