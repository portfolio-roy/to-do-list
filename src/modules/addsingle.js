import readInput from './readinput.js';
import toDos from './data.js';
import addItemToPage from './addtopage.js';

const addSingle = () => {
  const singleTask = readInput();
  if (singleTask !== false && singleTask !== null) {
    toDos.addTask(singleTask);
    addItemToPage(singleTask);
  }
};

export default addSingle;
