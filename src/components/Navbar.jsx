import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>
          <span>Influence</span>Hub
        </h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#leaderboard">Leaderboard</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#download">Download</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;