import React, { useState } from "react";
import "../Component/CSS/Contact.css";
import mail from "../Component/Icons/email-icon.png";
import phone from "../Component/Icons/phone-icon.png";
import facebook from "../Component/Icons/facebook-icon.png";
import instagram from "../Component/Icons/instagram-icon.png";
import linkedin from "../Component/Icons/linkedin-icon.png";
// import background from "..Component/Img/connectionWallpaper1.jpg";

const Contact = () => {
  const initialState = {
    userName: "",
    email: "",
    massage: "",
  };

  // Form validation
  const userNameReg = /^[A-Za-z. ]{3,}$/;
  const emailReg = /^[a-z][a-z0-9]{3,}@gmail[.a-z]{2,}[.a-z]{2,}$/;

  // States
  const [state, setState] = useState(initialState);
  const [styleState, setStyleState] = useState({
    userName_borderColor: "gray",
    email_borderColor: "gray",
    massage_borderColor: "gray",
  });
  // const [userData, setUserData] = useState([]);
  const [popUp, setPopUp] = useState({
    display: "none",
    text: "Successfully Submitted",
  });

  // onChange event
  const usernameInputChange = (event) => {
    setState({ ...state, userName: event.target.value });
    setStyleState({ ...styleState, userName_borderColor: "gray" });
  };
  const emailInputChange = (event) => {
    setState({ ...state, email: event.target.value });
    setStyleState({ ...styleState, email_borderColor: "gray" });
  };
  const massageInputChange = (event) => {
    setState({ ...state, massage: event.target.value });
    setStyleState({ ...styleState, massage_borderColor: "gray" });
  };

  // onBlur event
  const userNameInputBlur = () => {
    if (!userNameReg.test(state.userName) === true) {
      setStyleState({ ...styleState, userName_borderColor: "red" });
    } else {
      setStyleState({ ...styleState, userName_borderColor: "gray" });
    }
  };

  const emailInputBlur = () => {
    if (!emailReg.test(state.email) === true) {
      setStyleState({ ...styleState, email_borderColor: "red" });
    } else {
      setStyleState({ ...styleState, email_borderColor: "gray" });
    }
  };

  const massageInputBlur = () => {
    if (!emailReg.test(state.massage) === true) {
      setStyleState({ ...styleState, massage_borderColor: "red" });
    } else {
      setStyleState({ ...styleState, massage_borderColor: "gray" });
    }
  };

  // onSubmit button
  const onDataSubmit = (event) => {
    // event.preventDefault();
    if (state.userName === "" || state.email === "" || state.massage === "") {
      setPopUp({ display: "flex", text: "Incomplete Form" });
      setStyleState({
        ...styleState,
        userName_borderColor: "red",
        email_borderColor: "red",
        massage_borderColor: "red",
      });
    } else if (state.userName === "") {
      setPopUp({ display: "flex", text: "Incomplete Form" });
      setStyleState({ ...styleState, userName_borderColor: "red" });
    } else if (state.email === "") {
      setPopUp({ display: "flex", text: "Incomplete Form" });
      setStyleState({ ...styleState, email_borderColor: "red" });
    } else if (state.massage === "") {
      setPopUp({ display: "flex", text: "Incomplete Form" });
      setStyleState({ ...styleState, massage_borderColor: "red" });
    } else {
      setPopUp({ display: "flex", text: "Successfully Submitted" });
      // setUserData([...userData, { ...state }]);
      // setState(initialState);
    }
  };

  // Pop-up
  let onPopUp = () => {
    setPopUp({ display: "none" });
  };

  return (
    <>
      <section id="contactContainer">
        <section id="contactContainerBox">
          <aside className="contactLeft">
            <div className="contactLeftContent">
              <h1 className="contactHeading">Contact Me</h1>

              <div className="emailIdDiv">
                <img src={mail} alt="" />
                <a href="mailto:pratikdjadhav16@gmail.com">
                  pratikdjadhav16@gmail.com
                </a>
              </div>

              <div className="phoneNoDiv">
                <img src={phone} alt="" />
                <a href="tel:+7620094762">7620094762</a>
              </div>

              <div className="socialMediaIcons">
                <a
                  href="http://www.facebook.com/pratik.dilip.10"
                  target="blank"
                >
                  <img src={facebook} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/__pratik16/"
                  className="instagram"
                  target="blank"
                >
                  <img src={instagram} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratikjdv16/"
                  target="blank"
                >
                  <img src={linkedin} alt="" />
                </a>
              </div>

              <div className="downloadCV">
                <a href="./Pratik-Jadhav-Resume.pdf" download>
                  Download CV
                </a>
              </div>
            </div>
          </aside>

          <aside className="contactRight">
            <div className="contactRightContent">
              <form
                action="https://formspree.io/f/xeqbpzbj"
                method="POST"
                onSubmit={onDataSubmit}
                autoComplete="off"
              >
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  style={{
                    borderColor: styleState.userName_borderColor,
                  }}
                  value={state.userName}
                  onChange={usernameInputChange}
                  onBlur={userNameInputBlur}
                  placeholder="Enter your name"
                  autoComplete="off"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{
                    borderColor: styleState.email_borderColor,
                  }}
                  value={state.email}
                  onChange={emailInputChange}
                  onBlur={emailInputBlur}
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <textarea
                  id="massage"
                  name="massage"
                  style={{
                    borderColor: styleState.massage_borderColor,
                  }}
                  cols="30"
                  rows="7"
                  value={state.massage}
                  onChange={massageInputChange}
                  onBlur={massageInputBlur}
                  placeholder="Enter your massage"
                ></textarea>
                <button id="submitBtn">Submit</button>
              </form>
            </div>
          </aside>

          {/* Add User Submit Successfully PopUp Section*/}
          <aside id="popUp" style={{ display: popUp.display }}>
            <h1>{popUp.text}</h1>
            <button id="popUpBtn" onClick={onPopUp}>
              OK
            </button>
          </aside>
        </section>
      </section>
    </>
  );
};

export default Contact;
