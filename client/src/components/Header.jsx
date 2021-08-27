import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Sidebar from "./Sidebar";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  const icon = () => {
    if (props.theme.palette.type === "dark") {
      return <Brightness3Icon />;
    } else {
      return <Brightness7Icon />;
    }
  };

  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Home Gym Hero
            </Typography>
            <Button variant="contained" color="primary">
              <Link to="/">Equipment</Link>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={props.onToggleDark}
            >
              {icon()}
            </Button>
            <Sidebar
              equipment={props.equipment}
              exercises={props.exercises}
              setEquipment={props.setEquipment}
              workout={props.workout}
              setWorkout={props.setWorkout}
              setToggleFetch={props.setToggleFetch}
              theme={props.theme}
            />
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}

export default Header;
