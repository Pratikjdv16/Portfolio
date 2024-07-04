import React, { useEffect, useState } from "react";
import "../Component/CSS/Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../Component/Icons/portfolio-logo.png";

const Navbar = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsBlurred(true);
    } else {
      setIsBlurred(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={`navbar ${isBlurred ? "blur" : ""}`}>
        <div className="webTitle">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-content">
          <div>
            <NavLink id="homeNavBtn" to="/home">
              Home
            </NavLink>
          </div>
          <div>
            <NavLink id="aboutNavBtn" to="/about">
              About
            </NavLink>
          </div>
          <div>
            <NavLink id="workNavBtn" to="/work">
              Work
            </NavLink>
          </div>
          <div>
            <NavLink id="contactNavBtn" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
