import React from "react";
// import { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import * as Icon from 'react-bootstrap-icons';

export default function Home() {

  const gotopageabout = (val) => {
    const element = document.getElementById(val);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="div-all home_property" id="home">
      <div id="dyn_name">
        <h1 id="intro_name">
          Hi There,
          <br />
          I'm&nbsp;
          <span>Nitesh Sharma</span>
        </h1>
        <h1
          style={{ paddingTop: "1rem", margin: "auto 0", fontWeight: "normal" }}
          id="typewriter"
        >
          I Am Into{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Web Development",
                "Competitive Programing",
                "MERN Stack",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div
          id="about-btnt"
          onClick={() => {
            gotopageabout("about");
          }}
        >
          <h5 style={{margin:0 ,fontWeight:800}}>About Me</h5>
        </div>

        <div id="connect_me">
          <a href="https://github.com/nitesh32" target="_blank" rel="noreferrer">
          <div class="icon_outer">
            <Icon.Github class="bootstrap_icons" />
          </div>
          </a>
          <a href="https://www.linkedin.com/in/nitesh-sharma-3429541bb/" target="_blank" rel="noreferrer">
          <div class="icon_outer">
          <Icon.Linkedin class="bootstrap_icons"/>
          </div>
          </a>

          <a href="https://twitter.com/NiteshS1123" target="_blank" rel="noreferrer">
          <div class="icon_outer">
          <Icon.Twitter class="bootstrap_icons"/>
          </div>
          </a>

          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">
          <div class="icon_outer">
          <Icon.EnvelopeCheckFill class="bootstrap_icons"/>
          </div>
          </a>

          <a href="https://auth.geeksforgeeks.org/user/nit8339" target="_blank" rel="noreferrer">
          <div class="icon_outer">
          <Icon.CodeSlash class="bootstrap_icons"/>
          </div>
          </a>

          <a href="https://codeforces.com/profile/NIT2213" target="_blank" rel="noreferrer">
          <div class="icon_outer">
          <Icon.BracesAsterisk class="bootstrap_icons"/>
          </div>
          </a>
           
        </div>

      </div>

      <div className="container">
        <div className="box">
          <div className="spin-container">
            <div className="shape">
              <div className="bd"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
