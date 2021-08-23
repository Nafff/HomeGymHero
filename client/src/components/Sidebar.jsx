import { useState, useEffect } from 'react'

function Sidebar(props) {

  const [workout, setWorkout] = useState([])

  return (
    <div className="ownedEquip">
      <ul>
        {props.equipment.map((piece) => (
          <li>{piece}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar