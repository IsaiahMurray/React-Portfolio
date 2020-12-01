import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';

//image imports
import nyt from '../../assets/nyt.jfif'
import ghibli from '../../assets/ghibli.jpg'
import clock from '../../assets/clock.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    display: "flex",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const ghibliProject = {
  title: "Ghibli API Fetch",
  description: "A simple fetch from the Studio Ghibli API to display a list of all of their movies",
  image: ghibli,
  code: "https://github.com/IsaiahMurray/Stufio-Ghibli-API",
  page: "https://isaiahmurray.github.io/Stufio-Ghibli-API/",
};

const nytProject = {
  title: 'NYT API Fetch',
  description: 'A small application to search through the NYT with keywords and specific dates.',
  image: nyt,
  code: 'https://github.com/IsaiahMurray/NYT-API',
  page: 'https://isaiahmurray.github.io/NYT-API/'
}

const JsClock = {
  title: "JS Clock",
  description: 'A a real-time clock made with simple JS DOM manipulation.',
  code: 'https://codepen.io/Salvation205/pen/mdVqKZy',
  image: clock,
}

const JSProjects = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Box display="flex"
        flexWrap="wrap" >

        <Zoom in={true} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
            <ProjectCard {...ghibliProject}/>
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
            <ProjectCard {...JsClock}/>
          </Paper>
        </Zoom>
        </Box>
      </div>
    </div>
  );
};

export default JSProjects;
