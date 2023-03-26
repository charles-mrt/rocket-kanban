import { Tasks } from "./components/Tasks.js";

const taskState = {
  do : "states-do",
  doing:"states-doing",
  done:"states-done"
}


/**
 * Populates the to-do, doing, and done task lists in the HTML with the corresponding tasks based on their state.
 * @returns {void}
 */

const renderTasksOnView = () => {

    const listOfTaskToDo = document.querySelector(".to-do .task-component");
    const listOfTaskDoing = document.querySelector(".doing .task-component");
    const listOfTaskDone = document.querySelector(".done .task-component");
  
    listOfTaskToDo.innerHTML = Tasks(taskState.do);
    listOfTaskDoing.innerHTML = Tasks(taskState.doing);
    listOfTaskDone.innerHTML = Tasks(taskState.done);
  
  }
    
  renderTasksOnView();