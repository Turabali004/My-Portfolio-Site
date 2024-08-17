import Navbar from "./components/Navbar/Navbar";
import { HeroThree } from "./components/Hero/Hero";
import About from "./components/About/About";
import Demo from "./components/Demo/Demo";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import CardCarousel from "./components/CardCarousel/CardCarousel";                              
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeMode";
import { useEffect,useState } from "react";
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
    <>
      <Navbar />
      <HeroThree />
      {/* <CardCarousel/> */}
      {/* <hr/> */}
      <About />
      <Project />
      <Contact></Contact>
      <Footer></Footer>
      
      {/* <Demo/> */}
      </>
  );
}

export default App;
