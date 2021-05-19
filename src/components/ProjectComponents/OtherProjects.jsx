import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";
import Box from '@material-ui/core/Box';

//image import
import sharingan from '../../assets/sharingan.png'

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

const sharinganProject = {
  title: 'Transforming Sharingan',
  description: 'A fun little CSS project I did for my gold badge at Eleven Fifty Academy. I am a big Naruto fan so I really wanted to do this one.',
  code: 'https://codepen.io/Salvation205/pen/QWypRVY',
  image: sharingan,
}

const OtherProjects = () => {
  const classes = useStyles();
  return (
    <div>
    <div className={classes.container}>
      <Box display="flex" flexWrap="wrap" justifyContent="center" >

      <Zoom in={true} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <ProjectCard {...sharinganProject}/>
        </Paper>
      </Zoom>

      {/* <Zoom
        style={{ transitionDelay: " 100ms" }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Paper elevation={4} className={classes.paper}>
          <ProjectCard />
        </Paper>
      </Zoom>

      <Zoom
        style={{ transitionDelay: " 200ms" }}
        in={true}
        mountOnEnter
        unmountOnExit
      >
        <Paper elevation={4} className={classes.paper}>
          <ProjectCard />
        </Paper>
      </Zoom> */}
      </Box>
    </div>
  </div>
  );
};

export default OtherProjects;
