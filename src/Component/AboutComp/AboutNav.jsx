import React from "react";
import { NavLink } from "react-router-dom";

const AboutNav = () => {
  return (
    <>
      <nav className="aboutNav">
        <div>
          <NavLink to="/about/skills">Skills</NavLink>
        </div>
        <div>
          <NavLink to="/about/experience">Experience</NavLink>
        </div>
        <div>
          <NavLink to="/about/education">Education</NavLink>
        </div>
      </nav>
    </>
  );
};

export default AboutNav;
