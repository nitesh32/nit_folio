import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Contact() {
  const gotopages = (val) => {
    const element = document.getElementById(val);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="div-all" id="contact">
      <div className="naming_of_div">
        <Icon.Headset />
        &nbsp;Get in&nbsp;<strong>Touch</strong>
      </div>
      <div id="main_contact">
        <div id="form_i_touch">
          <h2>Interested in working together?Let's Talk</h2>
          <div className="name_email">
          <input placeholder="Enter Your Name" className="inp_cont" id="name"></input>
          <input placeholder="Enter Your Email" className="inp_cont" id="email"></input>
          </div>
          <input placeholder="Enter Subject" className="inp_cont" id="subject"></input>
          <input placeholder="Enter Message" className="inp_cont" id="message"></input>
          <button className="btn btn-light" onClick={() => {
                    gotopages("home");
                  }}>Contact Me</button>
        </div>
        <div id="footer">
          <div id="inner_footer">
            <div className="inner_footer_one">
              <h2>Nitesh's Portfolio</h2>
              <span>
                Thank you for visiting my personal portfolio website. Connect
                with me over socials.
              </span>
              <br></br>
              <span>Keep Growing ✨</span>
            </div>
            <div className="inner_footer_one">
              <h2>Quick Links</h2>
              <ul>
                <li
                  onClick={() => {
                    gotopages("home");
                  }}
                >
                  {" "}
                  <Icon.ArrowUpRightCircleFill /> Home
                </li>
                <li
                  onClick={() => {
                    gotopages("about");
                  }}
                >
                  {" "}
                  <Icon.ArrowUpRightCircleFill /> About
                </li>
                <li
                onClick={() => {
                  gotopages("skills");
                }}>
                  {" "}
                  <Icon.ArrowUpRightCircleFill /> Skills
                </li>
                <li
                onClick={() => {
                  gotopages("education");
                }}>
                  {" "}
                  <Icon.ArrowUpRightCircleFill /> Education
                </li>
                <li
                onClick={() => {
                  gotopages("projects");
                }}>
                  {" "}
                  <Icon.ArrowUpRightCircleFill /> Projects
                </li>
          
              </ul>
            </div>
            <div className="inner_footer_one">
              <h2>Contact Info</h2>
              <ul>
                <li>
                <Icon.TelephoneFill /> +91 8813060901
                </li>
                <li>
                <Icon.EnvelopeAtFill /> nit8339@gmail.com
                </li>
                <li>
                <Icon.GeoAlt /> Chandigarh, Mohali -140301
                </li>
              </ul>
            </div>
            
          </div>
          <span>Designed With <Icon.HeartFill /> By Niesh Sharma</span>
        </div>
      </div>
    </div>
  );
}
