import { tasks } from '../../data.js';

/**
Maps an array of tasks based on their properties and state
@param {Array} properties - An array of strings with the properties to extract from each task
@param {string} state - The state of the tasks to retrieve from the global tasks object
@returns {Array} An array of objects containing the requested properties for each task of the given state
*/

export const taskProperties = (properties, state) => {
  const tasksToDo = tasks[state];
  const result = tasksToDo.map(task => {
    const obj = {};
    properties.forEach(prop => {
      obj[prop] = task[prop];
    });
    return obj;
  });
  return result;
};
