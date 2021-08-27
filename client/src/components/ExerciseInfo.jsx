import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddBoxIcon from "@material-ui/icons/AddBox";

function ExerciseInfo(props) {
  const params = useParams();
  const history = useHistory();

  const selectedExercise = props.exercises.find(
    (exercise) => params.id === exercise.id
  );

  const deleteExercise = async () => {
    await axios.delete(`${baseURL}${params.id}`, config);
    history.push("/exercises");
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    props.setWorkout(props.workout.concat(event.currentTarget.value));
  };

  const useStyles = makeStyles((theme) => ({
    exerciseButtons: {
      marginTop: 10,
      marginBottom: 25,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <h1>{selectedExercise.fields.exercise}</h1>
      <iframe
        // width="420"
        // height="315"
        width="250"
        height="140"
        src={`https://www.youtube.com/embed/${selectedExercise.fields.videoUrl}`}
      ></iframe>
      <h2>Body Part Worked: {selectedExercise.fields.bodyPart}</h2>
      <h3>Required Equipment: {selectedExercise.fields.equipment}</h3>
      <h5>Workout Info:</h5>
      <p>{selectedExercise.fields.workoutInfo}</p>
      <h5>Workout Tips:</h5>
      <p>{selectedExercise.fields.workoutTips}</p>
      <Link to={`/edit/${params.id}`}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          className={classes.exerciseButtons}
        >
          Edit
        </Button>
      </Link>{" "}
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={deleteExercise}
        className={classes.exerciseButtons}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddBoxIcon />}
        onClick={handleAdd}
        className={classes.exerciseButtons}
        value={selectedExercise.fields.exercise}
      >
        Add to Workout
      </Button>
    </>
  );
}

export default ExerciseInfo;
