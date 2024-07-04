import React, { useEffect, useState } from "react";
import "../Component/CSS/Work.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Work = () => {
  const location = useLocation();

  const [state, setState] = useState("4rem");

  useEffect(() => {
    if (location.pathname === "/work") {
      setState("0rem");
    }
  }, [location.pathname]);

  useEffect(() => {
    const projectBoxes = document.querySelectorAll("#projectBox");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    projectBoxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      projectBoxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);

  return (
    <>
      <section id="workContainer">
        <section id="workContainerBox">
          <h1 className="workHeading">My Work</h1>

          {/* All Projects */}
          <aside className="allProjectBox">
            {/* First Project */}
            <div
              id="projectBox"
              className="projectBox"
              style={{ marginTop: state }}
            >
              <div id="firstWork" className="workImg">
                <div className="project">
                  <a
                    className="project-Btn"
                    href="https://flipkart16.vercel.app/"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#ffffff"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </a>
                  <p className="project-title">Flipkart Clone</p>
                </div>
              </div>
              <div className="projectContent">
                <h1 className="projectHeading">Flipkart Clone</h1>
                <div className="projectPara">
                  <p style={{ marginTop: "0px", marginBottom: "1rem" }}>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Redux Toolkit</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </p>
                  <p>
                    • Designed and developed a fully functional e-commerce
                    platform inspired by Flipkart.
                  </p>
                  <p>
                    • Created shopping cart functionalities to improve user
                    experience and retention.
                  </p>
                  <p>
                    • Creating essential features and functionalities to provide
                    users.
                  </p>
                  <p>
                    • Implemented search and filter functionality to easily find
                    exactly products.
                  </p>
                  <p>
                    • Ensured the platform is accessible and usable across
                    various devices by implementing responsive design
                    principles.
                  </p>
                </div>
              </div>
            </div>

            <hr />

            {/* Second Project */}
            <div id="projectBox" className="projectBox">
              <div className="projectContent">
                <h1 className="projectHeading">Weather App</h1>
                <div className="projectPara">
                  <p style={{ marginTop: "0px", marginBottom: "1rem" }}>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Fetch API</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </p>
                  <p>
                    • Designed and developed weather application to provide
                    real-time weather information.
                  </p>
                  <p>
                    • Creating essential features and functionalities to provide
                    users.
                  </p>
                  <p>
                    • Integrated location-based services to automatically detect
                    and display weather information for the user's current
                    location.
                  </p>
                  <p>
                    • Integrated with a weather API to fetch current weather
                    conditions and other relevant data.
                  </p>
                  <p>
                    • Developed interactive and informative weather
                    visualizations, including temperature and wind speed.
                  </p>
                </div>
              </div>
              <div id="secondWork" className="workImg">
                <div className="project">
                  <a
                    className="project-Btn"
                    href="https://clearsky.vercel.app/"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#ffffff"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </a>
                  <p className="project-title">Weather App</p>
                </div>
              </div>
            </div>

            <hr />

            {/* Third Project */}
            <div id="projectBox" className="projectBox">
              <div id="thirdWork" className="workImg">
                <div className="project">
                  <a
                    className="project-Btn"
                    href="https://facebook16.vercel.app/"
                    target="blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#ffffff"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </a>
                  <p className="project-title">Facebook</p>
                </div>
              </div>
              <div className="projectContent">
                <h1 className="projectHeading">Facebook Login</h1>
                <div className="projectPara">
                  <p style={{ marginTop: "0px", marginBottom: "1rem" }}>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>CSS</span>
                    <span>GitHub</span>
                  </p>
                  <p>
                    • Created a visually accurate and user-friendly interface,
                    closely resembling the Facebook login and signup pages.
                  </p>
                  <p>
                    • Implemented responsive design principles for a consistent
                    experience across various devices.
                  </p>
                  <p>
                    • Implemented comprehensive error handling to guide users
                    through the login and signup process smoothly.
                  </p>
                  <p>
                    • Applied modern design principles to create an intuitive
                    and engaging user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* See More Btn */}
            <div className="seeMoreBtnBox">
              <button id="seeMoreBtn">
                <a href="https://github.com/Pratikjdv16/" target="blank">
                  See More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#454545"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </a>
              </button>
            </div>
          </aside>
        </section>
      </section>
    </>
  );
};

export default Work;