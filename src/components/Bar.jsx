import React from "react";
import Ul from "./Nav_ul";
import Uls from "./Nav_ul_ver";

export default function bar() {
  var flag = 0;
  const handledots = () => {
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var ver_nav = document.getElementById("vertical_nav");

    if (flag === 0) {
      one.style.transform = "rotate(45deg)";
      one.style.position = "absolute";
      two.style.display = "none";
      three.style.transform = "rotate(-45deg)";
      three.style.position = "absolute";
      one.style.transition = 0.5 + "s";
      two.style.transition = 0.5 + "s";
      three.style.transition = 0.5 + "s";
      ver_nav.style.right = 0 + "px";
      flag = 1;
    } else {
      one.style.transform = "rotate(0deg)";
      one.style.position = "static";
      two.style.display = "block";
      three.style.transform = "rotate(0deg)";
      three.style.position = "static";
      ver_nav.style.right = -600 + "px";
      flag = 0;
    }
  };

  return (
    <>
      <div id="Navbar">
        {/* naming here  */}
        <div id="naming">
          <strong className="h4">
            <b> &lt;/&gt; Nitesh Sharma</b>
          </strong>
        </div>
        {/* Three dots for vertical nav */}
        <div id="dots" className="" onClick={handledots}>
          <div id="one"></div>
          <div id="two"></div>
          <div id="three"></div>
        </div>
        {/* vertical nav */}
        <div id="vertical_nav">
          <div id="inner-ver_nav">
            <Uls></Uls>
          </div>
        </div>
        {/* vertical nav  */}
        <div id="navigation">
           <Ul></Ul>
        </div>
      </div>
    </>
  );
}
