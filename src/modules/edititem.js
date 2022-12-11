import { localData } from './globals.js';

const editItem = (index) => {
  const itemText = document.getElementById(`to-do-item-${index}`);
  itemText.removeAttribute('readonly');
  itemText.style.border = '2px solid gray';
};

const saveItem = (index) => {
  const task = document.getElementById(`to-do-item-${index}`);
  const data = localData;
  data[index - 1].description = task.value;
  localStorage.setItem('To-Dos', JSON.stringify(data));
  task.readOnly = true;
  task.style.border = 'none';
};
export { editItem, saveItem };
