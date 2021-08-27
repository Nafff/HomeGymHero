import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${selectedExercise.fields.videoUrl}`}
      ></iframe>
      <h2>{selectedExercise.fields.bodyPart}</h2>
      <h2>{selectedExercise.fields.equipment}</h2>
      <p>{selectedExercise.fields.workoutInfo}</p>
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
    </>
  );
}

export default ExerciseInfo;
