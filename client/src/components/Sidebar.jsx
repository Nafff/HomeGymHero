import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function Sidebar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEquipRemove = (event) => {
    event.preventDefault();
    props.setEquipment(
      props.equipment.filter((piece) => piece !== event.target.value)
    );
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleExerciseRemove = (event) => {
    event.preventDefault();
    props.setWorkout(
      props.workout.filter((exercise) => exercise !== event.target.value)
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

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Gym</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="ownedEquip">
              <h4>Your Equipment</h4>
              <ul>
                {props.equipment.map((piece) => (
                  <>
                    <li>{piece}</li>{" "}
                    <button onClick={handleEquipRemove} value={piece}>
                      -
                    </button>
                  </>
                ))}
              </ul>
            </div>
            <div className="selectedExercises">
              <h4>Your Workout</h4>
              <ul>
                {props.workout.map((exercise) => (
                  <>
                    <Link to={`/exerciseinfo/${handleExerciseId(exercise)}`}>
                      <li>{exercise}</li>
                    </Link>
                    <button onClick={handleExerciseRemove} value={exercise}>
                      -
                    </button>
                  </>
                ))}
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Sidebar;
