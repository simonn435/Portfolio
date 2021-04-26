import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const scrollAn = () => {
    const subtitle = document.querySelectorAll(".subtitle");
    const section = document.querySelectorAll(".to-reveal");
    const height = window.innerHeight;

    // Reveal each subtitle on scroll
    subtitle.forEach(sub => {
      const subPosition = sub.getBoundingClientRect().top;
      if (subPosition < height) {
        sub.classList.add("reveal");
      } else {
        sub.classList.remove("reveal");
      }
    });

    // Reveal each section on scrol

    section.forEach(sec => {
      const secPosition = sec.getBoundingClientRect().top;
      if (secPosition < height) {
        sec.classList.add("revealed");
      } else {
        sec.classList.remove("revealed");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollAn);
    return () => {
      window.removeEventListener("scroll", scrollAn);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
