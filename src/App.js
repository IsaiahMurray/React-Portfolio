import React, { Component } from "react";
import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";

//imports
import Nav from './components/Nav';
import Jumbo from "./components/Jumbo";
import Profile from "./components/Profile";
import Projects from "./components/ProjectComponents/Projects.jsx";
import Form from "./components/Form";
import Footer from "./components/Footer";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#16349E",
              },
            },
            fpsLimit: 150,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 250,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 240,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80 /*change to 80*/,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Nav />
        <Jumbo />
        <Profile />
        <Projects />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;