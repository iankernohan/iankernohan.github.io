import RevealLeft from "../animations/RevealLeft";

export default function Header({ headerRef }) {
  return (
    <section className="header" ref={headerRef}>
      <RevealLeft>
        <div className="headerText">
          <h3>
            Hi! I'm <strong>Ian</strong>
          </h3>
          <h4>Web Developer</h4>
        </div>
      </RevealLeft>
    </section>
  );
}
