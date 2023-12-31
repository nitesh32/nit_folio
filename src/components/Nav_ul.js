import React from 'react'

export default function Nav_ul() {
    
    const gotopaged = (val) => {
        const element = document.getElementById(val);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        // const element_btn = document.getElementById(val + "-btn");
        // const all_btn = document.getElementsByClassName("nav-btn");
        // var size = all_btn.length - 1;
        // for (var i = 0; i <= size; i++) {
        //   all_btn[i].classList.remove("nav-btn-active");
        // }
        // element_btn.classList.add("nav-btn-active");
      };
      const scroll_func = () => {
        window.addEventListener("scroll", function () {
          const elements = document.getElementsByClassName("div-all");
          var size = elements.length;
    
          for (var i = 0; i < size; i++) {
            var ele = elements[i].getBoundingClientRect();
            if (ele.y >= -400 && ele.y <= 300) {
              const all_btn = document.getElementsByClassName("nav-btn");
              var siz = all_btn.length - 1;
              for (var j = 0; j <= siz; j++) {
                all_btn[j].classList.remove("nav-btn-active");
              }
              document
                .getElementById(elements[i].id + "-btn")
                .classList.add("nav-btn-active");

            }
          }
        });
      };
      scroll_func();

  return (
    <ul>
    <button
      type="button"
      className="nav-btn nav-btn-active"
      onClick={() => {
        gotopaged("home");
      }}
      id="home-btn"
    >
      Home
    </button>
    <button
      type="button"
      className="nav-btn"
      onClick={() => {
        gotopaged("about");
      }}
      id="about-btn"
    >
      About
    </button>
    <button
      type="button"
      className="nav-btn"
      onClick={() => {
        gotopaged("skills");
      }}
      id="skills-btn"
    >
      Skills
    </button>
    <button
      type="button"
      className="nav-btn"
      onClick={() => {
        gotopaged("education");
      }}
      id="education-btn"
    >
      Education
    </button>
    <button
      type="button"
      className="nav-btn"
      onClick={() => {
        gotopaged("projects");
      }}
      id="projects-btn"
    >
      Projects
    </button>
    <button
      type="button"
      className="nav-btn"
      onClick={() => {
        gotopaged("contact");
      }}
      id="contact-btn"
    >
      Contact
    </button>
  </ul>
  )
}
