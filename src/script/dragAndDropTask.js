
/**
 * Adds a `dragstart` event listener to the given task element. 
 * 
 * @param {HTMLElement} task 
 * */

const dragStart = task => {
    task.addEventListener("dragstart", () => {
        task.classList.add("dragging");
    });
}


/**
 * Adds a `dargEnd` event listener to the given task element. 
 * 
 * @param {HTMLElement} task 
 * */

const dargEnd = task => {
    task.addEventListener("dragend", () => {
        task.classList.remove("dragging");
    })
}


/**
 * Adds drag and drop events to each task.
 */

const addDragAndDropEventsToTasks = () => {

    const tasksContent = document.querySelectorAll(".task-content");

    tasksContent.forEach(taskContent => {
        dragStart(taskContent);
        dargEnd(taskContent);
    });
}
addDragAndDropEventsToTasks();



/**
 * Returns the task after the position where the dragging task should be inserted in the list, 
 * based on the current mouse position.
 * 
 * @function getTaskAfterDragTask
 * @param {HTMLElement} task - The task element being dragged.
 * @param {number} yDraggingTask - The current Y position of the dragging task.
 * @returns {HTMLElement} - The task element after the position where the dragging task should be inserted.
 */

const getTaskAfterDragTask = (task, yDraggingTask) => {

    const tasksLists = [...task.querySelectorAll('.task-content:not(.dragging)')];

    return tasksLists.reduce((closestTask, nextTask) => {
        const nextTaskRect = nextTask.getBoundingClientRect();
        const offset = yDraggingTask - nextTaskRect.top - nextTaskRect.height / 2;

        if (offset < 0 && offset > closestTask.offset) {
            return { offset, element: nextTask }
        } else {
            return closestTask;
        }

    }, { offset: Number.NEGATIVE_INFINITY }).element;

}


/**
 * Handles the "dragover" event on task lists to allow for reordering of tasks via drag and drop.
 * 
 * @function handleDragOverOnTaskLists
 * @returns {void}
 */

const handleDragOverOnTaskLists = () => {

    const tasksList = document.querySelectorAll(".task-list");


    tasksList.forEach((taskList) => {
        taskList.addEventListener("dragover", (e) => {
            e.preventDefault();

            const draggingTask = document.querySelector(".dragging");
            const taskAfterDragTask = getTaskAfterDragTask(taskList, e.clientY);

            if (taskAfterDragTask) {
                taskAfterDragTask.parentNode.insertBefore(draggingTask, taskAfterDragTask);

            } else {
                taskList.appendChild(draggingTask);
            }
        });
    });
}
handleDragOverOnTaskLists();


