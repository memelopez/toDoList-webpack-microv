// __tests__/addTask.test
import { deleteTask, deleteTask2 } from '../__mock__/deleteTask';
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Tests to see if a task is deleted from LocaclStorage and HTML DOM', () => {
  test('should return false when index is less than zero', () => {
    expect(deleteTask(-1)).toBeFalsy();
  });

  test("should return false when index (e) is greater than length of stored ToDo's. No Todo's stored right now.", () => {
    expect(deleteTask(3)).toBeFalsy();
  });

  test("after entering three ToDo's, test should return true when index (1) is entered for delete.", () => {
    addNewTask('do laudry');
    addNewTask('walk dog');
    addNewTask('mow lawn');
    expect(deleteTask2(1)).toBeTruthy();
  });

  test('test should return the amount of tasks in DOM after entering 3 and deleting 1 (3-1=2).', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});