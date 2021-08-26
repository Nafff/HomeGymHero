import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { blueGrey, grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function Exercises(props) {
  const availEx = props.exercises.filter((exercise) =>
    props.equipment.includes(exercise.fields.equipment)
  );

  const handleAdd = (event) => {
    event.preventDefault();
    props.setWorkout(props.workout.concat(event.currentTarget.value));
  };

  return (
    <>
      <List
        component="nav"
        className="exercisesList"
        aria-label="mailbox folders"
      >
        {availEx.map((exercise) => (
          <>
            <Link to={`/exerciseinfo/${exercise.id}`}>
              {exercise.fields.exercise}
            </Link>{" "}
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={handleAdd}
              value={exercise.fields.exercise}
            >
              <AddIcon />
            </Fab>
            <Divider />
          </>
        ))}
      </List>
      <Link to={"/new/"}>
        <Button variant="contained" color="primary" startIcon={<AddBoxIcon />}>
          Create New Exercise
        </Button>
      </Link>
    </>
  );
}

export default Exercises;
