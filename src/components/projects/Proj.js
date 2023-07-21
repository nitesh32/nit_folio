import React from "react";
import Tilt from "react-parallax-tilt";
import * as Icon from "react-bootstrap-icons";

export default function Proj(props) {
    const funchere = (val)=>{
        const ele = document.getElementById(val);
        ele.style.transition=0.5+"s";
        ele.style.top=15+"%";
        console.log(ele);
    
    }
    const funcheree = (val)=>{
        const ele = document.getElementById(val);
        ele.style.top=80+"%";
        console.log(ele);
    }
  return (
    <Tilt>
      <div className="card" onMouseEnter={() => {funchere(props.id);}} onMouseLeave={() => {funcheree(props.id);}}  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
        <img
          src={process.env.PUBLIC_URL + props.photo}
          alt="project"
        ></img>
        <div className="about_project" id={props.id}>
          <span>{props.name}</span>
          <div className="about_project_desc animate fade-down" >
            <span>
              {props.desc}
            </span>
        <div className="buttons_project">
        <div className="project_link_btn">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project_link_span">
                View <Icon.EyeFill />
              </span>
            </a>
          </div>

            <div className="project_link_btn">
            <a
              href={props.git}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project_link_span">
                Code <Icon.CodeSlash />
              </span>
            </a>
          </div>

          </div>

          </div>

         

        </div>
      </div>
    </Tilt>
  );
}
