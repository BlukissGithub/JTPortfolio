import Navbar from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification/>
      <Services />
      <Portfolio/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
