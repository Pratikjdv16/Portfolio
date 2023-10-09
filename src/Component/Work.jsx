import React from "react";
import "../Component/CSS/Work.css";
import link from "../Component/Icons/link-icon.png";

const Work = () => {
  return (
    <>
      <section id="workContainer">
        <section id="workContainerBox">
          <h1 className="workHeading">My Work</h1>
          <aside className="worksBox">
            <div id="firstWork" className="workImg">
              <div className="project">
                <a className="project-Btn" href="/">
                  <img src={link} alt="" />
                </a>
                <p className="project-title">To Do List</p>
              </div>
            </div>
            <div id="secondWork" className="workImg">
              <div className="project">
                <a className="project-Btn" href="/">
                  <img src={link} alt="" />
                </a>
                <p className="project-title">Weather App</p>
              </div>
            </div>
            <div id="thirdWork" className="workImg">
              <div className="project">
                <a className="project-Btn" href="/">
                  <img src={link} alt="" />
                </a>
                <p className="project-title">E-Commerce Web</p>
              </div>
            </div>
          </aside>
          <button id="seeMoreBtn">See More</button>
        </section>
      </section>
    </>
  );
};

export default Work;
