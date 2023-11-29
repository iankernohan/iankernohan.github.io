import RevealBottom from "../animations/RevealBottom";
import Contact from "./Contact";

export default function Footer({
  headerRef,
  aboutMeRef,
  scroll,
  projectsRef,
  educationRef,
  footerRef,
}) {
  return (
    <footer className="footer" ref={footerRef}>
      <RevealBottom>
        <Contact />
      </RevealBottom>
      <RevealBottom delay={0.3}>
        <section className="navigation">
          <h4>Navigation</h4>
          <div onClick={() => scroll(headerRef)}>Top</div>
          <div onClick={() => scroll(aboutMeRef)}>About Me</div>
          <div onClick={() => scroll(educationRef)}>Education</div>
          <div onClick={() => scroll(projectsRef)}>Projects</div>
        </section>
      </RevealBottom>
      <RevealBottom delay={0.4}>
        <section className="links">
          <h4>Links</h4>
          <div>
            <a
              href="https://github.com/iankernohan"
              style={{ textDecoration: "none", color: "#c5c6c7" }}
            >
              GitHub
            </a>
          </div>
        </section>
      </RevealBottom>
      <RevealBottom delay={0.5}>
        <section className="links">
          <h4>Contact Info</h4>
          <p>kernohani1@gmail.com</p>
        </section>
      </RevealBottom>
    </footer>
  );
}
