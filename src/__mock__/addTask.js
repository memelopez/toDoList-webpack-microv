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

    const tasklist = globaldocument.getElementById('task-list');

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = neo.isCompleted;
    const p = document.createElement('p');
    p.textContent = neo.description;
    const span = document.createElement('span');
    span.textContent = 'delete';

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(span);
    tasklist.appendChild(li);

    return Store.setTasks();
  }
  return false;
};

const getAmountOfTaskFromDOM = () => {
  const tasklist = globaldocument.getElementById('task-list');
  const taskListLength = tasklist.children.length;
  return taskListLength;
};

export { addNewTask, getAmountOfTaskFromDOM };
