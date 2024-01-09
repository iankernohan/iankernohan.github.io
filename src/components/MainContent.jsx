import { useRef, useState } from "react";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";

const mobileWidth = window.innerWidth <= 960;
const responsiveHeight = window.innerHeight <= 645;

export default function MainContent() {
  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  const educationRef = useRef(null);

  const [isResponsiveWidth, setIsResponsiveWidth] = useState(mobileWidth);
  const [isResponsiveHeight, setIsResponsiveHeight] =
    useState(responsiveHeight);

  window.addEventListener("resize", () => {
    window.innerWidth <= 960
      ? setIsResponsiveWidth(true)
      : setIsResponsiveWidth(false);
    window.innerHeight <= 645
      ? setIsResponsiveHeight(true)
      : setIsResponsiveHeight(false);
  });

  return (
    <div className="container">
      <Navbar
        headerRef={headerRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
        educationRef={educationRef}
        isResponsiveWidth={isResponsiveWidth}
        isResponsiveHeight={isResponsiveHeight}
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
