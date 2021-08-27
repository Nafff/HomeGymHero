// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import Fab from "@material-ui/core/Fab";

// function Sidebar(props) {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleEquipRemove = (event) => {
//     event.preventDefault();
//     props.setEquipment(
//       props.equipment.filter((piece) => piece !== event.currentTarget.value)
//     );
//     props.setToggleFetch((prevState) => !prevState);
//   };

//   const handleExerciseRemove = (event) => {
//     event.preventDefault();
//     props.setWorkout(
//       props.workout.filter((exercise) => exercise !== event.currentTarget.value)
//     );
//     props.setToggleFetch((prevState) => !prevState);
//   };

//   const handleExerciseId = (name) => {
//     if (props.workout.length > 0) {
//       const match = props.exercises.find(
//         (exercise) => exercise.fields.exercise === name
//       );
//       return match.id;
//     }
//   };

//   return (
//     <>
//       <div>
//         <Button variant="contained" color="primary" onClick={handleShow}>
//           Your Gym
//         </Button>
//         <Offcanvas show={show} onHide={handleClose} placement={"end"}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Your Gym</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <div className="ownedEquip">
//               <h4>Your Equipment</h4>
//               <ul>
//                 {props.equipment.map((piece) => (
//                   <>
//                     <li>{piece}</li>
//                     <Fab
//                       size="small"
//                       color="primary"
//                       aria-label="delete"
//                       onClick={handleEquipRemove}
//                       value={piece}
//                     >
//                       <DeleteIcon />
//                     </Fab>
//                   </>
//                 ))}
//               </ul>
//             </div>
//             <div className="selectedExercises">
//               <h4>Your Workout</h4>
//               <ul>
//                 {props.workout.map((exercise) => (
//                   <>
//                     <Link to={`/exerciseinfo/${handleExerciseId(exercise)}`}>
//                       <li>{exercise}</li>
//                     </Link>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={handleExerciseRemove}
//                       value={exercise}
//                     >
//                       -
//                     </Button>
//                   </>
//                 ))}
//               </ul>
//             </div>
//           </Offcanvas.Body>
//         </Offcanvas>
//       </div>
//     </>
//   );
// }

// export default Sidebar;


import { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
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

  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={handleShow}>
          Your Gym
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
                    <li>{piece}</li>
                    <Fab
                      size="small"
                      color="primary"
                      aria-label="delete"
                      onClick={handleEquipRemove}
                      value={piece}
                    >
                      <DeleteIcon />
                    </Fab>
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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleExerciseRemove}
                      value={exercise}
                    >
                      -
                    </Button>
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
