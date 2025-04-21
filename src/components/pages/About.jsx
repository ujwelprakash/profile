import "./Main.css"; // Imports shared styles
import profileImage from "../../assets/profile.png"; // Adjust the path as needed

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={profileImage} alt="Ujwel Prakash" className="profile-image" />

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m Ujwel Prakash – a frontend developer passionate about
            building beautiful, responsive websites and apps. I love working
            with React, Next.js, and Tailwind CSS.
          </p>
          <p>
            I enjoy solving UI/UX challenges, optimizing performance, and
            learning new technologies. I'm constantly exploring better ways to
            deliver high-quality, scalable, and maintainable front-end
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
