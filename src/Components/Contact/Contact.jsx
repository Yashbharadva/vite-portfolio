import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <img src={mail_icon} alt="" /> <p>yashbharadva03@gmail.com</p>
                    </div>
                    <div className="contact-details">
                        <img src={call_icon} alt="" /> <p>+64 028 8525 6493</p>
                    </div>
                    <div className="contact-details">
                        <img src={location_icon} alt="" /> <p>Auckland, New Zealand</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name="name" />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter you email" name="email" />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message" />
                <button type="submit" className="contact-submit">Submit Now</button>
            </form>
        </div>
    )
}

export default Contact;