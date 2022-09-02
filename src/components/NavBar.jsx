import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="logo">
            <img src="./logo.png" style={{ width: "110px", height: "60px" }} alt="Log" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Tv Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
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
  }
}

export default NavBar;
