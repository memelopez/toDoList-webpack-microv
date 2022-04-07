// __tests__/addTask.test
import { deleteTask, deleteTask2 } from '../__mock__/deleteTask';
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Tests to delete a task from DOM and storage:', () => {
  test('should return false when index is less than zero', () => {
    expect(deleteTask(-1)).toBeFalsy();
  });

  test("should return false when index is greater than length of stored ToDo's. length=0 right now", () => {
    expect(deleteTask(3)).toBeFalsy();
  });

  test("should return true when index is from 1 to length of stored ToDo's. First we add 3 tasks and index = 2 is entered.", () => {
    addNewTask('wash car', 1);
    addNewTask('clean room', 2);
    addNewTask('mow lawn', 3);
    expect(deleteTask2(2)).toBeTruthy();
  });
  test('should return the amount of tasks in DOM which is 2 now, because we added 3 tasks initally and deleted one.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});
