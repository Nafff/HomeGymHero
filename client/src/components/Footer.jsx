import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = useState("equipment");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <IconButton aria-label="delete" color="primary">
        <a href="https://github.com/Nafff">
          <GitHubIcon />
        </a>
      </IconButton>
      <BottomNavigationAction
        component={Link}
        to="/new/"
        label="Add New Exercise"
        value="/new/"
        icon={<AddBoxIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Equipment"
        value="/"
        icon={<EventSeatIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/exercises/"
        label="Exercises"
        value="/exercises/"
        icon={<FitnessCenterIcon />}
      />
      <IconButton aria-label="delete" color="primary">
        <a href="https://www.linkedin.com/in/jacob-adick-3388b3123/">
          <LinkedInIcon />
        </a>
      </IconButton>
    </BottomNavigation>
  );
}

export default Footer;
