import React from "react";
import isaiah from "../assets/IsaiahMurray1.jpg";

const Profile = () => {
  return (
    <div id="profile-parent">
      <section id="about" className="">
        <div>
          <h1 id="profile-title">Profile</h1>
        </div>

        <div className="container-fluid d-flex row">
          <div className="col" id="profile-pic">
            <img alt="Isaiah Murray" src={isaiah} height="275px;" />
          </div>

          <div className="article col">
            <p id="paragraph">
              Hi, my name is Isaiah Murray. I am a young Fullstack Developer and
              am very new to the technology industry. Previously, I was an
              aspiring chef, but I decided to change my career and explore the
              joys of development. I went through Eleven Fifty Academy's
              immersive 12 week long bootcamp for both Javascript and Software Engineerin with C#, and
              am now a Learning Assistant for the JavaScript cohorts! I am
              striving to become skillful fullstack developer and potentially transfer into
              video game development. My end goal dream job would be to work
              with augmented/virtual reality applications and software.
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
              Checkout my Resume
            </a>
          </div>
          <br />
        </section>
      </section>
    </div>
  );
};

export default Profile;
