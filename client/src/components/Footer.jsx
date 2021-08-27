import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EventSeatIcon from "@material-ui/icons/EventSeat";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

function Footer(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Equipment"
        value="equipment"
        icon={<EventSeatIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/exercises/"
        label="Exercises"
        value="equipment"
        icon={<FitnessCenterIcon />}
      />
    </BottomNavigation>
  );
}

export default Footer;
