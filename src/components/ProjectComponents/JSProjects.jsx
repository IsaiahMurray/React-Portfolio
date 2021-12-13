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
} from "@mui/material/";

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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 5,
  borderRadius: 5
  
};

const JSProjects = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Paper elevation={4} className={classes.paper} >
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
                <Button onClick={handleOpen}>Details</Button>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
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

export default JSProjects;
