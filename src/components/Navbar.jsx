import { FaGithub } from "react-icons/fa";
import RevealTop from "../animations/RevealTop";
import { useInView } from "framer-motion";
import RevealBottom from "../animations/RevealBottom";

export default function Navbar({
  aboutMeRef,
  scroll,
  projectsRef,
  headerRef,
  footerRef,
  educationRef,
}) {
  const aboutMeInView = useInView(aboutMeRef, { amount: 0.6 });
  const educationInView = useInView(educationRef, { amount: 0.6 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const footerInView = useInView(footerRef, { amount: 0.6 });

  return (
    <div style={{ display: "absolute" }}>
      <nav className="navbar">
        <RevealTop>
          <h1 onClick={() => scroll(headerRef)}>Ian Kernohan</h1>
        </RevealTop>
        <RevealTop>
          <span
            onClick={() => scroll(aboutMeRef)}
            className={aboutMeInView ? "active" : ""}
          >
            About Me
          </span>
        </RevealTop>
        <RevealTop>
          <span
            onClick={() => scroll(educationRef)}
            className={educationInView ? "active" : ""}
          >
            Education
          </span>
        </RevealTop>
        <RevealTop>
          <span
            onClick={() => scroll(projectsRef)}
            className={projectsInView ? "active" : ""}
          >
            Projects
          </span>
        </RevealTop>
        <RevealTop>
          <span
            onClick={() => scroll(footerRef)}
            className={footerInView ? "active" : ""}
          >
            Contact
          </span>
        </RevealTop>

        <div className="navbar-bottom">
          <RevealBottom>
            <a
              href="../resume.pdf"
              onClick={() => document.title("Resume")}
              target="_blank"
            >
              <button className="outline-button">Resume</button>
            </a>
          </RevealBottom>
          <RevealBottom>
            <button className="outline-button">Play Minesweeper</button>
          </RevealBottom>
          <RevealBottom>
            <a href="https://github.com/iankernohan" target="_blank">
              <FaGithub />
            </a>
          </RevealBottom>
        </div>
      </nav>
    </div>
  );
}
