import React, { useEffect } from "react";
import "../Component/CSS/About.css";
import AboutNav from "./AboutComp/AboutNav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    const aboutRightElement = document.querySelector(".aboutRight");

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

    if (aboutRightElement) {
      observer.observe(aboutRightElement);
    }

    return () => {
      if (aboutRightElement) {
        observer.unobserve(aboutRightElement);
      }
    };
  }, []);

  return (
    <>
      <section id="aboutContainer">
        <section id="aboutContainerBox">
          <aside className="aboutLeft">
            <div></div>
          </aside>
          <aside className="aboutRight">
            <div className="aboutRightTop">
              <h1 className="aboutHeading">About Me</h1>
              <p className="aboutPara">
                <span>I have developed a</span>
                <span className="highlight">
                  {" "}
                  strong passion for front-end development
                </span>
                <span>
                  , gaining a deep understanding of its underlying technologies.
                  This passion has driven me to excel in designing and building
                  modern websites. As a developer, I thrive on the challenge of
                </span>
                <span className="highlight">
                  creating amazing user experiences
                </span>
                <span> and solving complex technical problems.</span>
              </p>
              <p className="aboutPara">
                <span>I focus on crafting responsive, dynamic, and</span>
                <span className="highlight">
                  visually appealing web applications.
                </span>
                <span>
                  My experience with span Javascript, React, Redux Toolkit, and
                  other front-end technologies allows me to deliver
                </span>
                <span className="highlight">high-quality code</span>
                <span>
                  and innovative solutions. I am dedicated to continuous
                  learning and
                </span>
                <span className="highlight">
                  staying updated with the latest trends
                </span>
                <span>
                  and best practices in the field. I take pride in my work and
                  am always eager to collaborate with others to bring creative
                  ideas to life.
                </span>
              </p>
              <p className="aboutPara">
                <span>
                  and best practices in the field. I take pride in my work and
                  am always eager to collaborate with others to bring creative
                  ideas to life,
                </span>
                <span className="highlight">enhancing user interfaces</span>, or
                <span>
                  implementing new features, I am passionate about pushing the
                  boundaries of what is possible in web development.
                </span>
              </p>
            </div>
          </aside>
        </section>
        <section className="aboutRightBottom">
          <AboutNav />
          <Outlet />
        </section>
        <Footer />
      </section>
    </>
  );
};

export default About;
