import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="nav-bar__search">
      <input type="text" placeholder="Search" name="search" className="field" />
    </div>
  );
}

