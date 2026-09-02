"use client"
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./loading";
import { useEffect, useState } from "react";
import Gentlemandev from "./components/Gentlemandev";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDevModal, setShowDevModal] = useState(false);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative ">
      <Header />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <Contact />
      {showDevModal && <Gentlemandev showDevModal={showDevModal} setShowDevModal={setShowDevModal} />}
      <Footer showDevModal={showDevModal} setShowDevModal={setShowDevModal} />
    </div>
  )
};

export default App;