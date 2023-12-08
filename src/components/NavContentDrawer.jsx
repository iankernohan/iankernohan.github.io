import { useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function NavContentDrawer(
  aboutMeRef,
  projectsRef,
  headerRef,
  footerRef,
  educationRef,
  scroll
) {
  const aboutMeInView = useInView(aboutMeRef, { amount: 0.6 });
  const educationInView = useInView(educationRef, { amount: 0.6 });
  const projectsInView = useInView(projectsRef, { amount: 0.5 });
  const footerInView = useInView(footerRef, { amount: 0.6 });

  return (
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
        <button className="outline-button">Play Minesweeper</button>
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
  );
}

export default NavContentDrawer;
