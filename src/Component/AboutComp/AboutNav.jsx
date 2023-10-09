import React from "react";
import { NavLink } from "react-router-dom";

const AboutNav = () => {
  return (
    <>
      <nav className="aboutNav">
        <ul>
          <li>
            <NavLink to="/about/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/about/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/about/education">Education</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AboutNav;
