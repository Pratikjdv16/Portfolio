import React from "react";

const Education = () => {
  return (
    <>
      <div className="aboutEducation">
        <div className="aboutEducationBox">
          <div>
            <span className="universityHead">Shivaji University, Kolhapur</span>
            <span className="passYear"> 2021</span>
          </div>
          <p className="degreeName">Bachelor of Arts (Geography)</p>
        </div>
        <div className="aboutEducationBox">
          <div>
            <span className="universityHead">
              Balwantrao Zele Jr College, Jaysingpur
            </span>
            <span className="passYear"> 2018</span>
          </div>
          <p className="degreeName">Intermediate (Science)</p>
        </div>
        <div className="aboutEducationBox">
          <div>
            <span className="universityHead">
              Balwantrao Zele Highschool Jaysingpur
            </span>
            <span className="passYear"> 2016</span>
          </div>
          <p className="degreeName">Matriculation</p>
        </div>
      </div>
    </>
  );
};

export default Education;
