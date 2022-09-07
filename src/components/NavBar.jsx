import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();
  console.log("location", location);
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="logo">
          <img src="./logo.png" style={{ width: "110px", height: "60px" }} alt="Log" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={"nav-link" + (location.pathname === "/" ? " active" : "")} to="/">
              Home
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/twshows" ? " active" : "")}
              to="/twshows"
            >
              Tv Shows
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/movies" ? " active" : "")}
              to="/movies"
            >
              Movies
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/recentlyadded" ? " active" : "")}
              to="/recentlyadded"
            >
              Recently Added
            </Link>
            <Link
              className={"nav-link" + (location.pathname === "/mylist" ? " active" : "")}
              to="/mylist"
            >
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex">
            <i className="bi bi-search me-3"></i>
            <div id="kids">KIDS</div>
            <i className="bi bi-bell-fill mx-3"></i>
            <i className="bi bi-person-fill"></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
