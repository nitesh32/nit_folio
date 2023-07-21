import React from "react";
import * as Icon from "react-bootstrap-icons";
import Proj from "./projects/Proj";

export default function Projects() {
  return (
    <div className="div-all" id="projects">
      <div className="naming_of_div">
        <Icon.CodeSlash />
        &nbsp;My&nbsp;<strong>Projects</strong>
      </div>
      <div id="main_projects">
        <Proj
          name="Benemart"
          photo="/assets/images/benemart_1.png"
          desc="It Is a Shopping Website Which Has Authentication, Database and Express Server ."
          link="https://github.com/nitesh32/benemart"
          git="https://github.com/nitesh32/benemart"
          id="1"
        />
        <Proj
          name="Image Carousel."
          desc="It Is a Image Carousel Of 5 Images In 3d Prespective ."
          photo="/assets/images/gallery_1.png"
          id="2"
          link="https://nitesh32.github.io/gallery/"
          git="https://github.com/nitesh32/gallery"
        />
        <Proj
          name="Ping Pong Game"
          desc="It Is a Web Game of Two Rodes And One Ball ."
          photo="/assets/images/pingpong.png"
          id="3"
          link="https://nitesh32.github.io/pingpong_js/"
          git="https://github.com/nitesh32/pingpong_js"
        />
        <Proj
          name="Calculator"
          desc="Calculator Using HTML CSS JS Having Dark And Light Modes ."
          photo="/assets/images/calculator.png"
          id="4"
          link="https://nitesh32.github.io/calc/"
          git="https://github.com/nitesh32/calc"
        />
        <Proj
          name="To-Do Using Api"
          desc="TODO List Using Api And Alert Message On Every Move ."
          photo="/assets/images/todo_api.png"
          id="5"
          link="https://nitesh32.github.io/todo/"
          git="https://github.com/nitesh32/todo"
        />
        <Proj
          name="To-Do Using Database"
          desc="TODO List Using Database Server and Task Addition And Deletion ."
          photo="/assets/images/todo_data.png"
          id="6"
          link="https://github.com/nitesh32/todo_mern"
          git="https://github.com/nitesh32/todo_mern"
        />
        <Proj
          name="Tilt Image Effect"
          desc="Tilt Image Effect By Using Javascript ."
          photo="/assets/images/parallax.png"
          id="7"
          link="https://nitesh32.github.io/parallax_effect_img/"
          git="https://github.com/nitesh32/parallax_effect_img"
        />
        <Proj
          name="Catch Me Game"
          desc="Game In Which Section Is Changing Its Position On Hover Every Time ."
          photo="/assets/images/catch.png"
          id="8"
          link="https://nitesh32.github.io/catch_me/"
          git="https://github.com/nitesh32/catch_me"
        />
        <Proj
          name="Music Player Page"
          desc="Static Website Of A Music Player Using HTML CSS JS ."
          photo="/assets/images/music.png"
          id="9"
          link="https://nitesh32.github.io/music_player//"
          git="https://github.com/nitesh32/music_player"
        />
      </div>
    </div>
  );
}
