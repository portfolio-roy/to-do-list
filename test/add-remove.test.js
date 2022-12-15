/**
 * @jest-environment jsdom
 */

import toDosTest from '../src/modules/data-test';

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
  test('testing edit an item of the to-do list', () => {
    toDosTest.editTask('Clean the toilet', 1);
    const localData = JSON.parse(localStorage.getItem('To-Dos-test'))[0];
    expect(localData.description).toEqual('Clean the toilet');
  });
  test('testing completed method', () => {
    toDosTest.completedTask(1);
    const localData = JSON.parse(localStorage.getItem('To-Dos-test'))[0];
    expect(localData).toHaveProperty('completed');
  });

  test('testing clear-all method', () => {
    toDosTest.clearAll();
    const localData = JSON.parse(localStorage.getItem('To-Dos-test' || '[]'));
    expect(localData).toEqual([]);
  });
});
