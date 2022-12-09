const editItem = (index) => {
  const itemText = document.getElementById(`to-do-item-${index}`);
  itemText.removeAttribute('readonly');
  itemText.style.border = '2px solid gray';
};

const saveItem = (index) => {
  const task = document.getElementById(`to-do-item-${index}`);
  const data = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  data[index - 1].description = task.value;
  localStorage.setItem('To-Dos', JSON.stringify(data));
  task.readOnly = true;
  task.style.border = 'none';
};
export { editItem, saveItem };
//   itemText.addEventListener("click", () => {
//     itemText.setAttribute("contenteditable", true);
//   });
