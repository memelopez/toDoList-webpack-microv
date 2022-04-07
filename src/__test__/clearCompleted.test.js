// /src/__test__/clearCompleted.test.js - tests for clear completed mock function

import { clearCompleted } from '../__mock__/clearCompleted';
import { inicialize3tasksDOM } from '../__mock__/editTask';
import { getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Tests if completed task get removed:', () => {
  inicialize3tasksDOM(); // puts 3 tasks in DOM

  test('should return true when called', () => {
    expect(clearCompleted()).toBeTruthy();
  });

  test('since there is only one completed, than test should return 2.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});