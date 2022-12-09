import updateDom from './updatedom.js';
import toDos from './data.js';

const addItemToPage = (toDo) => {
  const listToDo = document.getElementById('list-to-do');
  const toDoItem = document.createElement('li');
  toDoItem.setAttribute('id', toDo.index);
  toDoItem.classList.add('to-do-item', 'to-do-card');
  toDoItem.innerHTML = `<span class="item-left"><input type="checkbox" class="to-do-checkbox" id="to-do-item-${toDo.index}" name="to-do-item-${toDo.index}" value="${toDo.description}">
  <label for="to-do-item-${toDo.index}" class="item-text">${toDo.description}</label><input type="text" class="edit-input"></span>`;
  const itemRight = document.createElement('span');
  itemRight.classList.add('item-right');
  toDoItem.appendChild(itemRight);
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
  });
  toDoItem.addEventListener('mouseout', () => {
    deleteIco.classList.add('v-hidden');
  });

  listToDo.appendChild(toDoItem);
};

export default addItemToPage;
