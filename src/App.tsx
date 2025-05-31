// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Footer from "./components/Footer";
import GoToTopButton from "./components/GoToTopButton";
import Header from "./components/Header";
import ResumeButton from "./components/ResumeButton";
import About from "./sections/About";
import Banner from "./sections/Banner";
import IdCard from "./sections/IdCard";
import Projects from "./sections/Projects";
import TechStacks from "./sections/TechStacks";

function App() {
  return (
    <>
      <Header></Header>
      <GoToTopButton></GoToTopButton>
      <ResumeButton></ResumeButton>
      <Banner></Banner>
      <IdCard></IdCard>
      <About></About>
      <TechStacks></TechStacks>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
