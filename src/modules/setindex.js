const setIndex = () => {
  const toDoList = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  let index;
  if (toDoList === null) {
    index = 1;
  } else {
    index = toDoList.length + 1;
  }
  return index;
};
export default setIndex;
