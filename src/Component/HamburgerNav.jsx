import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/HamburgerNav.css";
import hamburger from "../Component/Icons/hamburger2-icon.png";
import cross from "../Component/Icons/cross2-icon.png";
import Logo from "../Component/Icons/portfolio-logo.png";

const HamburgerNav = () => {
  const [remove, setRemove] = useState({
    display: "none",
    height: "0rem",
    image: hamburger,
    borderBottom: "none",
  });

  const showHamburgerNav = () => {
    if (remove.display === "none") {
      return setRemove({
        display: "flex",
        height: "25.1rem",
        image: cross,
        borderBottom: "none",
      });
    } else {
      return setRemove({
        display: "none",
        height: "0rem",
        image: hamburger,
        borderBottom: "0.06rem solid #a14848",
      });
    }
  };

  // const removeHamburgerNav = () => {
  //   setRemove({ display: "none" });
  // };

  return (
    <>
      <section className="hamburger">
        <section
          style={{ borderBottom: remove.borderBottom }}
          className="hamburgerNav-section"
        >
          <div className="webTitle">
            <img src={Logo} alt="" />
          </div>
          <button onClick={showHamburgerNav} on className="showHamburgerBtn">
            <img src={remove.image} alt="" />
          </button>
        </section>
        <section
          style={{
            display: remove.display,
            height: remove.height,
          }}
          className="hamburgerNav"
        >
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
      </section>
    </>
  );
};

export default HamburgerNav;
