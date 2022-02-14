 
import { Navbar, Nav,NavDropdown, Container   } from 'react-bootstrap';

function NavBarComp() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Khemiri Tarak</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Services</Nav.Link>
        <Nav.Link href="#link">Porfolio</Nav.Link>
        <NavDropdown title="Clients" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Talan</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Kaptin Digital</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Mister Chips</NavDropdown.Item>
   
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavBarComp;