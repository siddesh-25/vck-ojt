import {Link} from 'react-router-dom';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function Header() {
  return (
    <Navbar expand="lg" className="nav-hed-ove" >
      <Container>
        <Navbar.Brand href="/home"><h2>Vivekanand College</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav  className="ms-auto nav-hed ">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link> 
            <Button className='but-hed' variant="success" href='/admissions'>Apply Now</Button>
          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;