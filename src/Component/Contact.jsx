import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../Component/CSS/Contact.css";
import Footer from "./Footer";
import axios from "axios";

const Contact = () => {
  const [popUp, setPopUp] = useState({
    display: "none",
    text: "Successfully Submitted",
  });

  const onPopUp = () => {
    setPopUp({ display: "none" });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2).max(25).required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      massage: Yup.string().min(2).required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(
          "https://formspree.io/f/xeqbpzbj",
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          setPopUp({ display: "flex", text: "Successfully Submitted" });
          resetForm();
        } else {
          setPopUp({ display: "flex", text: "Submission Failed" });
        }

        setSubmitting(false);
      } catch (error) {
        setPopUp({ display: "flex", text: "Submission Failed" });
        setSubmitting(true);
      }
    },
  });

  return (
    <>
      <section id="contactContainer">
        <section id="contactContainerBox">
          <aside className="contactLeft">
            <div className="contactHeading">
              <h1>Contact Me</h1>
            </div>

            {/* Email Info */}
            <div className="contactInfoDiv">
              <div className="wrapIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#454545"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
              <a href="mailto:pratikdjadhav16@gmail.com">
                pratikdjadhav16@gmail.com
              </a>
            </div>

            {/* Phone Info */}
            <div className="contactInfoDiv">
              <div className="wrapIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 510 510"
                  fill="#454545"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>

              <a href="tel:+7620094762">+91 7620094762</a>
            </div>

            {/* Linkedin */}
            <div className="contactInfoDiv">
              <div className="wrapIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#454545"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </div>

              <a href="https://www.linkedin.com/in/pratikjdv16/">Linkedin</a>
            </div>

            {/* Instagram */}
            <div className="contactInfoDiv">
              <div className="wrapIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="#454545"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>

              <a href="https://www.instagram.com/__pratik16/">Instagram</a>
            </div>

            {/* Download */}
            <div className="downloadCV">
              <a href="./PratikJadhavCV.pdf" download="Pratik_Jadhav_CV">
                Download CV{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#454545"
                >
                  <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z" />
                </svg>
              </a>
            </div>
          </aside>

          {/* Contact Form */}
          <aside className="contactRight">
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="contactInfoInputDiv">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  style={{
                    borderColor:
                      formik.touched.name && formik.errors.name
                        ? "red"
                        : "#454545",
                  }}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="contactInfoInputDiv">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  style={{
                    borderColor:
                      formik.touched.email && formik.errors.email
                        ? "red"
                        : "#454545",
                  }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="contactInfoInputDiv">
                <textarea
                  id="massage"
                  name="massage"
                  cols="30"
                  rows="7"
                  placeholder="Enter your massage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.massage}
                  style={{
                    borderColor:
                      formik.touched.massage && formik.errors.massage
                        ? "red"
                        : "#454545",
                  }}
                ></textarea>
                {formik.touched.massage && formik.errors.massage ? (
                  <div className="error">{formik.errors.massage}</div>
                ) : null}
              </div>

              <button
                id="submitBtn"
                type="submit"
                disabled={formik.isSubmitting}
              >
                <span>
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#454545"
                  >
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                </span>
              </button>
            </form>
          </aside>

          {/* Add User Submit Successfully PopUp Section*/}
          <aside id="popUp" style={{ display: popUp.display }}>
            <h1>{popUp.text}</h1>
            <button id="popUpBtn" onClick={onPopUp}>
              OK
            </button>
          </aside>
        </section>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
