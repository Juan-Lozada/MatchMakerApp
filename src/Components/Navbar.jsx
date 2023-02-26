import { Container, 
    Nav, 
    Navbar, 
    Button } 
  from 'react-bootstrap';
  
  import { Link } from "react-router-dom";
  
  import logo from '../img/favicon.png';
  
  import '../styles/navbar.css';
  
  export default function Nvbar() {
  
    return (
      <>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
          <Container>          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Button
                // onClick={ '' }
                className="btn-ingresar btn-navbar btn-user"
                variant="outline-light"
                size="lg">
                Ingresar
              </Button>
              <Button
                // onClick={ '' }
                className="btn-registrar btn-navbar btn-user"
                variant="outline-light"
                size="lg">
                Registrar
              </Button>            
              </Nav>
            </Navbar.Collapse>
            <Link to="/" className="text-decoration-none">
              <Navbar.Brand>
              <img 
                src={ logo } 
                alt="" 
              />
                Match Maker
              </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </>
    );
  };




// import React from 'react'
// import { Navbar, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom'

// export default function Nvbar() {

//     const activeLink = ({ isActive }) => (isActive ? 'active' : 'default')
//     return (
//         <>
//             <Navbar bg="light" className='px-4 '>
//                 <Container className='justify-content-start px-3 '>
//                     <Navbar.Brand className='justify-content-start p-2'>
//                         <img
//                             src={"https://cdn-icons-png.flaticon.com/512/272/272658.png"}
//                             width="150"
//                             height="75"
//                             className="d-inline-block align-top"
//                             alt='brand-img'
//                         />
//                     </Navbar.Brand>
//                 </Container>
//                 <Container className='d-flex flex-row-reverse px-5 '>
//                     <NavLink className={activeLink} to='/Login' style={{ textDecoration: 'none' }}>
//                         Login
//                     </NavLink>
//                 </Container>
//                 <div>
//                     <NavLink className={activeLink} to='/Register' style={{ textDecoration: 'none' }}>
//                         Register
//                     </NavLink>
//                 </div>


//             </Navbar>
//         </>
//     )
// }