import { FaGithub } from "react-icons/fa";
import RevealTop from "../animations/RevealTop";
import { useInView } from "framer-motion";
import RevealBottom from "../animations/RevealBottom";
import NavDrawer from "./NavDrawer";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  aboutMeRef,
  projectsRef,
  headerRef,
  footerRef,
  educationRef,
  isMobileWidth,
}) {
  const aboutMeInView = useInView(aboutMeRef, { amount: 0.6 });
  const educationInView = useInView(educationRef, { amount: 0.6 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const footerInView = useInView(footerRef, { amount: 0.6 });

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const showDrawer = () => {
    setDrawerIsOpen(true);
  };

  const onClose = () => {
    setDrawerIsOpen(false);
  };

  function scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setDrawerIsOpen(false);
  }

  return (
    <div style={{ display: "absolute" }}>
      <nav className="navbar">
        <RevealTop>
          <h1 onClick={() => scroll(headerRef)}>Ian Kernohan</h1>
        </RevealTop>

        {isMobileWidth ? (
          <NavDrawer
            drawerIsOpen={drawerIsOpen}
            showDrawer={showDrawer}
            onClose={onClose}
          >
            <div className="nav-drawer-content">
              <section>
                <div>
                  <span
                    onClick={() => scroll(aboutMeRef)}
                    className={aboutMeInView ? "active" : ""}
                  >
                    About Me
                  </span>
                </div>
                <div>
                  <span
                    onClick={() => scroll(educationRef)}
                    className={educationInView ? "active" : ""}
                  >
                    Education
                  </span>
                </div>
                <div>
                  <span
                    onClick={() => scroll(projectsRef)}
                    className={projectsInView ? "active" : ""}
                  >
                    Projects
                  </span>
                </div>
                <div>
                  <span
                    onClick={() => scroll(footerRef)}
                    className={footerInView ? "active" : ""}
                  >
                    Contact
                  </span>
                </div>
              </section>
              <section>
                <div>
                  <a
                    href="../resume.pdf"
                    onClick={() => document.title("Resume")}
                    target="_blank"
                  >
                    <button className="outline-button">Resume</button>
                  </a>
                </div>
                <Link to="minesweeper">
                  <button className="outline-button">Play Minesweeper</button>
                </Link>
                <div style={{ marginTop: "auto", fontSize: "2rem" }}>
                  <a
                    href="https://github.com/iankernohan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </section>
            </div>
          </NavDrawer>
        ) : (
          <>
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
                <Link to="minesweeper">
                  <button className="outline-button">Play Minesweeper</button>
                </Link>
              </RevealBottom>
              <RevealBottom>
                <a
                  href="https://github.com/iankernohan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </RevealBottom>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
