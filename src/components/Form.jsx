import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  CssBaseline,
  Grid,
  Button,
  TextField,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  sizing: {
    maxWidth: 500,
    height: 600,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#16349E",
  },
  background: {
    backgroundColor: "#343a40",
    marginTop: "-40px",
  },
  container: {
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "black",
    width: "auto auto",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "16349E",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <h1 className={classes.header}>
        I would love to get in contact with you!
      </h1>
      <Container
        id="form-container"
        component="main"
        maxWidth="xs"
        className={classes.container}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Contact Me
          </Typography>
          <form
            className={classes.form}
            id="form"
            action="https://formspree.io/f/xwkogabk"
            method="POST"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  id="custom-css-outlined-input"
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  id="custom-css-outlined-input"
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  id="custom-css-outlined-input"
                  autoComplete="phone"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CssTextField
                  id="custom-css-outlined-input"
                  autoComplete="company"
                  variant="outlined"
                  fullWidth
                  label="Company"
                  name="company"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  id="custom-css-outlined-input"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  id="custom-css-outlined-input"
                  variant="outlined"
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  type="text"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default Form;
