import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Instagram, Twitter, Facebook } from 'react-feather';
import './Footer.css';  // Import your custom CSS file if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-2">
      <Container>
        <Row>
          <Col lg={3} md={6} className='text-center'>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className='text-center'>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home & Furniture</li>
              <li>Others</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className='text-center'>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className='text-center'>
            <h5>Follow Us</h5>
            <div className='d-flex justify-content-evenly'>
            <Instagram stroke='pink' stroke-width="2"/>
            <Twitter fill='blue' stroke='blue' stroke-width="2" />
            <Facebook stroke='blue' stroke-width="2" />
            </div>
          </Col>
        </Row>
        <Row className='mt-4 justify-content-center'>
          <Col lg={6} md={6} sm={4} className=''>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <p>&copy; 2024 Apna Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;