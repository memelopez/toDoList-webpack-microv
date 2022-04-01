// __test__/changeCheckbox.test

import { changeCheckbox, verifyCheckboxStatus } from '../__mock__/changeCheckbox';
import { inicialize3tasks } from '../__mock__/editTask';

describe('Change checkboxes status: ', () => {
  inicialize3tasks(); // puts 3 tasks DOM

  test('should return error message when index is invalid', () => {
    expect(changeCheckbox(-2, true)).toBe('Index must be between 1 and stored tasks length.');
  });

  test('should return true when index is valid', () => {
    expect(changeCheckbox(2, true)).toBeTruthy();
  });

  test('should return true when checkbox status from previous test was updated in the DOM.', () => {
    expect(verifyCheckboxStatus(2, true)).toBeTruthy();
  });
});
