import React from "react";

const Experience = () => {
  return (
    <>
      <div className="experienceBox">
        <div className="aboutExperienceBox">
          {/* Company Name */}
          <div className="aboutExperienceBox-Items">
            <div className="aboutHeadingIconDiv">
              <div className="wrapExpIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                </svg>
              </div>

              <span>SIBIC Business Incubator</span>
            </div>
          </div>

          {/* Role */}
          <div
            className="aboutExperienceBox-Items"
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <div className="aboutHeadingIconDiv">
              <div className="wrapExpIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#454545"
                >
                  <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
                </svg>
              </div>

              <span>React Developer</span>
            </div>
            <p>
              • As a react developer, my role involves designing and developing
              user interfaces for the IMS (Incubation Management System)
              Software.
            </p>
            <p>
              • I use my expertise in react to create interactive components
              that enhance the user experience.
            </p>
            <p>
              • Collaborating with UI/UX designers and back end developers, I
              ensure seamless integration of front end and back end
              functionalities.
            </p>
            <p>
              • My goal is to deliver a visually appealing and user-friendly
              interface that meets the needs of our clients and enhances the
              overall usability of the IMS software.
            </p>
            <p>• Utilized: Javascript, React.Js, MaterialUI, GitHub.</p>
          </div>

          {/* Duration */}
          <div
            className="aboutExperienceBox-Items"
            style={{ justifyContent: "center" }}
          >
            <div
              className="aboutHeadingIconDiv"
              style={{ justifyContent: "center" }}
            >
              <div className="wrapExpIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="#454545"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z" />
                </svg>
              </div>

              <span style={{ color: "#454545", fontSize: "1.1rem" }}>
                Apr 2023 - Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
