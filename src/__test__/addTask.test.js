// __tests__/addTask.test
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Tests to add tasks to list and storage:', () => {
  test("should return false when '' is entered as a task.", () => {
    expect(addNewTask('')).toBeFalsy();
  });
  test("should return true when 'wash car' is entered.", () => {
    expect(addNewTask('wash car')).toBeTruthy();
  });
  test('should return 1 when checking te jsDOM since one task has been added.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(1);
  });
  test("should return true when 'clean room' is entered as a task.", () => {
    expect(addNewTask('clean room')).toBeTruthy();
  });
  test('should return 2 tasks from the DOM.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});
