import { Fragment, useContext } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import HeaderCartButton from './HeaderCartButton';
import './Header.css';
import navbarImage from '../../assets/logo.png';

const Header = () => {
    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const navigate = useNavigate();

    const logoutHandler = () => {
      authCtx.logout();
      navigate('/login'); // Redirect to login page after logout
    };

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
                  <Nav className="m-auto align-items-center">
                    <NavLink to="/" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>HOME</NavLink>
                    <NavLink to="/products" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>PRODUCTS</NavLink>
                    <NavLink to="/about" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>ABOUT</NavLink>
                    <NavLink to="/contact-us" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>CONTACT US</NavLink>
                    {!isLoggedIn && <NavLink to="/login" className='text-decoration-none text-white text-center fw-bold mx-3 mb-2'>LOGIN</NavLink>}
                    {isLoggedIn && (
                    <button onClick={logoutHandler} className='btn text-decoration-none text-white text-center fw-bold mx-3 mb-2'>LOGOUT</button>
                )}
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