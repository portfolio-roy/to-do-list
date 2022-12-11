import { localData } from './globals.js';

const setIndex = () => {
  const toDoList = localData;
  let index;
  if (toDoList === null) {
    index = 1;
  } else {
    index = toDoList.length + 1;
  }
  return index;
};
export default setIndex;
