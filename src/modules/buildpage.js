import toDos from './data.js';
import addItemToPage from './addtopage.js';

const buildPage = () => {
  toDos.list = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  if (toDos.list === null) {
    toDos.list = [];
    return;
  }
  toDos.list.forEach((toDo) => addItemToPage(toDo));
};

export default buildPage;
