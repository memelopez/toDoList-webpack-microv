// __mock__/changeCheckbox
import { globaldocument } from '../../dynamic';
import Store from './store';

const changeCheckbox = (index, value) => {
  const todos = Store.getTasksWith3Tasks();

  if (index > 0 && index <= todos.length) {
    const item2change = todos[index - 1];
    item2change.isCompleted = value;

    // now we changed the newDesc in DOM
    const tasklist = globaldocument.getElementById('task');
    const li2change = tasklist.children[index - 1];
    const checkboxToChange = li2change.children[0];
    checkboxToChange.checked = value;

    return Store.setTasks(); // Setting the tasks in the mockec store class always retunrs TRUE
  }
  return 'Index must be between 1 and stored tasks length.';
};

const verifyCheckboxStatus = (index, value) => {
  const tasklist = globaldocument.getElementById('task');
  const li2change = tasklist.children[index - 1];
  const checkboxToChange = li2change.children[0];
  const checkboxValue = checkboxToChange.checked;

  if (checkboxValue === value) {
    return true;
  }
  return false;
};

export { changeCheckbox, verifyCheckboxStatus };