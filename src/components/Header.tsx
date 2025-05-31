import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-20">
      <div
        className={`p-2 ${
          scrolled ? "shadow-md bg-white/20" : "m-5 rounded-3xl shadow-lg "
        } bg-black/20 backdrop-blur-md border border-white/20 text-neutral-50 flex flex-col sm:flex-row justify-between text-xs sm:text-base transition-all duration-300`}
      >
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
