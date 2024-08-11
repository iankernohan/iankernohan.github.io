import RevealLeft from "../animations/RevealLeft";
import RevealRight from "../animations/RevealRight";

export default function Header({ headerRef }) {
  return (
    <section className="header" ref={headerRef}>
      <div className="header-content">
        <div>
          <RevealLeft>
            <h3>
              Hi! I&apos;m <strong>Ian</strong>
            </h3>
            <h4>Software Developer</h4>
          </RevealLeft>
        </div>
        <div className="p">
          <RevealRight>
            <p>
              Welcome to my portfolio website! I&apos;m Ian, a self-taught
              programmer, and this is where I showcase my passion for making
              awesome applications and websites. Explore my projects and
              let&apos;s connect!
            </p>
          </RevealRight>
        </div>
      </div>
    </section>
  );
}
