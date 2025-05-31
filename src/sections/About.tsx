import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col justify-center items-center mx-5">
      <div className="flex w-full h-3 sm:h-5 my-3 bg-neutral-600"></div>

      {/* about */}
      <div className="flex flex-col sm:flex-row py-5 text-neutral-50 items-center mx-3 sm:mx-10 text-center sm:text-start">
        <p className="text-3xl font-bold text-end">ABOUT TYNE</p>
        <div className="m-3 sm:m-5 bg-neutral-50 hidden sm:flex"></div>

        {/* paragraph */}
        <div className="mt-3 sm:mx-0 text-sm text-justify">
          <p>
            Hi! I’m Tyne, currently pursuing an IT undergraduate program at USTP - CDO, Philippines. My interests span
            across project management, academic and creative writing, graphic design, UI/UX design, and tech solution
            ideation. While I’m currently exploring full-stack web development, I find myself especially drawn to the
            frontend, where I can combine my love for aesthetics and usability.
          </p>

          {isExpanded && (
            <>
              <br />
              <p>
                In my work, I strive to strike a balance between creativity and functionality. Whether I’m designing an
                interface or crafting a visual, I focus on making it both visually engaging and intuitive to use. I also
                value the importance of deeply understanding theoretical concepts before applying them to real-world
                scenarios. I enjoy exchanging ideas and learning from others—collaboration often brings out the best in
                a project.
              </p>
              <br />
              <p>
                Outside the academic and tech space, I like to keep things fun and expressive. I’m a massive Harry
                Potter fan (test me on spells or lore—I’m ready), a dedicated follower of the Five Nights at Freddy’s
                universe (Bonnie’s my favorite!), and a long-time K-pop fan since the third gen, currently obsessed with
                aespa. My creative side finds its outlet in journaling, writing poems, and drawing. I’m also a pop
                culture enthusiast who loves keeping up with the latest memes—especially the chaotic ones from the
                Philippine internet and the Italian Brainrot trend.
              </p>
              <br />
              <p>
                Above all, I advocate for inclusivity in tech—regardless of age or gender—and support the progressive
                use of emerging technologies to create meaningful, modern solutions.
              </p>
            </>
          )}

          <button
            onClick={toggleReadMore}
            className=" mt-3 italic text-neutral-50/70 hover:text-neutral-50 hover:underline transition duration-200"
          >
            {isExpanded ? "(Read less)" : "(Read more ...)"}
          </button>
        </div>
      </div>
    </div>
  );
}
