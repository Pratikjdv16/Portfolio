import React from "react";
import html from "../Icons/html-icon.png";
import css from "../Icons/css-icon.png";
import javaScript from "../Icons/javascript-icon.png";
import react from "../Icons/react.png";
import redux from "../Icons/redux-icon.png";
import node from "../Icons/nodejs-icon.png";
import express from "../Icons/express-icon.png";
import mongodb from "../Icons/mongodb-icon.png";
import oracle from "../Icons/oracle-icon.png";
import vscode from "../Icons/vs-code-icon.png";
import git from "../Icons/git-icon.png";
import github from "../Icons/github-icon.png";

const Skills = () => {
  return (
    <>
      <div className="skillBox">
        <div className="aboutSkills">
          <p>
            <span className="aboutHeads">Front End</span>
            <img className="icons" src={html} alt="" />
            <img className="icons" src={css} alt="" />
            <img className="icons" src={javaScript} alt="" />
            <img className="icons" src={react} alt="" />
            <img className="icons" src={redux} alt="" />
          </p>
          <p>
            <span className="aboutHeads">Back End</span>
            <img className="icons" src={node} alt="" />
            <img className="icons" src={express} alt="" />
          </p>
          <p>
            <span className="aboutHeads">Data Base</span>
            <img className="icons" src={mongodb} alt="" />
            <img className="oracle icons" src={oracle} alt="" />
          </p>
          <p>
            <span className="aboutHeads">Others</span>
            <img className="icons" src={vscode} alt="" />
            <img className="icons" src={git} alt="" />
            <img className="github icons" src={github} alt="" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Skills;
