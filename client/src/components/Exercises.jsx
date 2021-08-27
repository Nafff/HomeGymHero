import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AddIcon from "@material-ui/icons/Add";

function Exercises(props) {
  const availEx = props.exercises.filter((exercise) =>
    props.equipment.includes(exercise.fields.equipment)
  );

  const handleAdd = (event) => {
    event.preventDefault();
    props.setWorkout(props.workout.concat(event.currentTarget.value));
  };

  const [dense, setDense] = useState(false);

  return (
    <>
      <List dense={dense}>
        {availEx.map((exercise) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FitnessCenterIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={exercise.fields.exercise} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={handleAdd}
                  value={exercise.fields.exercise}
                >
                  <AddIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
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
