const NavItems = ({ onNavigate }) => {
  return (
    <nav className="nav">
      <span onClick={() => onNavigate("about")}>About</span>
      <span onClick={() => onNavigate("experience")}>Experience</span>
      <span onClick={() => onNavigate("projects")}>Projects</span>
      <span onClick={() => onNavigate("skills")}>Skills</span>
      <span onClick={() => onNavigate("contact")}>Contact</span>
    </nav>
  );
};

export default NavItems;
