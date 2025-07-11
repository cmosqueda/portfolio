import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <section className="flex flex-col justify-center items-center mx-5 mt-10">
      {/* <div className="flex w-full h-3 sm:h-5 my-3 bg-lvlfour"></div> */}

      {/* about */}
      <div className="flex flex-col sm:flex-row py-5 txtcolor items-center mx-3 sm:mx-10 text-center sm:text-start max-w-5xl">
        <p className="text-3xl font-bold text-end mb-5 sm:m-auto">MORE ABOUT ME</p>
        <div className="m-3 sm:m-5 hidden sm:flex"></div>

        {/* paragraph */}
        <div className="mt-3 sm:mx-0 text-sm text-justify">
          <p>
            Throughout my journey, I&apos;ve led and contributed to various academic initiatives—currently serving as a
            systems analyst/project lead for our capstone project. In A.Y. 2024-2025, I&apos;ve also taken on active
            roles in organizations, such as <strong>ISDA Camaman-an Association</strong> and{" "}
            <strong>Andam Higala - USTP chapter</strong>, where I managed and produced publication materials that helped
            connect with broader communities. I always aim to blend clarity, creativity, collaboration, and
            communication in my crafts.
          </p>

          {isExpanded && (
            <>
              <br />
              <p>
                Outside the tech space, I stay grounded and inspired by my personal interests and hobbies. I&apos;m a
                long-time fan of wide-ranging pop-cultures like Harry Potter, Five Nights at Freddy&apos;s, and K-pop
                <i> (currently hyperfixating on aespa)</i>. I also love journaling, sketching, and writing poetry. I
                also keep up with the latest trends and memes (blame my abnormally high screen time for being
                chronically online).
              </p>
              <br />
              <p>
                My personal advocacy has always been about making tech more inclusive and accessible for everyone. As I
                continue growing in this field, I hope to contribute to solutions that empower others—particularly
                through thoughtful design, responsible innovation, and community-driven impact.
              </p>
            </>
          )}

          <button
            onClick={toggleReadMore}
            className=" mt-3 italic text-lvlsix hover:text-lvlseven cursor-pointer hover:underline transition duration-200"
          >
            {isExpanded ? "(Read less)" : "(Read more ...)"}
          </button>
        </div>
      </div>
    </section>
  );
}
