import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from "./../../../Hooks/useAuth.js";

const Header = () => {
  const { allContexts } = useAuth();
  const { user, logOut } = allContexts;

  return (
    <div>
      <>
        <Navbar style={{ backgroundColor: "#231F20" }} expand="lg">
          <Container>
            <Navbar.Brand>
              <NavLink s={NavLink} to="/">
                
                <h1>MOBOSHOP</h1>
            </NavLink>
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center ">
                <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/" >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="text-white fw-bolder fs-5" as={NavLink} to="/products">
                  Products
                </Nav.Link>
                <Nav.Link className="text-white fw-bolder fs-5" as={NavLink} to="/contact">
                  Contact Us
                </Nav.Link>

                

                {!user.email ? (
                  <>
                    <Nav.Link
                      className="text-white fw-bolder fs-5"
                      as={NavLink}
                      to="/signin"
                    >
                      <button className="btn-style">Login</button>
                    </Nav.Link>

                    <Nav.Link
                      className="text-white fw-bolder fs-5"
                      as={NavLink}
                      to="/signup"
                    >
                      <button className="btn-style">Sign up</button>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      className="text-white fw-bolder fs-5"
                      as={NavLink}
                      to="/dashboard"
                    >
                      Dashboard
                    </Nav.Link>
                    <button onClick={logOut} className="btn-style">
                      Sign Out
                    </button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;