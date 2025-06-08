import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
    return(
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Web Developer and Designer with over 2 years of professional expertise in the field. Throughout my career, Ihave had the privilege of collaborating with prestigious organizations.</p>
                        <p>My passion for Web Developer and Designer is not only reflected in my extensive experience but also in the enthusiasm and dedicatiob I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
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
    )
}

export default About;