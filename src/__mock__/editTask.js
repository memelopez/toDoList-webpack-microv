// __mock__/editTask
import { globaldocument } from '../../dynamic';
import Store from './store';
import { validateDescription } from '../modules/helpfulFunctions';

const editTask = (newDesc, index) => {
  if (validateDescription(newDesc)) {
    const todos = Store.getTasksWith3Tasks();
    if (index > 0 && index <= todos.length) {
      const item2change = todos[index - 1];
      item2change.description = newDesc;
      todos[index - 1] = item2change;

      // now we changed the newDesc in DOM
      const tasklist = globaldocument.getElementById('task');
      const li2change = tasklist.children[index - 1];
      const p2change = li2change.children[1];
      p2change.textContent = newDesc;

      return Store.setTasks(); // Setting the tasks in the mockec store class always retunrs TRUE
    }
    return 'Index must be between 0 and stored tasks length.';
  }
  return 'New task decription must not be empty.';
};

const verifyUpdatedTaskDesc = (newDesc, index) => {
  const tasklist = globaldocument.getElementById('task');
  const li2change = tasklist.children[index - 1];
  const p2change = li2change.children[1];
  const actualText = p2change.textContent;
  if (newDesc === actualText) {
    return true;
  }
  return false;
};

const inicialize3tasks = () => {
  const tasklist = globaldocument.getElementById('task');
  tasklist.innerHTML = '';
  const todos = Store.getTasksWith3Tasks();
  todos.forEach((task) => {
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

export { editTask, inicialize3tasks, verifyUpdatedTaskDesc };