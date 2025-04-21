import "./Main.css"; // This imports the combined CSS file

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>
            A task management system with real-time updates, PDF export, and
            authentication built with Next.js and Node.js.
          </p>
          <a
            href="https://github.com/ujwelprakash/task.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>

        <div className="project-card">
          <h3>KML Viewer App</h3>
          <p>
            A web app to visualize KML data with location plotting using React
            and Leaflet. Ideal for geospatial data.
          </p>
          <a
            href="https://github.com/ujwelprakash/kml-viewer-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>

        <div className="project-card">
          <h3>Messaging System</h3>
          <p>
            A MERN-based messaging app with online/offline status, user roles,
            and secure communication.
          </p>
          <a href="#">Coming Soon</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
