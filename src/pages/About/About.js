import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ApnaStoreLogo from '../../assets/logo.png';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="background-overlay">
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="my-5 text-center">
          <img
            src={ApnaStoreLogo}
            alt="Apna Store Logo"
            className="img-fluid logo-img"
          />
        </Col>
        <Col md={6} className="my-5">
          <h2 className="display-4 text-center">About Us</h2>
          <p className="lead">
            Welcome to Apna Store, your ultimate online shopping destination.
          </p>
          <p>
            At Apna Store, we believe in delivering an exceptional shopping experience. Our diverse range of products, unbeatable prices, and top-notch customer service set us apart from the rest.
          </p>
          <p>
            Explore our website to discover the latest trends in fashion, cutting-edge electronics, and stylish home essentials. We are committed to making your online shopping journey enjoyable and convenient.
          </p>
          <NavLink to="/products" className="text-decoration-none">
            <div className='mt-3 text-center'>
            <Button variant="primary" className="mt-3">
              Explore Our Products
            </Button>
            </div>
          </NavLink>
        </Col>
        </Row>
    </Container>
    </div>
    </div>
  );
};

export default AboutPage;
