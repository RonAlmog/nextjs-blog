import Link from "next/link";
import { Nav } from "react-bootstrap";
const MainNav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/" passHref>
            <Nav.Link>Navbar</Nav.Link>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" passHref href="/">
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/posts" passHref>
                  <Nav.Link>Posts</Nav.Link>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact" passHref>
                  <Nav.Link>Contact</Nav.Link>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNav;
