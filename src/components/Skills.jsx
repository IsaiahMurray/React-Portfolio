import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaTrello,
  FaGitAlt,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const Skills = () => {
  return (
    <div id="skills-div">
      <Tooltip title="CSS 3" arrow>
        <IconButton aria-label="CSS 3">
          <FaCss3Alt size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="HTML 5" arrow>
        <IconButton aria-label="HTML 5">
          <FaHtml5 size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Bootstrap styling" arrow>
        <IconButton aria-label="Bootstrap styling">
          <BsFillBootstrapFill size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Agile" arrow>
        <IconButton aria-label="Agile">
          <FaTrello size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Git/Github" arrow>
        <IconButton aria-label="Git/Github">
          <FaGitAlt size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="JavaScript" arrow>
        <IconButton aria-label="JavaScript">
          <SiJavascript size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="TypeScript" arrow>
        <IconButton aria-label="TypeScript">
          <SiTypescript size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Node JS" arrow>
        <IconButton aria-label="Node JS">
          <FaNodeJs size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="React" arrow>
        <IconButton aria-label="React">
          <FaReact size="50px" color="white" />
        </IconButton>
      </Tooltip>
      <Tooltip title="C Sharp" arrow>
        <IconButton aria-label="C Sharp">
          <FaDatabase size="50px" color="white" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Skills;
