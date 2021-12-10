import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Box,
} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
  },
  media: {
    height: 150,
  },
  content: {
    height: 75,
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
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

const ProjectCard = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            aria-haspopup="true"
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          onClick={handleOpen}
          size="small"
          color="primary"
        >
          Details
        </Button>
      </CardActions>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </div>
      </Modal>
    </Card>
  );
};

export default ProjectCard;
