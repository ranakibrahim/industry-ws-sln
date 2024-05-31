import "./NavBar.scss";
import logo from "../../assets/icons/navbar-logo.svg";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="wealthsimple logo" />
      <ul className="navbar__list">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Move</li>
        <li className="navbar__item">Activity</li>
        <li className="navbar__item">Tax</li>
        <li className="navbar__item">Mortgage</li>
      </ul>
    </nav>
  );
}
