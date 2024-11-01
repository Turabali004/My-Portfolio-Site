import Navbar from "./components/Navbar/Navbar";
import { HeroThree } from "./components/Hero/Hero";
import About from "./components/About/About";
import Demo from "./components/Demo/Demo";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Parallex from "./components/Parallex/Parallex";
import Footer from "./components/Footer/Footer";
// import CardCarousel from "./components/CardCarousel/CardCarousel";
import { useEffect,useState } from "react";
import { motion, useScroll } from "framer-motion";
import BioSection from "./components/BioSection/BioSection";



function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightMode = () => {
    setThemeMode('light')
  }
  
  const darkMode = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    // if (themeMode === 'dark') {
    //   document.root.classList.add('dark')
    // } else {
    //   document.root.classList.remove('dark')
    // }
    document.querySelector("body").classList.remove("light", "dark");
    document.querySelector("body").classList.add(themeMode);
  },[themeMode])



  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroThree />
      <Parallex type="services"/>
      <Parallex type="portfolio"/>

      {/* <CardCarousel/> */}
      {/* <hr/> */}
      <Project />
      <About />
      <Contact></Contact>
      {/* <BioSection/> */}
      <Footer></Footer>
      
      {/* <Demo/> */}
      </div>
  );
}

export default App;
