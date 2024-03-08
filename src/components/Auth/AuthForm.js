import React, { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import "./AuthForm.css";

const AuthPage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    let url;

    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjx4FhYqPFnze6jTZ9z7FSAO1We42aynQ';
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjx4FhYqPFnze6jTZ9z7FSAO1We42aynQ';
    }

    try {
        let response =  await fetch(url,{
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true
            }),
            headers:{
              'Content-Type': 'application/json'
            }
       })

        let data = await response.json();

        setIsLoading(false);

        if(response.ok){
            if(data.registered){
                authCtx.login(data.idToken);
                alert('Log in successfully');
            } else {
                alert('Sign up successfully');
            }
            setEmail('');
            setPassword('');
          }
          else {
            let errorMessage = 'Authentication failed...'
            if(data && data.error && data.error.message){
                errorMessage =  data.error.message;
            }
              throw new Error(errorMessage);
          }

        // Redirect to "/products" after a successful login
        navigate(isLogin ? "/products" : "/signup");

     } catch (error) {
        setIsLoading(false);
        alert(error.message);
     }

  }

  return (
    <Container fluid className="auth-form mb-4">
      <Row className="align-items-center justify-content-center">
        <Col md={7} lg={6} xl={6}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="login_image"
          />
        </Col>
        <Col md={4} lg={5} xl={5} className="shadow p-4">
          <Form onSubmit={submitHandler}>
            <h1 className="text-center">{isLogin ? "Login" : "Sign Up"}</h1>

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

            <Form.Group className="mb-4">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={passwordHandler}
              />
              <a href="/forgot-Password" className="float-end text-decoration-none">
                Forgot password?
              </a>
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="primary" className="mt-3 px-4">
              {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Create new account')}
              </Button>
            </div>

            <div className="text-center mt-4">
            <Button
              className="transparent-button border-0"
              onClick={() => {
                switchAuthModeHandler();
                navigate(isLogin ? "/signup" : "/login");
              }}      
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
