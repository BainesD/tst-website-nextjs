import logo from "../shared/images/TSTALLogoCircle.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">
        <img className="brand-logo" src={logo} />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Learn
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="https://thesatanictemple.com/pages/about-us"
                target="blank"
              >
                About TST
              </a>
              <a class="dropdown-item" href="#">
                FAQ
              </a>
              <a class="dropdown-item" href="#">
                Holidays
              </a>
              <a class="dropdown-item" href="#">
                Media
              </a>
              <a class="dropdown-item" href="#">
                Satanic Ministry
              </a>
              <a class="dropdown-item" href="#">
                Satanic Weddings
              </a>
              <a class="dropdown-item" href="#">
                Press Center
              </a>
              <a class="dropdown-item" href="#">
                Newsletter Archive
              </a>
              <a class="dropdown-item" href="#">
                Visit Us
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Join
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="https://thesatanictemple.com/pages/about-us"
                target="blank"
              >
                Become A Member
              </a>
              <a class="dropdown-item" href="#">
                Social Media
              </a>
              <a class="dropdown-item" href="#">
                Contact Us
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Shop All
              </a>
              <div className="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Shirts
              </a>
              <a class="dropdown-item" href="#">
                Gear
              </a>
              <a class="dropdown-item" href="#">
                Accessories
              </a>
            </div>
          </li>
        </ul>
        <button className="navbar-button">Donate</button>
      </div>
    </nav>
  );
}
