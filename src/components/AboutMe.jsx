/* eslint-disable react/no-unescaped-entities */
import FadeIn from "../animations/FadeIn";

export default function AboutMe({ aboutMeRef }) {
  return (
    <section className="about-me" ref={aboutMeRef}>
      <div className="about-me-container">
        <FadeIn direction="left" className="heading">
          <h2>About Me</h2>
        </FadeIn>
        <FadeIn direction="right" className="image">
          <img src="../me-dancing.JPEG" alt="me" />
        </FadeIn>
        <FadeIn direction="left">
          <p>
            My name is Ian Kernohan, I'm a self taught full-stack web developer.
            I graduated from Wayne State University with a Bachelors Degree in
            Psychology in 2022. Since then, I've continued my learning with
            code. Starting with Python, I soon found my way to web development
            with JavaScript. Currently, I'm a fullstack developer for UWM. My
            love for learning has found itself right at home in the world of
            programming. With endless routes to take, I'm confident my learning
            journey will continue indefinetely.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
