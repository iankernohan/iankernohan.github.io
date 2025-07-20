import FadeIn from "../animations/FadeIn";
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
      <FadeIn>
        <Contact />
      </FadeIn>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20%",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <FadeIn delay={0.4}>
          <section className="links">
            <h4>Links</h4>
            <div>
              <a
                href="https://github.com/iankernohan"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/ian-kernohan-10274a269/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section className="navigation">
            <h4>Navigation</h4>
            <div onClick={() => scroll(headerRef)}>Top</div>
            <div onClick={() => scroll(aboutMeRef)}>About Me</div>
            <div onClick={() => scroll(educationRef)}>Education</div>
            <div onClick={() => scroll(projectsRef)}>Projects</div>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section className="links">
            <h4>Contact Info</h4>
            <p>kernohani1@gmail.com</p>
          </section>
        </FadeIn>
      </div>
    </footer>
  );
}
