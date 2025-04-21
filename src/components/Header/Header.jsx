import Logo from "./Logo";
import NavItems from "./Navitems";
import "./Header.css";

const Header = ({ onNavigate }) => {
  return (
    <header className="header">
      <Logo />
      <NavItems onNavigate={onNavigate} />
    </header>
  );
};

export default Header;
