/**
 * @jest-environment jsdom
 */

import toDosTest from '../src/modules/data-test.js';

const single = {
  description: 'Clean the house',
  completed: false,
  index: 1,
};

const mockOutput = [
  {
    description: 'Clean the house',
    completed: false,
    index: 1,
  },
];
describe('We are', () => {
  test('testing add items to the to-do list', () => {
    toDosTest.addTask(single);
    const localData = JSON.parse(localStorage.getItem('To-Dos-test'))[0];
    expect(localData).toEqual(mockOutput[0]);
  });
  test('testing delete items from the to-do list', () => {
    toDosTest.deleteTask(1);
    const localData = JSON.parse(localStorage.getItem('To-Dos-test'));
    expect(localData).toEqual([]);
  });
});
