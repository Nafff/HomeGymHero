import { Link } from 'react-router-dom'

function Equipment(props) {
  const equipPieces = ["Barbell", "Dumbbells", "Kettlebells"];

  const handleClick = (event) => {
    event.preventDefault();
    if (props.equipment.includes(event.target.value) !== true) {
      props.setEquipment(props.equipment.concat(event.target.value));
    }
  };

  return (
    <>
      {equipPieces.map((piece) => (
        <>
          <button onClick={handleClick} value={piece}>
            {piece}
          </button>
        </>
      ))}
      <>
        <Link to="/exercises/">
          <button>Generate Exercises</button>
        </Link>
      </>
    </>
  );
}

export default Equipment;
