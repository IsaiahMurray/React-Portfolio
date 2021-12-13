import React from "react";
import isaiah from "../assets/IsaiahMurray1.jpg";
import Skills from "./Skills";

const Profile = () => {
  return (
    <div id="profile-parent">
      <section id="about" className="">
        <div>
          <h1 id="profile-title">About Me</h1>
        </div>

        <div className="container-fluid d-flex row">
          <div className="col" id="profile-pic">
            <img alt="Isaiah Murray" src={isaiah} height="275px;" />
          </div>

          <div className="article col">
            <p id="paragraph">
              Hi, my name is Isaiah Murray. I am a young Fullstack Developer looking to join a team of passionate tech nerds! Previously, I was an
              aspiring chef, but I decided to change my career and explore the
              joys of development. I went through Eleven Fifty Academy's
              immersive 12 week long bootcamp for Web Development using
              Javascript and Software Engineering using C#, and am now an
              Instructor Trainee for the Web Dev cohorts! I am striving to
              become a skillful, fullstack developer, and further learning
              into video game development. Please take a look at my
            </p>
          </div>
        </div>

        <section className="">
          <div id="resume-div">
            <a
              className="btn btn-light"
              id="resume-link"
              role="button"
              target="_blank"
              href="https://docs.google.com/document/d/1_TNASbp7SEmYv_9rTQ9VHlP3bna_KMn8oVK_Fiv9nXg/edit?usp=sharing"
            >
              My Resume
            </a>
          </div>
          <br />
          <Skills />
          <br />
        </section>
      </section>
    </div>
  );
};

export default Profile;
