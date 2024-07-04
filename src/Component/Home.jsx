import React, { useEffect, useState } from "react"; // SF is rafce
import "../Component/CSS/Home.css";
import Footer from "./Footer";
import location from "./Icons/location.png";
import openToWork from "./Icons/open-to-work.png";

const Home = () => {
  const texts = [
    "Pratik Jadhav.",
    "React Developer.",
    "Frontend Specialist.",
    "Javascript Enthusiast.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typingEffect, setTypingEffect] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTextToType = texts[currentTextIndex];
      if (typingEffect.length < currentTextToType.length) {
        setTypingEffect(
          currentTextToType.substring(0, typingEffect.length + 1)
        );
      } else {
        clearTimeout(timeout);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          setTypingEffect("");
        }, 1000); // Adjust pause between texts
      }
    }, 100); // Adjust typing speed

    return () => clearTimeout(timeout);
  }, [currentTextIndex, typingEffect]);

  return (
    <>
      <section id="homeContainer">
        <section id="homeContainerBox">
          <aside className="section">
            <h1 className="heading">Hi, I'm a {typingEffect}</h1>
            <p>
              I have grown a strong passion for front-end development which led
              me to a good understanding of its underlying technologies, which
              leads me to love designing and building modern websites. As a
              developer who loves nothing more than work with building amazing
              websites and solving technical problems.
            </p>
            <p style={{ marginTop: "3rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#4b5563"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              Pune / Kolhapur, India
            </p>
            <p>
              <img
                src={openToWork}
                className="openToWorkIcon"
                alt="openToWork"
              />
              Open to work
            </p>
          </aside>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default Home;
