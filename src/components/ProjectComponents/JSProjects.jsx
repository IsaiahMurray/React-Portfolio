import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Zoom,
  Paper,
  Box,
  Backdrop,
  Modal,
  Button,
  Fade,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
} from "@material-ui/core/";
import ProjectCard from "./ProjectCard";
import projects from "./projectsFile";

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
    justifyContent: "center",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
  rootTwo: {
    width: 200,
  },
  mediaTwo: {
    height: 150,
  },
  content: {
    height: 75,
  },
 
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

{
  /* <Zoom
style={{ transitionDelay: " 100ms" }}
in={true}
mountOnEnter
unmountOnExit
>
<Paper elevation={4} className={classes.paper}>
  <ProjectCard {...nytProject} />
</Paper>
</Zoom> */
}

const JSProjects = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const displayProjects = () => {

    return props.projects.map((project, index) => {
      return (
        <Zoom
          style={{ transitionDelay: `${index}00ms` }}
          in={true}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={4} className={classes.paper}>
            <Card className={classes.rootTwo}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaTwo}
                  image={project.image}
                  title={project.title}
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Zoom>
      );
    });
  };

  return (
    <div>
      <div className={classes.container}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {displayProjects()}
        </Box>
      </div>
    </div>
  );
};

export default JSProjects;
