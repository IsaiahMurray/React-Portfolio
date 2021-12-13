import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import JSProjects from "./JSProjects";
import OtherProjects from "./OtherProjects";
import CSProjects from "./CSProjects";
import projectsFile from './projectsFile';

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
  coloring: {
    backgroundColor: '#16349E'
  },
  coloringTwo: {
    backgroundColor: '#56606a',
  }
}));

const Projects = () => {
  
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [jsArr, setJsArr] = useState([]);
  const [csArr, setCsArr] = useState([]);
  const [otherArr, setOtherArr] = useState([]);

  useEffect(() => {
    projectDisplay();
    console.log(jsArr)
  }, [])
  
const projectDisplay = () => {
  for(let i = 0; i < projectsFile.length; i++){
    if(projectsFile[i].type === "JavaScript"){
      jsArr.push(projectsFile[i])
    } else if(projectsFile[i].type === ".Net"){
      csArr.push(projectsFile[i])
    } else{
      otherArr.push(projectsFile[i])
    }
  }  
}


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  

  return (
    <div id="project-div" className={classes.root}>
      <Container className={classes.coloringTwo}>
        <AppBar className={classes.coloring} position="static">
          <Tabs value={value} onChange={handleChange} centered indicatorColor='primary'>
            <Tab label="JavaScript" {...a11yProps(0)} />
            <Tab label=".Net" {...a11yProps(1)} />
            <Tab label="Other" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        
        <TabPanel value={value} index={0}>
          <JSProjects projects={jsArr}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CSProjects projects={csArr}/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <OtherProjects projects={otherArr}/>
        </TabPanel>
      </Container>
    </div>
  );
};

export default Projects;
