import { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";

function Sidebar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEquipRemove = (event) => {
    event.preventDefault();
    props.setEquipment(
      props.equipment.filter((piece) => piece !== event.currentTarget.value)
    );
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleExerciseRemove = (event) => {
    event.preventDefault();
    props.setWorkout(
      props.workout.filter((exercise) => exercise !== event.currentTarget.value)
    );
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleExerciseId = (name) => {
    if (props.workout.length > 0) {
      const match = props.exercises.find(
        (exercise) => exercise.fields.exercise === name
      );
      return match.id;
    }
  };

  const offcanvasBg = () => {
    if (props.theme.palette.type === "dark") {
      return { backgroundColor: "#222222" };
    } else {
      return { backgroundColor: "white" };
    }
  };

  const [dense, setDense] = useState(false);

  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={handleShow}>
          <Badge
            badgeContent={props.equipment.length}
            color="secondary"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <EventSeatIcon />
          </Badge>
          <Badge badgeContent={props.workout.length} color="secondary">
            <FitnessCenterIcon />
          </Badge>
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          style={offcanvasBg()}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="ownedEquip">
              <h4>Your Equipment</h4>
              <List dense={dense}>
                {props.equipment.map((piece) => (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <EventSeatIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={piece} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={handleEquipRemove}
                          value={piece}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                ))}
              </List>
            </div>
            <br />
            <Divider />
            <br />
            <div className="selectedExercises">
              <h4>Your Workout</h4>
              <List dense={dense}>
                {props.workout.map((exercise) => (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FitnessCenterIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Link
                            to={`/exerciseinfo/${handleExerciseId(exercise)}`}
                          >
                            <li>{exercise}</li>
                          </Link>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={handleExerciseRemove}
                          value={exercise}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </>
                ))}
              </List>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar;
