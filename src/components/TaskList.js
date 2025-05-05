import React from "react";
import Task from './Task'

function TaskList({tasks, onDelete}){
  
   const taskArray = tasks.map((task, index) =>{
      return <Task key={index} text={task.text} category={task.category} onDelete={onDelete} />
   })
   console.log("TaskList props:", { tasks, onDelete });
  return(
    <div className="tasks">{taskArray}</div>
  );
}

export default TaskList;
/* display a list of tasks using Task component */

/*TaskList
First, we'll want to display all the tasks in our app. Pass down the task data from App to TaskList, and display each task using the Task component. 
Make sure to use a key prop! (done)

Task
Update the Task component so that it shows the task's text and category.(done)

When the delete button is clicked, the task should be removed from the list.(done)

CategoryFilter
Pass the list of categories to this component from App. Then, update this component to display <button> elements for each category. 
In order to pass the test, the buttons will need a key prop equal to the category.

When a button is clicked, the following should happen:

Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
If the button for "All" is selected, all the tasks should be displayed.
NewTaskForm
Pass the list of categories to this component from App. Then, update this component to display <option> elements 
for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

Next, update this form to be a controlled component, so that all form inputs are captured in state.

When the form is submitted, add a new task to the list with the text and category from the form. For the tests for this feature to pass, 
you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.*/

