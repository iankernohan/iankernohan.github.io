import RevealRight from "../animations/RevealRight";

export default function AboutMe({ aboutMeRef }) {
  return (
    <section className="about-me" ref={aboutMeRef}>
      <RevealRight>
        <div className="image">
          <img src="../me.JPG" alt="me" />
        </div>
      </RevealRight>
      <RevealRight>
        <div>
          <h2>About Me</h2>
          <p>
            My name is Ian Kernohan, I'm a self taught full-stack web developer.
            I graduated from Wayne State University with a Bachelors Degree in
            Psychology in 2022. Since then, I've continued my learning with
            code. Starting with Python, I soon found my way to web development
            with JavaScript. My love for learning has found itself right at home
            in the world of programming. With endless routes to take, I'm
            confident my learning journey will continue indefinetely.
          </p>
        </div>
      </RevealRight>
    </section>
  );
}
