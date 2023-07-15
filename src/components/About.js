import React from "react";
import * as Icon from "react-bootstrap-icons";


export default function About() {

  
  return (
    <div className="div-all" id="about">
      <div className="naming_of_div">
        <Icon.PersonFill />
        &nbsp;About&nbsp;<strong>Me</strong>
      </div>
      <div className="about_content">
        <div id="about_image" className="animated fadeInDown"></div>
        <div className="real_about">
          <h3 id="about_name">
            I'm <span>Nitesh Sharma</span>
          </h3>
          <span className="span_bolder">Full Stack Developer</span>

          <p id="para_about">
            I am a Full-Stack developer currently in Chandigarh, Hariyana. I am
            a Computer Science Engineering under graduate from Chandigarh
            University. I am very passionate about improving my coding skills
            &amp; developing applications &amp; websites. I build WebApps and
            Websites using MERN Stack. I also have good competative programing
            skills. I have solved 330+ problems on Codeforces.
          </p>

          <div className="age_number">
            <div className="a_age_number">
              <p>
                <span> Age: </span> 21
              </p>
              <p>
                <span> Phone : </span> +91 8813060901
              </p>
            </div>
            <div className="b_age_number">
              <p>
                <span> Email : </span> nit8339@gmail.com
              </p>
              <p>
                <span> Place : </span> Bhiwani, India - 127030
              </p>
            </div>
          </div>

          <div id="about-btnt">
            <a
              href="https://drive.google.com/file/d/1sz7QWupVOI9MGc8zQ2ZeCVWbZErq8Kgn/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <span id="resume_span">
                Resume <Icon.ArrowRightCircle />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
