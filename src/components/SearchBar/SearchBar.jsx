import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="navbar__search">
      <input type="text" placeholder="Search name or symbol" name="search" className="field" />
    </div>
  );
}

