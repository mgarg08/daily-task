import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>

          <li className="dropdown">
            <a href="#" class="dropbtn">
              Services
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">App Development</a>
              </li>
              <li>
                <a href="#">SEO Services</a>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" class="dropbtn">
              Products
            </a>
            <ul className="dropdown-content">
              <li>
                <a href="#">Product 1</a>
              </li>
              <li>
                <a href="#">Product 2</a>
              </li>
              <li>
                <a href="#">Product 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
