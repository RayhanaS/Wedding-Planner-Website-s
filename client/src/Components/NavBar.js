import React from 'react'
import {Navbar,Container,Form,Button,Nav,NavDropdown,FormControl  } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import Logo from '../Image/Logo.jpg';
function NavBar() {
  let history = useHistory()
  const user = JSON.parse(localStorage.getItem('current_user')) // to get tthe data from localStorage

  const Logout = () => {
    localStorage.clear();
    history.push('/')
    window.location.reload();
  }
  return (
    <div>
         <Navbar id="navbar" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img  className="na"src={Logo} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/" href="#home"> Home </Nav.Link>
            <Nav.Link  href="#about" >ABOUT</Nav.Link>
            <Nav.Link  href="#portfolio" >PORTFOLIO</Nav.Link>
            <Nav.Link  href="#services">SERVICES</Nav.Link> 
            
            <Nav.Link  href="#contact">RESERVATIONS</Nav.Link>
            <Nav.Link  href="#avis">TESTIMONIALS</Nav.Link>
            {user?.role == "admin" ?
            <Nav.Link as={Link} to="/Reservations"> RESERVATIONS LIST </Nav.Link>
             : 
            ''
            } 
      </Nav>
      <Form className="d-flex">
      {user ?<div>
                          <NavDropdown title={<span><i class="fa fa-user"></i> {user?.username}</span>} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=> Logout()}>Logout</NavDropdown.Item>
                          </NavDropdown>
                      </div>
            : 
            <Link to='/Login'><Button variant="outline-success" className="b-0" > <i class="fa fa-user"></i>Login</Button></Link>}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar