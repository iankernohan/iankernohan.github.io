import { useRef, useState } from "react";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";

const mobileWidth = screen.availWidth <= 960;

export default function MainContent() {
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const educationRef = useRef(null);

  const [isMobileWidth, setIsOpenWidth] = useState(mobileWidth);

  window.addEventListener("resize", () => {
    screen.availWidth <= 960 ? setIsOpenWidth(true) : setIsOpenWidth(false);
  });

  return (
    <div className="container">
      <Navbar
        headerRef={headerRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
        educationRef={educationRef}
        isMobileWidth={isMobileWidth}
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
