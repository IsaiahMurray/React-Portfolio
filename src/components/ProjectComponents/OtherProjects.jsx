import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';

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

const OtherProjects = () => {
  const classes = useStyles();
  const handleOpen = () => {};
  const handleClose = () => {};
  return (
    <div>
    <div className={classes.container}>
      <Box display="flex"
      flexWrap="wrap" >

      <Zoom in={true} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                title="Contemplative Reptile"
              />
              <CardContent onMouseOver={handleOpen}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                ></Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary"></Button>
              <Button size="small" color="primary"></Button>
            </CardActions>
          </Card>
        </Paper>
      </Zoom>

      <Zoom
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
      </Zoom>
      </Box>
    </div>
  </div>
  );
};

export default OtherProjects;
