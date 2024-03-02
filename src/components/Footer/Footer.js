import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Instagram, Twitter, Facebook } from "react-feather";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-2">
      <Container>
        <Row>
          <Col lg={3} md={6} className="text-center">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="text-center">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home & Furniture</li>
              <li>Others</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="text-center">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="text-center" >
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div>
                  <Instagram stroke="pink" strokeWidth="2" />
                  <span className="ms-2">Instagram</span>
                </div>
              </li>
              <li className="mb-2">
                <div>
                  <Twitter fill="blue" stroke="blue" strokeWidth="2" />
                  <span className="ms-2">Twitter</span>
                </div>
              </li>
              <li className="mb-2">
                <div>
                  <Facebook stroke="blue" strokeWidth="2" />
                  <span className="ms-2">Facebook</span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <p>Copyright &copy; 2024 Apna Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
