import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { blueGrey, grey } from "@material-ui/core/colors";

function Exercises(props) {
  const availEx = props.exercises.filter((exercise) =>
    props.equipment.includes(exercise.fields.equipment)
  );

  const handleAdd = (event) => {
    event.preventDefault();
    props.setWorkout(props.workout.concat(event.target.value));
    console.log(event.target.value);
  };

  // return (
  //   <>
  //     {availEx.map((exercise) => (
  //       <>
  //         <Link to={`/exerciseinfo/${exercise.id}`}>
  //           {exercise.fields.exercise}
  //         </Link>{" "}
  //         <button onClick={handleAdd} value={exercise.fields.exercise}>
  //           Add To Workout
  //         </button>
  //         <br />
  //       </>
  //     ))}
  //     <Link to={"/new/"}>
  //       <button>Create New Exercise</button>
  //     </Link>
  //   </>
  // );

  return (
    <>
      <List component="nav" className="exercisesList" aria-label="mailbox folders">
      {availEx.map((exercise) => (
        <>
          <Link to={`/exerciseinfo/${exercise.id}`}>
            {exercise.fields.exercise}
          </Link>{" "}
          <button onClick={handleAdd} value={exercise.fields.exercise}>
            Add To Workout
          </button>
          <Divider />
        </>
      ))}
      </List>
      <Link to={"/new/"}>
        <button>Create New Exercise</button>
      </Link>
    </>
  );

}

export default Exercises;


{/* <List component="nav" className={classes.root} aria-label="mailbox folders">
  <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List> */}