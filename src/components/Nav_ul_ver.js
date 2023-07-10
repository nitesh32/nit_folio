import React from 'react'

export default function Nav_ul_ver() {
    
    const gotopages = (val) => {
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
      const scroll_funcs = () => {
        window.addEventListener("scroll", function () {
          const elements = document.getElementsByClassName("div-all");
          var size = elements.length;
    
          for (var i = 0; i < size; i++) {
            var ele = elements[i].getBoundingClientRect();
            if (ele.y >= -400 && ele.y <= 300) {
              const all_btn = document.getElementsByClassName("nav-btns");
              var siz = all_btn.length - 1;
              for (var j = 0; j <= siz; j++) {
                all_btn[j].classList.remove("nav-btn-active");
              }
              document
                .getElementById(elements[i].id + "-btns")
                .classList.add("nav-btn-active");
              // console.log(element_to_change);
            }
          }
        });
      };
      scroll_funcs();

  return (
    <ul>
    <button
      type="button"
      className="nav-btns nav-btn-active"
      onClick={() => {
        gotopages("home");
      }}
      id="home-btns"
    >
      Home
    </button>
    <button
      type="button"
      className="nav-btns"
      onClick={() => {
        gotopages("about");
      }}
      id="about-btns"
    >
      About
    </button>
    <button
      type="button"
      className="nav-btns"
      onClick={() => {
        gotopages("skills");
      }}
      id="skills-btns"
    >
      Skills
    </button>
    <button
      type="button"
      className="nav-btns"
      onClick={() => {
        gotopages("education");
      }}
      id="education-btns"
    >
      Education
    </button>
    <button
      type="button"
      className="nav-btns"
      onClick={() => {
        gotopages("projects");
      }}
      id="projects-btns"
    >
      Projects
    </button>
    <button
      type="button"
      className="nav-btns"
      onClick={() => {
        gotopages("contact");
      }}
      id="contact-btns"
    >
      Contact
    </button>
  </ul>
  )
}
