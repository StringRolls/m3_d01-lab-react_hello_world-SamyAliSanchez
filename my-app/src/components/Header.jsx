import ironhacklogo from "../images/ironhack-logo-xs.png";
import menuLogo from "../images/menu-top-xs.png";
import "../components/Header.css";

export default function Header() {
  return (
    <div className="navbar">
      <img src={ironhacklogo} alt="logo" className="logo" />
      <img src={menuLogo} alt="logo" className="menu" />
    </div>
  );
}
