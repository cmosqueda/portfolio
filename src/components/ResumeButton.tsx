// import myResume from "../assets/personal/MosquedaChristine_CV_Resume.pdf";
import { useEffect, useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

export default function ResumeButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const collapseTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
      if (window.scrollY <= 200) {
        collapse();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (expanded && !target.closest("#resume-btn-container")) {
        collapse();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [expanded]);

  const expand = () => {
    setExpanded(true);
    if (collapseTimer.current !== null) {
      clearTimeout(collapseTimer.current);
    }
    collapseTimer.current = window.setTimeout(() => {
      collapse();
    }, 4000);
  };

  const collapse = () => {
    setExpanded(false);
    if (collapseTimer.current !== null) {
      clearTimeout(collapseTimer.current);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!expanded) {
      e.preventDefault();
      expand();
    } else {
      // window.open("/tyne-portfolio/MosquedaChristine_CV_Resume.pdf", "_blank");
      collapse();
    }
  };

  return (
    <span
      id="resume-btn-container"
      onClick={handleClick}
      // target="_blank"
      className={`fixed bottom-5 left-0 z-20 bg-lvlone border border-lvlnine border-l-0 shadow-lg cursor-pointer text-lvlnine py-3 rounded-r-full text-xs transition-all duration-300 flex items-center overflow-hidden group ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } ${expanded ? "max-w-[180px] px-3" : "max-w-[40px] px-2"}`}
    >
      <span className={`transition-transform duration-500 text-base ${expanded ? "rotate-180" : ""}`}>
        <FaFileAlt className="text-lg" />
      </span>
      <a
        href="/portfolio/Mosqueda_Christine_CV.pdf"
        target="_blank"
        className={`ml-2 whitespace-nowrap flex items-center gap-1 transition-all duration-500 ${
          expanded ? "opacity-100 max-w-[140px]" : "opacity-0 max-w-0"
        }`}
      >
        {/* <FaFileAlt className="text-sm" /> */}
        View CV
      </a>
    </span>
  );
}
