import { globaldocument } from '../../dynamic';
import Store from './store';
​
const deleteTask = (index) => {
  let todos = Store.getEmptyTasks();
​
  if (index <= 0 || index > todos.length) {
    return false;
  }
  todos = todos.splice(index - 1, 1);
​
  const tasklist = globaldocument.getElementById('task-list');
  const taskListchildren = tasklist.children;
  const item2remove = taskListchildren[index - 1];
  item2remove.remove();
​
  return Store.setTasks();
};
​
const deleteTask2 = (index) => {
  let todos = Store.getTasksWith3Tasks();
​
  if (index <= 0 || index > todos.length) {
    return false;
  }
  todos = todos.splice(index - 1, 1);
​
  const tasklist = globaldocument.getElementById('task-list');
  const taskListchildren = tasklist.children;
  const item2remove = taskListchildren[index - 1];
  item2remove.remove();
​
  return Store.setTasks();
};
​
export { deleteTask, deleteTask2 };