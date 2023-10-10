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
                <a
                  className="project-Btn"
                  href="https://todo16-app.netlify.app/"
                  target="blank"
                >
                  <img src={link} alt="" />
                </a>
                <p className="project-title">To-Do List</p>
              </div>
            </div>
            <div id="secondWork" className="workImg">
              <div className="project">
                <a
                  className="project-Btn"
                  href="https://weather16-app.netlify.app/"
                  target="blank"
                >
                  <img src={link} alt="" />
                </a>
                <p className="project-title">Weather App</p>
              </div>
            </div>
            <div id="thirdWork" className="workImg">
              <div className="project">
                <a
                  className="project-Btn"
                  href="https://facebook16.netlify.app/"
                  target="blank"
                >
                  <img src={link} alt="" />
                </a>
                <p className="project-title">Facebook</p>
              </div>
            </div>
          </aside>
          <a
            id="seeMoreBtn"
            href="https://github.com/Pratikjdv16"
            target="blank"
          >
            See More
          </a>
        </section>
      </section>
    </>
  );
};

export default Work;
