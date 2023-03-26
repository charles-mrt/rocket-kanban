import { taskProperties } from "../taskProperties.js";


/**
  Tasks creates a task component
  @param {string} stateValue - the state value of the tasks to be displayed.
  @return {string}
*/

export const Tasks = (stateValue) => {

  const task = taskProperties(["title", "description", "category", "id"], stateValue);

  let buildTaskView = "";
  for (let i = 0; i < task.length; i++) {

    buildTaskView += `        
        <div 
          id="drag-target-${task[i]["id"]}-${stateValue}" 
          class="task-content" 
          draggable="true"
        >
            <div class="status">               
                <i class="ph-fill ph-hand-grabbing"></i>
                <small>arraste para mudar o estado</small>                                                     
            </div>
          
            <strong class="task-title">
                ${task[i]["title"]}
            </strong>
            
            <p class="task-description">
                ${task[i]["description"]}
            </p>
            
            <div class="task-category">
                <span>${task[i]["category"]}</span>
            </div>

        </div>`;
  }
  return buildTaskView;

}