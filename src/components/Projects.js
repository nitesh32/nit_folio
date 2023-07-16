import React from 'react'
import * as Icon from "react-bootstrap-icons";
import Proj from './projects/Proj';


export default function Projects() {
  
  return (
    <div className="div-all" id="projects">
      <div className="naming_of_div">
        <Icon.CodeSlash />
        &nbsp;My&nbsp;<strong>Projects</strong>
      </div>
      <div id="main_projects">
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="1"/>
       <Proj name="Image Carousel." desc="it is a image carousel of 5 images in 3d prespective ." photo="/assets/images/gallery_1.png" id="2" link="https://nitesh32.github.io/gallery/" git="https://github.com/nitesh32/gallery"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="3"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="4"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="5"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="6"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="7"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="8"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="9"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="10"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="11"/>
       <Proj name="benemart" photo="/assets/images/img_2.jpeg" id="12"/>
     
      
      </div>
    </div>
  )
}
