// /src/__test__/changeCheckbox.test.js - file runs test on mock functions for updating tasks

import { changeCheckbox, verifyCheckboxStatus } from '../__mock__/changeCheckbox';
import { inicialize3tasksDOM } from '../__mock__/editTask';

describe('Tests for changing status of a checkbox:', () => {
  inicialize3tasksDOM(); // puts 3 tasks DOM

  test('should return error message when index = -2', () => {
    expect(changeCheckbox(-2, true)).toBe('Index must be between 1 and stored tasks length.');
  });

  test('should return true when index is valid (2, true).', () => {
    expect(changeCheckbox(1, true)).toBeTruthy();
  });

  test('should return true when checkbox status from previous test was updated in the DOM.', () => {
    expect(verifyCheckboxStatus(1, true)).toBeTruthy();
  });
});
