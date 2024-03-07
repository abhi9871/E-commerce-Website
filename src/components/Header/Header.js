import { Fragment } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import navbarImage from '../../assets/logo.png';

const Header = () => {
        return (
            <Fragment>
            <header>
            <Navbar expand="lg" className="bg-dark fixed-top">
              <Container>
                <Navbar.Brand>
                <NavLink to = "/" className="text-decoration-none">
                  <div className='d-flex justify-center align-items-center text-white'>
                    <img src = {navbarImage} className='navbar-img' alt='Apna Store'/>
                    <h4 className='mx-2'>Apna Store</h4>
                  </div>
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-icon' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                    <NavLink to="/" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>HOME</NavLink>
                    <NavLink to="/products" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>PRODUCTS</NavLink>
                    <NavLink to="/about" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>ABOUT</NavLink>
                    <NavLink to="/contact-us" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>CONTACT US</NavLink>
                    <NavLink to="/login" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>LOGIN</NavLink>
                  </Nav>
                  <HeaderCartButton />
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </header>
            </Fragment>
    )
}

export default Header;