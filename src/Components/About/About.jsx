import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate engineer with 2 plus year of experience in developing
              web sites and design systems. Skilled at writing clear, concise
              code that is easy to maintain and troubleshoot. I am experienced
              in working with both small and large teams across multiple
              projects and companies. Able to work independently in remote
              locations or in office environments as required by the company.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS<hr style={{ width: "50%" }} /></p></div>
            <div className="about-skill"><p>HTML & CSS<hr style={{ width: "70%" }} /></p></div>
            <div className="about-skill"><p>HTML & CSS<hr style={{ width: "50%" }} /></p></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>8+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
