// __tests__/editTask.test

import { editTask, inicialize3tasks, verifyUpdatedTaskDesc } from '../__mock__/editTask';

describe('Test if task is updated in Local Storage and in DOM: ', () => {
  inicialize3tasks(); // puts 3 tasks in DOM

  test('should return error message when new task description is invalid', () => {
    expect(editTask('', 0)).toBe('New task decription must not be empty.');
  });

  test('should return error message when index = -1.', () => {
    expect(editTask('mow lawn', -1)).toBe('Index must be between 0 and stored tasks length.');
  });

  test('should return error message when index (5) > todos.length (3).', () => {
    expect(editTask('mow lawn', 5)).toBe('Index must be between 0 and stored tasks length.');
  });

  test("should return true when index (2) and newDesc ('mow lawn') are valid", () => {
    expect(editTask('mow lawn', 2)).toBeTruthy(); // changes the li in the DOM
  });

  test("should return true if 'mow lawn' is the text in the second index (2) of the list in the DOM.", () => {
    expect(verifyUpdatedTaskDesc('mow lawn', 2)).toBeTruthy();
  });
});