import React, {useState} from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
const [text, setText] = useState("");
const [category, setCategory] = useState("");
  function handleText(event){
    setText(event.target.value)
  };

  function handleCategory(event){
    setCategory(event.target.value)
  };

  function handleSubmit(e){
    e.preventDefault()

    const newTask = {
      text: text,
      category: category
    };
    onTaskFormSubmit(newTask)
  }

  console.log(" NewTaskForm:", categories);
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
        {categories
        .filter((category) => category !== "All")
        .map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
       ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}


export default NewTaskForm;
