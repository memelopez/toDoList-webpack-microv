// checkboxes.js

import Store from './store';

// function to change isCompleted value of tasks
const taskCompleted = (li) => {
  // Gets list from local storage
  const toDos = Store.getTasks();

  const position2chage = li.dataset.id - 1;
  const value = li.children[0].children[0].checked;

  toDos[position2chage].isCompleted = value;

  // Set items to storage
  Store.setTasks(toDos);

  // change strike through class
  if (value) {
    li.children[0].children[1].classList.add('strikethr');
  } else {
    li.children[0].children[1].classList.remove('strikethr');
  }
};

export default taskCompleted;