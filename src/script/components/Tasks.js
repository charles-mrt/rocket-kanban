
const task = {
    id: 1,
    state: ["do", "doing", "done"],
    title: "#boraCodar um Kanban 🧑‍💻",
    description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    catagory: ["rocketseat", "desafio"],
}



const Tasks = (totalTasks) => {
    let buildTaskView = "";

    for (let i = 0; i < totalTasks; i++) {

        buildTaskView += `
      
        <div class="task-content">

            <strong class="task-title"> 
                ${task.title}
            </strong>
            
            <p class="task-description">
                ${task.description}
            </p>
            
            <div class="task-category">
                <span>${task.catagory[0]}</span>
                <span>${task.catagory[1]}</span>
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

    listOfTaskToDo.innerHTML = Tasks(1);
    listOfTaskDoing.innerHTML = Tasks(2);
    listOfTaskDone.innerHTML = Tasks(3);

}


renderTasksOnView()
