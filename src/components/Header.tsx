import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeaderClasses = () => {
    const baseClasses =
      "p-2 backdrop-blur-md border txtcolor transition-all duration-300 text-xs sm:text-base flex flex-col sm:flex-row justify-between";

    if (theme === "dark") {
      return `${baseClasses} ${
        scrolled ? "bg-white/20  border-black/10 shadow-md" : "bg-black/20  m-5 rounded-lg shadow-lg border-white/20"
      }`;
    } else {
      return `${baseClasses} ${
        scrolled ? "bg-black/20  border-white/10 shadow-md" : "bg-white/20  m-5 rounded-lg shadow-lg border-black/20"
      }`;
    }
  };

  return (
    <div className="fixed top-0 w-full z-20">
      <div className={getHeaderClasses()}>
        {/* email */}
        <a
          href="mailto:mosqueda.christinereisa04@gmail.com"
          target="_blank"
          className="flex flex-row items-center hover:underline"
        >
          <MdEmail size={20} />
          <p className="ml-1">mosqueda.christinereisa04@gmail.com</p>
        </a>

        {/* linkedIn */}
        <a
          href="http://www.linkedin.com/in/christine-mosqueda-ba202b333"
          target="_blank"
          className="flex flex-row items-center hover:underline"
        >
          <FaLinkedin size={20} />
          <p className="ml-1">Christine Mosqueda</p>
        </a>
      </div>
    </div>
  );
}
