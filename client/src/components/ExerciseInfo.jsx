import { useParams, Link, useHistory } from 'react-router-dom'
import axios from "axios";
import { baseURL, config } from "../services";

function ExerciseInfo(props) {
  const params = useParams()
  const history = useHistory()

  const selectedExercise = props.exercises.find(exercise => params.id === exercise.id)

  const deleteExercise = async () => {
    await axios.delete(`${baseURL}${params.id}`, config)
    history.push("/exercises")
    props.setToggleFetch((prevState) => !prevState)
  }

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
      <Link to={`/edit/${params.id}`}><button>Edit</button></Link> <button onClick={deleteExercise}>Delete</button>
    </>
  );
}

export default ExerciseInfo;
