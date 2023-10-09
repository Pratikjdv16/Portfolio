import React from "react";
import "../Component/CSS/Navbar.css";
import { NavLink } from "react-router-dom";
// import Pratik_logo from "../Component/Icons/Pratik-lcon.png";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        {/* <div className="webTitle">
          <img src={Pratik_logo} alt="" />
        </div> */}

        <ul>
          <li>
            <NavLink id="homeNavBtn" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink id="aboutNavBtn" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink id="workNavBtn" to="/work">
              Work
            </NavLink>
          </li>
          <li>
            <NavLink id="contactNavBtn" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
