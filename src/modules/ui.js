// /src/modules/ui.js - User Interface class: deals with manipulating the DOM

export default class UI {
  static addTask2list(task) {
    const list = document.querySelector('#taskList');

    const item = document.createElement('li'); // creates list item
    item.className = 'listItem appItem';

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
      text.classList.add('lineThrough');
    }
    divNormal.appendChild(text); // appends p to item

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v txt-mPlus';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    divNormal.appendChild(aEdit); // appends achor to divNormal

    item.appendChild(divNormal);// -- appends divNormal to item

    list.appendChild(item); // appends item to list
  }

  static displayTasks(todos) {
    const list = document.querySelector('#taskList');
    list.innerHTML = '';

    todos.forEach((task) => this.addTask2list(task));
  }
}