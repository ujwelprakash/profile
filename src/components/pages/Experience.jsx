import "./Main.css"; // This imports the combined CSS file

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>My Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Frontend Trainee</h3>
          <p>
            <strong>Company:</strong> Dotcod.
          </p>
          <p>
            <strong>Duration:</strong> Apr 2025 – Present
          </p>
          <p>
            Worked on building scalable React applications, improving UI/UX, and
            integrating APIs with modern frontend best practices.
          </p>
        </div>

        <div className="experience-item">
          <h3>Frontend Developer</h3>
          <p>
            <strong>Company:</strong> Upasanau.com.
          </p>
          <p>
            <strong>Duration:</strong> Aug-2024 – mar-2025
          </p>
          <p>
            Assisted in building responsive landing pages, working with
            HTML/CSS/JavaScript, and collaborating with designers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
