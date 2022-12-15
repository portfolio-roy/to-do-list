// import { localData } from "./globals.js";
import toDos from './data.js';

const editItem = (index) => {
  const itemText = document.getElementById(`to-do-item-${index}`);
  itemText.removeAttribute('readonly');
  itemText.style.border = '2px solid gray';
};

const saveItem = (index) => {
  const task = document.getElementById(`to-do-item-${index}`);
  const editedTask = task.value;
  toDos.editTask(editedTask, index);
  task.readOnly = true;
  task.style.border = 'none';
};
export { editItem, saveItem };
