import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//import { Container, Row, Col } from "reactstrap";
//import logo from "../../Images/rmdb-logo.jpg";
//import tmdb from "../../Images/rmdb-tmdb-logo.jpg";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <img
            className="rmdb-logo"
            src="./images/reactMovie_logo.png"
            alt="rmdb-logo"
          />
        </Link>
        <img
          className="rmdb-tmdb-logo float-right "
          src="./images/tmdb_logo.png"
          alt="rmdb-tmdb-logo"
        />
      </div>
    </div>
  );
};

export default Header;
