import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Education() {
  return (
    <div className="div-all" id="education">
      <div class="naming_of_div">
        <Icon.MortarboardFill />
        &nbsp;My&nbsp;<strong>Education</strong>
      </div>
      <div id="main_education">
        <div class="education_box">
          <div class="content">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p>Chandigarh University (Mohali , Pubjab)</p>
            <h4>2020-2024 | CGPA: 7.5/10</h4>
          </div>
        </div>
        <div class="education_box">
          <div class="content">
            <h3>Higher Secondary | Physics-Chemistry-Mathematics</h3>
            <p>Everest International School (State Board)</p>
            <h4>2018-2019 | Percentage: 75%</h4>
          </div>
        </div>
        <div class="education_box">
          <div class="content">
            <h3>Secondary | General</h3>
            <p>Everest International School (State Board)</p>
            <h4>2016-2017 | Percentage: 85%</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
