/* eslint-disable react/no-unescaped-entities */
import RevealRight from "../animations/RevealRight";

export default function Projects({ projectsRef }) {
  return (
    <section className="projects" ref={projectsRef}>
      <RevealRight>
        <h2>Projects</h2>
      </RevealRight>
      <div className="project-container">
        <RevealRight>
          <h3>Exercise Tracker</h3>
          <img
            src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="hi"
          />
          <p>
            A fullstack MERN application, using tools such as Bootstrap and
            React Router to create a SPA for tracker exercise history.
          </p>
        </RevealRight>

        <RevealRight>
          <h3>Quiz App</h3>
          <img
            src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="hi"
          />
          <p>
            A React application made for studying. Upload custom problem sets
            and flashcards to imporve learning productivity!
          </p>
        </RevealRight>

        <RevealRight>
          <h3>Photo Gallery</h3>
          <img
            src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="hi"
          />
          <p>
            A React based portfolio website for photographer Ben Marino. Browse
            through galleries of photographs in a simplistic and pleasing
            design.
          </p>
        </RevealRight>

        <RevealRight>
          <h3>Weather API</h3>
          <img
            src="https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="hi"
          />
          <p>
            A simple React application that gathers weather data from weather
            and location API's.
          </p>
        </RevealRight>
      </div>
    </section>
  );
}
