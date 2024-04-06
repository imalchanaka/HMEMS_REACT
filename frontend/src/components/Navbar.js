import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function CustomNavbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow-lg"
      style={{ zIndex: 5 }}
    >
      <Container style={{ maxWidth: "1200px", height: "70px" }}>
        <Navbar.Brand as={Link} to="/Home">
          HMQS
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "gray" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: "black" }}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{ color: "black" }}>
              Add User
            </Nav.Link>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown title="User Profile" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={handleLogout}
                  style={{ marginLeft: "0px" }}
                >
                  Log out
                </NavDropdown.Item>
                
                  <NavDropdown.Item  as={Link} to="editProfile" style={{ marginLeft: "0px" }}>
                    Edit Profile
                  </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login" style={{ color: "black" }}>
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
