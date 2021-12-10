import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

//image imports
import note from "../../assets/notepad.png";
import sounds from "../../assets/sounds.png";
import LC from '../../assets/LC.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
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

const elevenNoteProject = {
  title: "Eleven Note",
  description: "A simple note taking application implementing full CRUD.",
  image: note,
  code: "https://github.com/IsaiahMurray/ElevenNote",
};

const colossalSounds = {
  title: "Colossal Sounds",
  description:
    "A database management app for a music store owner that can also function as a way for customers to view products available for sale at the store, and their essential information.",
  code: "https://github.com/IsaiahMurray/Colossal-sounds",
  image: sounds,
};

const lilChef = {
  title: "Lil Chef",
  description: 'A web application for creating and managing recipes and ingredients for any who would find it usefull. Built using ASP.NET MVC for front and back end functionality.',
  code: 'https://github.com/IsaiahMurray/LilChef',
  image: LC,
}

const CSProjects = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Zoom in={true} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...elevenNoteProject} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 100ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...colossalSounds} />
            </Paper>
          </Zoom>

          <Zoom
            style={{ transitionDelay: " 200ms" }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <ProjectCard {...lilChef} />
            </Paper>
          </Zoom>
        </Box>
      </div>
    </div>
  );
};

export default CSProjects;
