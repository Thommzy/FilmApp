import React from "react";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
import logo from "../../Images/rmdb-logo.jpg";
import tmdb from "../../Images/rmdb-tmdb-logo.jpg";

const Header = () => {
  return (
    <div className="mainNavbar">
      <Container fluid>
        <div className="rmdb-header">
          <div className="rmdb-header-content">
            <img className="rmdb-logo" src={logo} alt="rmdb-logo" />
            <img
              className="rmdb-tmdb-logo float-right "
              src={tmdb}
              alt="rmdb-tmdb-logo"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
