// import aespaWhiplash from "../assets/personal/aespa_whiplash_1.gif";
// import aespaWhip from "../assets/personal/aespa-whiplash-2.gif";
import whiplash from "../assets/personal/whiplash.jpg";
import whiplashtwo from "../assets/personal/whiplashdark.jfif";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Banner() {
  const phrases = [
    "One look, give 'em whiplash ",
    "Beat drop with a big flash ",
    "집중해 좀 더 think fast ",
    "이유 넌 이해 못 해 uh ",
    "왜 이제야 know I did that, uh ",
    "Day one, know I been bad, uh ",
    "Don't stop 흔들린 채 ",
    "무리해도 can't touch that (can't touch that) ",
  ];

  const { theme } = useTheme();

  const [text, setText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // use effect
  useEffect(() => {
    const currentText = phrases[currentPhrase];
    let updatedChar = isDeleting ? currentChar - 1 : currentChar + 1;
    const updatedText = currentText.substring(0, updatedChar);
    setText(updatedText);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && updatedChar === currentText.length) {
      delay = 1000;
      setIsDeleting(true);
    } else if (isDeleting && updatedChar === 0) {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      delay = 300;
    }

    const timeout = setTimeout(() => {
      setCurrentChar(updatedChar);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, phrases, currentPhrase]);

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* THIS BANNER HERE */}
        <img
          src={theme === "light" ? whiplash : whiplashtwo}
          alt="aespa-whiplash"
          className="absolute inset-0 w-full h-full object-cover -z-10 transition-all"
        />

        {/* Dynamically styled container based on theme */}
        <div
          className={`w-full h-full flex flex-col justify-between p-6 txtcolor transition-all duration-300 ${
            theme === "dark" ? "bg-black/30" : "bg-white/10"
          }`}
        >
          {/* welcome text */}
          <p className="text-5xl absolute bottom-60 left-10 font-bold self-start mt-20 ml-4 sm:ml-10 after:content-['|'] after:ml-1 after:animate-pulse">
            {text}
          </p>

          {/* copyright */}
          <p className="text-xs self-end mr-4 absolute bottom-10 ml-5 right-5 text-shadow-xs">
            &copy; 2025 Tyne. All rights reserved. Portions of content inspired by or include work by{" "}
            <a
              href="https://www.aespa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline font-bold"
            >
              aespa
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
