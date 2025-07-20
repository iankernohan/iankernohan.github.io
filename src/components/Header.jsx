import FadeIn from "../animations/FadeIn";

export default function Header({ headerRef }) {
  return (
    <section className="header" ref={headerRef}>
      <div className="header-content">
        <div>
          <FadeIn direction="right" delay="0">
            <h3>
              Hi! I&apos;m <strong>Ian</strong>
            </h3>
            <h4>Software Developer</h4>
          </FadeIn>
        </div>

        <div className="p">
          <FadeIn direction="right">
            <p>
              Welcome to my portfolio website! I&apos;m Ian, a self-taught
              programmer, and this is where I showcase my passion for making
              awesome applications and websites. Explore my projects and
              let&apos;s connect!
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
