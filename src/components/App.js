import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  function handleCategoryClick(category){
  setSelectedCategory(category)
  }
  function handleDelete(taskText){
    const updateTask = tasks.filter((task) => task.text !== taskText)
    setTask(updateTask)
  }

  const filteredArray = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  function handleTaskFormSubmit(NewTask){
    setTask([...tasks, NewTask])
  }

  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryClick={handleCategoryClick} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} categories={CATEGORIES} />
      <TaskList tasks={filteredArray} onDelete={handleDelete} />
    </div>
  );
}

export default App;
