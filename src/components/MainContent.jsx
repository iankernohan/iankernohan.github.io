import { useRef } from "react";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function MainContent() {
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const educationRef = useRef(null);

  function scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="container">
      <Navbar
        scroll={scroll}
        headerRef={headerRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
        educationRef={educationRef}
      />
      <div className="main-content">
        <Header headerRef={headerRef} />
        <AboutMe aboutMeRef={aboutMeRef} />
        <Education educationRef={educationRef} />
        <Projects projectsRef={projectsRef} />
        <Footer
          scroll={scroll}
          footerRef={footerRef}
          headerRef={headerRef}
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          educationRef={educationRef}
        />
      </div>
    </div>
  );
}
