import RevealLeft from "../animations/RevealLeft";

export default function Education({ educationRef }) {
  return (
    <section className="education" ref={educationRef}>
      <RevealLeft>
        <h2>Education</h2>
      </RevealLeft>
      <RevealLeft>
        <div className="education-content">
          <div>
            <a href="https://wayne.edu/" rel="noreferrer" target="_blank">
              <img src="../wayne_logo.png" alt="wayne logo" />
              <h3>Wayne State</h3>
            </a>
            <p>
              I attended Wayne State University from 2018-2022, where I
              graduated Summa Cum Laude with a Bachelors degree in Psychology
              and a minor in Philosophy. Oddly enough, it was through logic
              based Philosphy courses that I discovered my love for logic and
              eventually programming.
            </p>
          </div>

          <div>
            <a href="https://www.udemy.com/" rel="noreferrer" target="_blank">
              <img src="../udemy_logo.png" alt="udemy logo" />
              <h3>Udemy</h3>
            </a>

            <p>
              Udemy is where I've learned most of what I know about programming.
              I started on Udemy with Dr. Angela Yu's{" "}
              <i>100 Days of Code: The Complete Python Pro Bootcamp for 2023</i>
              . After deciding on web development as a path I completed Colt
              Steele's <i>The Web Developer Bootcamp 2023</i>. Currently, I'm
              taking Jonas Schmedtmann's{" "}
              <i>The Ultimate React Course: React, Redux & More</i>.
            </p>
          </div>

          <div>
            <img src="../misc-icon.png" alt="misc logo" />
            <h3>Misc.</h3>
            <p>
              I've learned a bit about programming through a few other
              miscellanious sources such as YouTube, LeetCode and freeCodeCamp.
              I've spent countless hours watching programming videos on YouTube,
              including Harvard's CS50, thanks to freeCodeCamp. LeetCode was one
              of the first programming websites I learned about and have enjoyed
              spending lots of time on practice problems and interview prep.
            </p>
          </div>
        </div>
      </RevealLeft>
    </section>
  );
}
