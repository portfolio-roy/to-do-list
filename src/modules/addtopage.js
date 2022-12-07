const addItemToPage = (toDo) => {
  const listToDo = document.getElementById('list-to-do');
  const toDoItem = document.createElement('li');
  toDoItem.classList.add('to-do-item', 'to-do-card');
  toDoItem.innerHTML = `<span class="item-left"><input type="checkbox" id="to-do-item-${toDo.index}" name="to-do-item-${toDo.index}" value="${toDo.description}">
  <label for="to-do-item-${toDo.index}" class="item-text">${toDo.description}</label></span>`;
  const itemRight = document.createElement('span');
  itemRight.classList.add('item-right');
  toDoItem.appendChild(itemRight);
  const deleteIco = document.createElement('i');
  deleteIco.classList.add(
    'fa-solid',
    'fa-trash-can',
    'secondary',
    'delete-ico',
    'd-none',
  );
  itemRight.appendChild(deleteIco);
  const optionIco = document.createElement('i');
  optionIco.classList.add('fa-solid', 'fa-ellipsis-vertical', 'secondary');
  itemRight.appendChild(optionIco);
  toDoItem.addEventListener('mouseover', () => {
    deleteIco.classList.remove('d-none');
  });
  toDoItem.addEventListener('mouseout', () => {
    deleteIco.classList.add('d-none');
  });
  listToDo.appendChild(toDoItem);
};

export default addItemToPage;
