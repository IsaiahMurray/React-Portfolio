import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

//image imports
import nyt from "../../assets/nyt.jfif";
import ghibli from "../../assets/ghibli.jpg";
import clock from "../../assets/clock.png";
import workout from "../../assets/workout.jpg";
import isaiah from "../../assets/react.jpg";
import mhw from "../../assets/mhw.jpg";
import pip from "../../assets/pip.png";
import scroll from "../../assets/scroll.png";
import quotes from "../../assets/quotes.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
}));

const ghibliProject = {
  title: "Ghibli API Fetch",
  description:
    "A simple fetch from the Studio Ghibli API to display a list of all of their movies",
  image: ghibli,
  code: "https://github.com/IsaiahMurray/Stufio-Ghibli-API",
  page: "https://isaiahmurray.github.io/Stufio-Ghibli-API/",
};

const nytProject = {
  title: "NYT API Fetch",
  description:
    "A small application to search through the NYT with keywords and specific dates.",
  image: nyt,
  code: "https://github.com/IsaiahMurray/NYT-API",
  page: "https://isaiahmurray.github.io/NYT-API/",
};

const JsClock = {
  title: "JS Clock",
  description: "A a real-time clock made with simple JS DOM manipulation.",
  code: "https://codepen.io/Salvation205/pen/mdVqKZy",
  image: clock,
};

const WorkoutLog = {
  title: "Workout log",
  description: "An application to track your workouts(Not yet deployed)",
  image: workout,
  client: "https://github.com/IsaiahMurray/Workout-log-client",
  server: "https://github.com/IsaiahMurray/Work-out-log-server",
};

const Portfolio = {
  title: "Portfolio",
  description:
    "This is the portfolio that you are currently viewing",
  image: isaiah,
  code: "https://github.com/IsaiahMurray/React-Portfolio",
};

const HCA = {
  title: "Hunter's Companion",
  description:
    "A web app for gamers, who play monster hunter world, to use to organize things they want to do in the game and to research details about the video game.(Only server, client is being rebuilt)",
  image: mhw,
  server: "https://github.com/IsaiahMurray/HCAtest-server",
};

const PIP = {
  title: "Picture in Picture",
  description: "An app that will let you share a specific screen on your computer, then be able to move and resize it as needed",
  image: pip,
  client: "https://github.com/IsaiahMurray/Picture-In-Picture",
  code: "https://github.com/IsaiahMurray/Picture-In-Picture",
}

const Infinite = {
  title: "Infinite Picture Scroll",
  description: "This is a project that will let you endlessly scroll through random picture from the Unsplash API",
  image: scroll,
  client: "https://isaiahmurray.github.io/Unsplash-Infinite-Scroll/",
  code: "https://github.com/IsaiahMurray/Unsplash-Infinite-Scroll"
}

const Quotes = {
  title: "Quotes Generator",
  description: "An app that will generate random quotes!",
  image: quotes,
  client: "https://github.com/IsaiahMurray/Quote-Generator",
  code: "https://github.com/IsaiahMurray/Quote-Generator"
}

const LD = {

}

const PiP = {

}

const JokeTeller = {

}

const Animations = {
  
}

const JSProjects = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Zoom in={true} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...ghibliProject} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 100ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...nytProject} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 200ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...JsClock} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 300ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...WorkoutLog} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 400ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...HCA} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 500ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...Portfolio} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 600ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...PIP} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 700ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...Infinite} />
            </Paper>
          </Zoom>
          <Zoom
            style={{ transitionDelay: " 800ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...Quotes} />
            </Paper>
          </Zoom>
        </Box>
      </div>
    </div>
  );
};

export default JSProjects;
