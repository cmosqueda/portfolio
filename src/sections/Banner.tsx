import { useState } from "react";

const skillset = [
  { skill: "Project Management" },
  { skill: "Technical Writing" },
  { skill: "Design" },
  { skill: "Frontend Development" },
  { skill: "Quality Assurance" },
];

export default function Banner() {
  const [htmlCode, setHtmlCode] = useState(`
<h1 style="font-size:2.5rem; font-weight:800;">
  Hello, I'm Tine!
</h1>
<p style="font-size:1.25rem;">
  An aspiring
  <i><strong>Systems Analyst</strong></i>
</p>
`);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 my-20 text-white space-y-8">
      {/* Dual display container */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl">
        {/* Input box */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-2">
          <p className="text-sm font-semibold text-lvlnine">Input</p>
          <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-5 shadow-md font-mono text-sm relative">
            <div className="absolute top-2 left-2 flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="mt-6 text-green-400 text-xs mb-2">// you may edit the HTML below :D - Tine</div>
            <textarea
              className="w-full h-48 bg-transparent text-white outline-none resize-none"
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
            />
          </div>
        </div>

        {/* Output box */}
        <div className="flex flex-col w-full sm:w-1/2 space-y-2">
          <p className="text-sm font-semibold text-lvlnine">Output</p>
          <div
            className="bg-white text-black rounded-lg p-5 shadow-md min-h-[12rem]"
            dangerouslySetInnerHTML={{ __html: htmlCode }}
          />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 items-center justify-center mt-5">
        {skillset.map((item, index) => (
          <span
            key={index}
            className="bg-lvlfive text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md"
          >
            {item.skill}
          </span>
        ))}
      </div>
    </section>
  );
}
