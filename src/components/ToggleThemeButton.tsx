import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

export default function ToggleThemeButton() {
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-20 right-4 z-20 text-xl bg-lvlone txtcolor border shadow-lg hover:bg-lvlthree px-4 py-2 rounded-full transition-all duration-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
