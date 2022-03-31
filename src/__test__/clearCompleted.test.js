// __test__/clearCompleted.test

import { clearCompleted } from '../__mock__/clearCompleted';
import { inicialize3tasks } from '../__mock__/editTask';
import { getAmountOfTaskFromDOM } from '../__mock__/addTask';

describe('Clear completed tasks : ', () => {
  inicialize3tasks(); // puts 3 tasks in DOM

  test('should return true when called', () => {
    expect(clearCompleted()).toBeTruthy();
  });

  test('since there is only one completed, than test should return 2.', () => {
    expect(getAmountOfTaskFromDOM()).toBe(2);
  });
});