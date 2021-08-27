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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography className={classes.title} variant="h5" noWrap>
              Home Gym Hero
            </Typography>
            <Link to="/">Home</Link>
            {/* <IconButton aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton> */}
            <Button variant="contained" color="default" onClick={props.onToggleDark}>
              Toggle Theme Type
            </Button>
            <Sidebar
              equipment={props.equipment}
              exercises={props.exercises}
              setEquipment={props.setEquipment}
              workout={props.workout}
              setWorkout={props.setWorkout}
              setToggleFetch={props.setToggleFetch}
            />
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  );
}

export default Header;
