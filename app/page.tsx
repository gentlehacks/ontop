
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="relative px-8 md:px-15 lg:px-20">
      <Header />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;