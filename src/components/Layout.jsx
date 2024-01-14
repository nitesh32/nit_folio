import React from 'react';
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Layout() {
  return (
    <div id="Layout">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>

    </div>
  )
}
