import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I am Yash Bharadva,</span> Web Develpoer an Designer</h1>
            <p>I am a Web Developer and Designer from Gujarat,India with 2 years of experience in multiple companies like The Coding Studio and EDI Systems</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero;