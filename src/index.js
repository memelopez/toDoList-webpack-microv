// /src/index.js - entry point

import './styles.css';
import UI from './modules/ui';
import { validateDescription } from './modules/helpfulFunctions';

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

  // Event: when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    UI.changeLiToEditMode(li);
  }

  // Event: when the check icon gets clicked to REMOVE
  if (classesArr.indexOf('removeIcn') !== -1) {
    UI.removeTask(li);
  }

  // Event: when the the accept icon gets clicked to UPDATE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const inputId = `input-${li.dataset.id}`;
    const newDescrip = document.getElementById(inputId).value.trim();
    if (validateDescription(newDescrip)) {
      UI.updateTask(newDescrip, li);
    }
  }
});

// Event: when checkboxes are clicked
document.querySelector('#taskList').addEventListener('change', (e) => {
  // checks if this is trigerring for the correct element
  const checkedCheckbox = e.target;
  if (checkedCheckbox.tagName === 'INPUT' && checkedCheckbox.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const li = e.target.parentElement.parentElement;

    UI.taskCompleted(li);
  }
});

document.querySelector('#clearCompleted').addEventListener('click', () => {
  UI.clearCompleted();
});