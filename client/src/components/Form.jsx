function Form(props) {
  return (
    <form>
      <label htmlFor="excerciseName">Exercise Name: </label>
      <input />
      <label htmlFor="excerciseName">Add Video URL: </label>
      <input />
      <select name="select body part">
        <option value="select body part" selected>Select Body Part</option>
        <option value="chest">Chest</option>
        <option value="biceps">Biceps</option>
      </select>
      <select>
        <option value="select equipment" selected>Select Equipment</option>
        <option value="barbell">Barbell</option>
        <option value="dumbbells">Dumbells</option>
      </select>
      <label htmlFor="excerciseName">Add Workout Description: </label>
      <textarea />
      <label htmlFor="excerciseName">Add Workout Tips: </label>
      <textarea />
    </form>
  )
}

export default Form