import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import contactusImage from '../../assets/contact-us.jpg';
import './ContactUs.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
        name: name,
        email: email,
        phone: phone
    }
    try {
        const response = await axios.post('https://e-commerce-1db2b-default-rtdb.firebaseio.com/contact.json', formData);

        if(response.status !== 200){
            throw new Error('Something went wrong...');
        }

        console.log('Form submitted successfully:', response);
        
        setName('');
        setEmail('');
        setPhone('');
      } catch (error) {
        console.error(error.message);
      }
  };

  return (
    <Container className="contact-form mb-4">
     <Row className='align-items-center justify-content-between'>
        <Col md={7} lg={6} xl={6}>
          <img
            src={contactusImage}
            className="img-fluid"
            alt="Contact-Us"
          />
        </Col>
        <Col md={4} lg={5} xl={5} className="shadow p-4">
          <Form onSubmit={handleSubmit}>
            <h1 className="text-center">Contact Us</h1>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter Your Name"
                onChange={nameHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={emailHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="phone">Phone</Form.Label>
              <Form.Control
                type="number"
                id="phone"
                name="phone"
                value={phone}
                placeholder="Enter Your Phone Number"
                onChange={phoneHandler}
              />
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="primary" className="mt-3 px-4">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
