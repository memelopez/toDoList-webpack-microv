// /src/modules/ui.js - User Interface class: deals with manipulating the DOM

import Task from './task';
import Store from './store';
import taskCompleted from './checkboxes';
import { clearCompleted } from './helpfulFunctions';

export default class UI {
  static addTask2list(task) {
    const list = document.querySelector('#taskList');

    const item = document.createElement('li'); // creates list item
    item.className = 'listItem appItem';
    item.dataset.id = task.index;
    item.id = `todo-${task.index}`;

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'normalView';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    checkbox.className = 'form-check-label p-0';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'pTask txt-mLG';
    if (task.isCompleted === true) {
      text.classList.add('strikethr');
    }
    divNormal.appendChild(text); // appends p to item

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v txt-mPlus';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    divNormal.appendChild(aEdit); // appends achor to divNormal

    item.appendChild(divNormal);// -- appends divNormal to item

    // Create div for edit view
    const divEdit = document.createElement('div');
    divEdit.className = 'editView hide';

    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.setAttribute('id', `input-${task.index}`);
    inputEdit.className = 'inputEdit txt-mPlus';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    const aAccept = document.createElement('a');
    aAccept.className = 'acceptIcn';
    const iconAccept = document.createElement('i'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle txt-mPlus';
    aAccept.appendChild(iconAccept); // appends accept icon to anchor
    divEdit.appendChild(aAccept); // appends accpet anchor to item

    const aRemove = document.createElement('a');
    aRemove.className = 'removeIcn';
    const iconRemove = document.createElement('i'); // creates remove icon
    iconRemove.className = 'fas fa-trash txt-mPlus';
    aRemove.appendChild(iconRemove); // appends remove icon to anchor
    divEdit.appendChild(aRemove); // appends remove anchor to item

    item.appendChild(divEdit);// -- appends divEdit to item

    list.appendChild(item); // appends item to list
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#taskList');

    const item = document.createElement('li'); // creates list item
    item.className = 'appItem';

    const p = document.createElement('p');
    p.className = 'noToDos';
    p.textContent = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static displayTasks() {
    const list = document.querySelector('#taskList');
    list.innerHTML = '';

    const todos = Store.getTasks();
    if (todos.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      todos.forEach((task) => this.addTask2list(task));
    }
  }

  static addTask(newDescrip) {
    const todos = Store.getTasks();
    const neo = new Task(newDescrip, todos.length + 1);
    todos.push(neo);
    // updates indexes
    todos.forEach((todo, i) => { todo.index = i + 1; });
    Store.setTasks(todos);
    if (todos.length === 1) {
      document.querySelector('#taskList').innerHTML = '';
    }
    // adds single task: neo
    this.addTask2list(todos[todos.length - 1]);
  }

  static changeLiToEditMode(li) {
    const lisChildren = li.children;
    // change clases of divs
    const normalView = lisChildren[0];
    normalView.classList.add('hide');

    const editView = lisChildren[1];
    editView.classList.remove('hide');

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.focus();
  }

  static removeTask(li) {
    const todos = Store.getTasks();
    const i = li.dataset.id - 1;
    todos.splice(i, 1);
    // updates indexes
    todos.forEach((todo, j) => { todo.index = j + 1; });
    Store.setTasks(todos);
    li.remove();
    if (todos.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      this.reIndexLiIds();
    }
  }

  static reIndexLiIds() {
    const taskList = document.querySelector('#taskList');
    const lisTL = Array.from(taskList.children);
    lisTL.forEach((li, i) => {
      li.dataset.id = i + 1;
      li.id = `todo-${i + 1}`;
      li.children[1].children[0].id = `input-${li.dataset.id}`;
    });
    // console.log('ui.js - reIndex() - totalLis: ', totalLis);
  }

  static updateTask(newDesc, li) {
    const todos = Store.getTasks();
    const pos2change = li.dataset.id - 1;
    todos[pos2change].description = newDesc;
    Store.setTasks(todos);
    // changes li to normal view with new task description
    this.changeLiToNormalView(newDesc, li);
  }

  static changeLiToNormalView(newDesc, li) {
    const lisChildren = li.children;
    // change clases of divs
    const normalView = lisChildren[0];
    normalView.classList.remove('hide');
    const editView = lisChildren[1];
    editView.classList.add('hide');

    // change task desc
    const childrenNV = normalView.children;
    childrenNV[1].textContent = newDesc;
  }

  static taskCompleted(li) {
    taskCompleted(li);
  }

  static clearCompleted() {
    clearCompleted();
    this.displayTasks();
  }
}