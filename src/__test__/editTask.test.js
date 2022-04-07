// /src/__test__/editTask.test.js - file that runs the rest for editing a task

import { editTask, inicialize3tasksDOM, verifyUpdatedTaskDesc } from '../__mock__/editTask';

describe('Tests for updating existing tasks', () => {
  inicialize3tasksDOM(); // puts 3 tasks in DOM

  test("should return error message when new task description is empty ('')", () => {
    expect(editTask('', 0)).toBe('New task decription must not be empty.');
  });

  test('should return error message when index = -1', () => {
    expect(editTask('mow lawn', -1)).toBe('Index must be between 1 and stored tasks length.');
  });

  test("should return true when index and newDesc are valid ('mow lawn', 2)", () => {
    expect(editTask('mow lawn', 2)).toBeTruthy(); // changes the li in the DOM
  });

  test('should return true when the newDesc from previous test was updated in the DOM.', () => {
    expect(verifyUpdatedTaskDesc('mow lawn', 2)).toBeTruthy();
  });
});