import "./NavBar.scss";
import logo from "../../assets/icons/navbar-logo.svg";
import profile from "../../assets/icons/profile-icon.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <section className="navbar__logo-list">
        <img src={logo} alt="wealthsimple logo" />
        <ul className="navbar__list">
          <li
            className="navbar__item"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li className="navbar__item">Move</li>
          <li className="navbar__item">Activity</li>
          <li className="navbar__item">Tax</li>
          <li className="navbar__item">Mortgage</li>
        </ul>
      </section>
      <section className="navbar__search-profile">
        <SearchBar />
        <img src={profile} alt="" className="navbar__profile-icon" />
      </section>
    </nav>
  );
}
