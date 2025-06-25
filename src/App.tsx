import { useState, useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
// import About from "./sections/About";
import Banner from "./sections/Banner";
import IdCard from "./sections/IdCard";
import Projects from "./sections/Projects";
import TechStacks from "./sections/TechStacks";
import ToggleThemeButton from "./components/ToggleThemeButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade after 1.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    // Fully remove loading screen after 2.2s
    const hideTimer = setTimeout(() => setLoading(false), 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return loading ? (
    <LoadingScreen fadeOut={fadeOut}></LoadingScreen>
  ) : (
    <>
      <Header></Header>
      <GoToTopButton></GoToTopButton>
      <ResumeButton></ResumeButton>
      <ToggleThemeButton></ToggleThemeButton>
      <Banner></Banner>
      <IdCard></IdCard>
      {/* <About></About> */}
      <TechStacks></TechStacks>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
