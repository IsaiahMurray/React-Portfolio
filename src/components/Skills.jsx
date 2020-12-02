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
import { BsFillBootstrapFill } from "react-icons/bs";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from '@material-ui/core/SvgIcon';
import TS from '../assets/typescript.svg';
const Skills = () => {
  return (
    <div>
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
      <IconButton aria-label="delete">
  <SvgIcon>
    {TS}
  </SvgIcon>
</IconButton>
    </div>
  );
};

export default Skills;
