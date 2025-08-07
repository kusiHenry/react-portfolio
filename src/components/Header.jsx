function Header({ onNavigate }) {
  return (
    <header className="header">
      <h1>My React Portfolio</h1>
      <nav>
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("projects")}>Projects</button>
      </nav>
    </header>
  );
}

export default Header;
