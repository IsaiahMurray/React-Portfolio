import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "@material-ui/core/Zoom";
import ProjectCard from "./ProjectCard";

import {
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Card,
  Box,
  Paper,
  IconButton,
} from "@material-ui/core";

//image import
import sharingan from "../../assets/sharingan.png";

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
}));

const sharinganProject = {
  title: "Transforming Sharingan",
  description:
    "A fun little CSS project I did for my gold badge at Eleven Fifty Academy. I am a big Naruto fan so I really wanted to do this one.",
  code: "https://codepen.io/Salvation205/pen/QWypRVY",
  image: sharingan,
};

const OtherProjects = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {/* 
      <Zoom in={true} mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.paper}>
          <ProjectCard {...sharinganProject}/>
        </Paper>
      </Zoom> */}

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={sharingan}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Page</Button>
              <Button size="small">Client Repo</Button>
              <Button size="small">Server Repo</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default OtherProjects;
