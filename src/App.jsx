import { useState } from "react";
import Header from "../src/components/Header/Header"; // Correct Header import
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import "./App.css"; // for layout styling

const App = () => {
  const [activeSection, setActiveSection] = useState("about"); // Default to 'about' section

  return (
    <div className="app-container">
      <Header onNavigate={setActiveSection} />{" "}
      {/* Pass the setActiveSection function to Header */}
      <main className="content">
        {activeSection === "about" && <About />}
        {activeSection === "experience" && <Experience />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
