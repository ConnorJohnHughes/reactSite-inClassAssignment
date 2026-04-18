import "../components/Header.css"

export default function Header() {
  return (
    <header className="header" id="header">
      <img src="img/lort.jpg" alt="lotr-logo" className="nav-logo"/>
      <h1 className="title">The Free Peoples of Middle-Earth</h1>
      
      <nav>
        <a href="#hero" className="nav-link">HOME</a>
        <a href="#map" className="nav-link">MAP</a>
        <a href="#heroes" className="nav-link">HEROES</a>
        <a href="#villains" className="nav-link">VILLAINS</a>
      </nav>
    </header>
  );
}