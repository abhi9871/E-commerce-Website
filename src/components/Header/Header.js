import { Fragment } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import navbarImage from '../../assets/logo.png';
import headerImage from '../../assets/ecommerce.jpg';

const Header = () => {
        return (
            <Fragment>
            <header>
            <Navbar expand="lg" className="bg-dark">
              <Container>
                <Navbar.Brand href="#home">
                  <div className='d-flex justify-center align-items-center text-white'>
                    <img src = {navbarImage} className='navbar-img' alt='Apna Store'/>
                    <h4 className='mx-2'>Apna Store</h4>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-icon' />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                    <Nav.Link href="#home" className='text-white text-center fw-bold mx-2'>HOME</Nav.Link>
                    <Nav.Link href="#" className='text-white text-center fw-bold mx-2'>STORE</Nav.Link>
                    <Nav.Link href="#" className='text-white text-center fw-bold mx-2'>ABOUT</Nav.Link>
                  </Nav>
                  <HeaderCartButton />
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <div className='main-image'>
            <img src={headerImage} alt='Welcome to Apna Store'></img>
            </div>
            </header>
            </Fragment>
    )
}

export default Header;