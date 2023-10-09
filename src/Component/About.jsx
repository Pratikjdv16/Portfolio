import React from "react";
import "../Component/CSS/About.css";
import AboutNav from "./AboutComp/AboutNav";
import { Outlet } from "react-router-dom";
// import AboutRoute from "./AboutComp/AboutRoute";

const About = () => {
  return (
    <section id="aboutContainer">
      <section id="aboutContainerBox">
        <aside className="aboutLeft">
          <div></div>
        </aside>
        <aside className="aboutRight">
          <div className="aboutRightTop">
            <h1 className="aboutHeading">About Me</h1>
            <p className="aboutPara">
              I have grown a strong passion for Full Stack Web Development which
              led me to a good understanding of its underlying technologies,
              which leads me to love designing and building modern website. Iam
              an Full Stack Web Developer who loves nothing more than work with
              building amazing website, and solving technical problems :)
            </p>
          </div>
          <div className="aboutRightBottom">
            <AboutNav />
            <Outlet />
            {/* agr hame child routes content ko render krWAna hai to hum uSke parent component me outlet ka use kRte hai*/}
          </div>
        </aside>
      </section>
    </section>
  );
};

export default About;
