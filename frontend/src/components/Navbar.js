import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function CustomNavbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-lg" style={{ zIndex: 10 }}> {/* Lowered the z-index */}
      <Container style={{ maxWidth: '1200px', height: '70px' }}> {/* Increased the max width */}
        <Navbar.Brand as={Link} to="/Home">
          HMQS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link> {/* Corrected spelling of "Dashboard" */}
            <Nav.Link as={Link} to="/userAdd">Add User</Nav.Link>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown title="User Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
