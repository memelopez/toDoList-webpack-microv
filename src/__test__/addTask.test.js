// __tests__/addTask.test
import { addNewTask, getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Tests to see if task has been added to Storage and to HTML List:', () => {
  test("should return false when description is empty string, ''.", () => {
    expect(addNewTask('')).toBeFalsy();
  });
  test("should return true when 'wash car' is entered.", () => {
    expect(addNewTask('wash car')).toBeTruthy();
  });
  test("should return 1 since 'wash car' was entered.", () => {
    expect(getAmountOfTaskFromDOM()).toBe(1);
  });
  test("should return true when 'clean room' is entered.", () => {
    expect(addNewTask('clean room')).toBeTruthy();
  });
  test("should return 2 since 'clean room' was second tasked entered.", () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});
