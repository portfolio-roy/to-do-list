import updateDom from './updatedom.js';
import toDos from './data.js';
import { editItem, saveItem } from './edititem.js';

const addItemToPage = (toDo) => {
  const listToDo = document.getElementById('list-to-do');
  const toDoItem = document.createElement('li');
  toDoItem.setAttribute('id', toDo.index);
  toDoItem.classList.add('to-do-item', 'to-do-card');
  toDoItem.innerHTML = `<span class="item-left"><input type="checkbox" class="to-do-checkbox" id="to-do-checkbox-${toDo.index}" name="to-do-item-${toDo.index}" value="${toDo.description}">
  <input id="to-do-item-${toDo.index}" class="item-text" value="${toDo.description}" readonly></span>`;
  const itemRight = document.createElement('span');
  itemRight.classList.add('item-right');
  toDoItem.appendChild(itemRight);

  // Edit button
  const editIco = document.createElement('i');
  editIco.classList.add(
    'fa-regular',
    'fa-pen-to-square',
    'secondary',
    'edit-ico',
    'v-hidden',
  );
  editIco.setAttribute('id', `edit-${toDo.index}`);
  //  Save button
  const saveIco = document.createElement('i');
  saveIco.classList.add(
    'fa-regular',
    'fa-floppy-disk',
    'secondary',
    'save-ico',
    'd-none',
  );
  saveIco.setAttribute('id', `save-${toDo.index}`);

  editIco.addEventListener('click', () => {
    editItem(toDo.index);
    saveIco.classList.remove('d-none');
    editIco.classList.add('d-none');
  });
  itemRight.appendChild(editIco);
  saveIco.addEventListener('click', () => {
    saveItem(toDo.index);
    saveIco.classList.add('d-none');
    editIco.classList.remove('d-none');
    updateDom();
  });
  itemRight.appendChild(saveIco);

  const deleteIco = document.createElement('i');
  deleteIco.classList.add(
    'fa-solid',
    'fa-trash-can',
    'secondary',
    'delete-ico',
    'v-hidden',
  );
  deleteIco.addEventListener('click', () => {
    toDos.deleteTask(toDo.index);
    updateDom();
  });
  itemRight.appendChild(deleteIco);
  const optionIco = document.createElement('i');
  optionIco.classList.add('fa-solid', 'fa-ellipsis-vertical', 'secondary');
  itemRight.appendChild(optionIco);
  toDoItem.addEventListener('mouseover', () => {
    deleteIco.classList.remove('v-hidden');
    editIco.classList.remove('v-hidden');
  });
  toDoItem.addEventListener('mouseout', () => {
    deleteIco.classList.add('v-hidden');
    editIco.classList.add('v-hidden');
  });

  listToDo.appendChild(toDoItem);
  const toDoCheckBox = toDoItem.childNodes[0].childNodes[0];
  toDoCheckBox.addEventListener('change', () => {
    if (toDoCheckBox.checked) {
      toDos.completedTask(toDo.index);
    } else {
      toDos.undoComplete(toDo.index);
    }
  });
  const itemText = toDoItem.childNodes[0].childNodes[2];
  itemText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      saveIco.click();
    }
  });
  itemText.addEventListener('dblclick', () => {
    editIco.click();
  });
  itemText.addEventListener('click', () => {
    if (toDoCheckBox.checked) {
      toDoCheckBox.checked = false;
    } else {
      toDoCheckBox.checked = true;
    }
  });
};

export default addItemToPage;
