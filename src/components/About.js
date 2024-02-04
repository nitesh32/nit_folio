import React from "react";
import * as Icon from "react-bootstrap-icons";
import Tilt from "react-parallax-tilt";

export default function About() {
  return (
    <div className="div-all" id="about">
      <div className="naming_of_div">
        <Icon.PersonFill />
        &nbsp;About&nbsp;<strong>Me</strong>
      </div>
      <div className="about_content">
         <Tilt>
          <div
            id="about_image"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          ></div>
          </Tilt>
        
        <div className="real_about">
          <h3 id="about_name">
            I'm <span>Nitesh Sharma</span>
          </h3>
          <span className="span_bolder">Full Stack Developer</span>

          <p
            id="para_about"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            
I'm a Full-Stack developer based in Chandigarh, Haryana. A Computer Science Engineering graduate from Chandigarh University, I excel in MERN stack, having built dynamic web apps and solved 330+ problems on Codeforces. Passionate about continuous improvement, I actively contribute to open-source projects, seeking to expand my skills in a thriving tech community.
          </p>

          <div
            className="age_number"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
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

          <div
            id="about-btnt"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <a
              href="https://drive.google.com/drive/folders/1o5VL_j0mePm-ImO0U-HC5_W6z1fv66oF?q=sharedwith:public%20parent:1o5VL_j0mePm-ImO0U-HC5_W6z1fv66oF"
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
