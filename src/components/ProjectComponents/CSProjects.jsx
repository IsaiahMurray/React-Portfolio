import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Zoom,
  Paper,
  Box,
  Modal,
  Button,
  Fade,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material/";


const useStyles = makeStyles((theme) => ({
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
  media: {
    height: 160,
  },
  card: {
    width: 200,
    height: 300,
  },
  content: {
    height: 100
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    padding: 25,
    height: 450,
  },
}));

const CSProjects = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const activate = (project) => {
    setActive(project);
    handleOpen();
  };

  const displayProjects = () => {
    return props.projects.map((project, index) => {
      return (
        <div>
          <Zoom
            style={{ transitionDelay: `${index}00ms` }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Paper elevation={4} className={classes.paper}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                  </CardContent>
                  <Button onClick={() => activate(project)}>Details</Button>
                </CardActionArea>
              </Card>
            </Paper>
          </Zoom>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Fade in={open}>
              <Card className={classes.modal}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={active.image}
                    title={active.title}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      id="transition-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      {active.title}
                    </Typography>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      {active.description}
                    </Typography>
                    <CardActions>
                      {active.page ? (
                        <Button>
                          <a href={active.page} target="_blank">
                            Page
                          </a>
                        </Button>
                      ) : null}

                      <br />
                      {active.repo ? (
                        <Button>
                          <a href={active.repo} target="_blank">
                            Github Repo
                          </a>
                        </Button>
                      ) : null}

                      <br />
                      {active.client ? (
                        <Button>
                          <a href={active.client} target="_blank">
                            Github Client Repo
                          </a>
                        </Button>
                      ) : null}

                      <br />
                      {active.server ? (
                        <Button>
                          <a href={active.server} target="_blank">
                            Github Server Repo
                          </a>
                        </Button>
                      ) : null}

                      <br />
                    </CardActions>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Fade>
          </Modal>
        </div>
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

export default CSProjects;
