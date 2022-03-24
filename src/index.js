// /src/index.js - entry point

import './styles.css';
import Task from './modules/task';
import UI from './modules/ui';

const task1 = new Task('wash car', 1);
const task2 = new Task('clean room', 2);
const task3 = new Task('mow lawn', 3);

// tasks array
const todos = [];
todos.push(task1);
todos.push(task2);
todos.push(task3);

// Event: on content load
document.addEventListener('DOMContentLoaded', UI.displayTasks(todos));