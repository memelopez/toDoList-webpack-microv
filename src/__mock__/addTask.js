// __tests__/addTask
import { globaldocument } from '../../dynamic';

import { validateDescription } from '../modules/helpfulFunctions';
import Task from '../modules/task';
import Store from './store';

const addNewTask = (description) => {
  if (validateDescription(description)) {
    const todos = Store.getEmptyTasks();
    const neo = new Task(description, todos.length);
    todos.push(neo);
    Store.setTasks();
    const tasklist = globaldocument.getElementById('task');

    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = neo.isCompleted;
    const p = document.createElement('p');
    p.textContent = neo.description;
    const span = document.createElement('span');
    span.textContent = 'delete';

    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(span);
    tasklist.appendChild(div);

    return true;
  }
  return false;
};

const getAmountOfTaskFromDOM = () => {
  const tasklist = globaldocument.getElementById('task');
  const taskListLength = tasklist.children.length;
  return taskListLength;
};

export { addNewTask, getAmountOfTaskFromDOM };
