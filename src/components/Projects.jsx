import FadeIn from "../animations/FadeIn";

export default function Projects({ projectsRef }) {
  return (
    <section className="projects" ref={projectsRef}>
      <FadeIn direction="left">
        <h2>Projects</h2>
      </FadeIn>
      <div className="project-container">
        <FadeIn>
          <h3>Elliott & Murray</h3>
          <a
            href="https://elliottandmurraybuilders.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="elliottandmurray.png" alt="hi" />
          </a>
          <p>
            A sleek, fully responsive marketing site developed with React.
            Discover Elliott & Murray builders to start your nect home
            improvement project.
          </p>
        </FadeIn>

        <FadeIn>
          <h3>Marikoz</h3>
          <a
            href="https://github.com/iankernohan/ConsoleGame"
            rel="noreferrer"
            target="_blank"
          >
            <img src="marikoz.png" alt="hi" />
          </a>
          <p>
            A text-based adventure game in C#, where players navigate rooms,
            battle enemies, and seek the hidden jewel in the dungeons of
            Marikoz.
          </p>
        </FadeIn>

        <FadeIn>
          <h3>Exercise Tracker</h3>
          <a
            href="https://exercise-tracker-pzks.onrender.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src="exercise-tracker.png" alt="hi" />
          </a>
          <p>
            A fullstack MERN application, using tools such as Tailwind and React
            Router to create a SPA for tracking exercise history.
          </p>
        </FadeIn>

        <FadeIn>
          <h3>Weather API</h3>
          <a
            href="https://iankernohan.github.io/weatherAPI/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="weatherapi.png" alt="weather app image" />
          </a>
          <p>
            A simple React application that gathers weather data from weather
            and location API's.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
