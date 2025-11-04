import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Navbar className="navbar-modern py-3" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold text-white">ReerUp App</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
