import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const Footer = () => {
  return (
    <div id="footer">
      <IconButton target="_blank" href="https://www.linkedin.com/in/isaiah-murray-36b906121/">
        <LinkedInIcon fontSize="large" color="primary" />
      </IconButton>
      <IconButton target="_blank" href="https://github.com/IsaiahMurray">
        <GitHubIcon fontSize="large" color="primary" />
      </IconButton>
    </div>
  );
};

export default Footer;
