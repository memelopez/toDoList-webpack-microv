// /src/__mock__/clearCompleted.js - file that contain mock functions for clear completed

import { globaldocument } from '../../dynamic';
import Store from './store';
import returnsUncompleted from '../modules/returnsUncompleted';

const repopulateListDOM = (tasks) => {
  const tasklist = globaldocument.getElementById('task-list');
  tasklist.innerHTML = '';
  tasks.forEach((task) => {
    // create li and appends it
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    const p = document.createElement('p');
    p.textContent = task.description;
    const span = document.createElement('span');
    span.textContent = 'delete';

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(span);
    tasklist.appendChild(li);
  });
};

const clearCompleted = () => {
  const todos = Store.getTasksWith3Tasks();
  const uncompletedTasks = todos.filter(returnsUncompleted); // new array with uncompleted tasks

  // now change stuff in the DOM
  repopulateListDOM(uncompletedTasks);

  return Store.setTasks();
};

export { clearCompleted, repopulateListDOM };