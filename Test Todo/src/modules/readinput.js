import TaskInfo from './class-task.js';

import setIndex from './setindex.js';

const readInput = () => {
  // get book title from the input
  const task = document.getElementById('to-do-input');
  if (task.value === '') {
    task.setAttribute('placeholder', 'Please enter a task');
    task.classList.add('error');
    return false;
  }
  if (task.classList.contains('error')) {
    task.classList.remove('error');
    task.setAttribute('placeholder', 'Add your list');
  }
  const singleTaskInput = new TaskInfo(task.value, false, setIndex());
  task.value = '';
  return singleTaskInput;
};

export default readInput;
