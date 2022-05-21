import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";
import { FaAngleDown } from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";

function Nav(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setInterval(() => {
      const userString = localStorage.getItem("USER_DATA");
      const user = JSON.parse(userString);
      setUser(user);
    }, []);
  });

  if (!user) {
    return (
      <div className="nav-container">
        <div className="title">TinyPostX</div>
        <ul className="menu">
          <li className="list">
            <Link to="/" className="navLink">
              Home
              <FaAngleDown className="logoLink" />
            </Link>
          </li>
          <li className="list">
            <Link to="/profile" className="navLink">
              Profile
              <FaAngleDown className="logoLink" />
            </Link>
          </li>
          <li className="list">
            <Link to="/sign-in" className="navLink" onClick={props.signIn}>
              Sign In
              <FaAngleDown className="logoLink" />
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="nav-container">
        <div className="title">TinyPostX</div>
        <ul className="menu">
          <li className="list">
            <Link to="/" className="navLink">
              Home
              <FaAngleDown className="logoLink" />
            </Link>
          </li>
          <li className="list">
            <Link to="/profile" className="navLink">
              Profile
              <FaAngleDown className="logoLink" />
            </Link>
          </li>
        </ul>
        <button className="btn-signout" onClick={props.handleMessageBox}>
          Sign out
          <BsBoxArrowRight className="logoLink1" />
        </button>
      </div>
    );
  }
}

export default Nav;
