import { tasks } from '../../../data.js';


const taskProperties = (properties, state) => {
    const tasksToDo = tasks[state];
    const result = tasksToDo.map(task => {
        const obj = {};
        properties.forEach(prop => {
            obj[prop] = task[prop];
        });
        return obj;
    });
    console.log(result);
    return result;
};



const Tasks = (stateValue) => {

    const task = taskProperties(["title", "description", "category"], stateValue);

    let buildTaskView = "";
    for (let i = 0; i < task.length; i++) {

        buildTaskView += `
      
        <div class="task-content">
        <span class="status">
            <i class="ph-fill ph-traffic-signal"></i>
        </span>

            <strong class="task-title"> 
                ${task[i]["title"]}
            </strong>
            
            <p class="task-description">
                ${task[i]["description"]}
            </p>
            
            <div class="task-category">
                <span>${task[i]["category"]}</span>
            </div>

        </div>
    `;
    }
    return buildTaskView;

}


const renderTasksOnView = () => {

    const listOfTaskToDo = document.querySelector(".to-do > div");
    const listOfTaskDoing = document.querySelector(".doing > div");
    const listOfTaskDone = document.querySelector(".done > div");

    listOfTaskToDo.innerHTML = Tasks("states-do");
    listOfTaskDoing.innerHTML = Tasks("states-doing");
    listOfTaskDone.innerHTML = Tasks("states-done");

}


renderTasksOnView()
