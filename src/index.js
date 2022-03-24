// /src/index.js - entry point

import './styles.css';
import Task from './modules/task';
import UI from './modules/ui';
import { validateDescription } from './modules/helpfulFunctions';

const task1 = new Task('wash car', 1);
const task2 = new Task('clean room', 2);
const task3 = new Task('mow lawn', 3);

// tasks array
const todos = [];
todos.push(task1);
todos.push(task2);
todos.push(task3);

// Event: on content load
document.addEventListener('DOMContentLoaded', UI.displayTasks());

// Event: when form is submitted
document.querySelector('#newTask').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (validateDescription(taskDescription)) {
    // Add task
    UI.addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});

// Event: when icon is clicked to add task
document.querySelector('#clickEnterIcon').addEventListener('click', () => {
  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (validateDescription(taskDescription)) {
    // Add task
    UI.addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});

// Event: click anything on taskList
document.querySelector('#taskList').addEventListener('click', (e) => {
  const classesIcn = e.target.parentElement.className;
  const classesArr = classesIcn.split(' ');

  const li = e.target.parentElement.parentElement.parentElement;
  // console.log(li);
  const index = li.dataset.id - 1;

  // Event: when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    UI.changeLiToEditMode(li);
  }

  // Event: when the check icon gets clicked to REMOVE
  if (classesArr.indexOf('removeIcn') !== -1) {
    UI.removeTask(index, li);
  }

  // Event: when the the trash icon gets clicked to UPDATE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const newDesc = document.querySelector('#inputEdit').value.trim();
    if (validateDescription(newDesc)) {
      UI.updateTask(index, newDesc, li);
    }
  }
});