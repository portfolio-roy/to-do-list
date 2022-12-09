import toDos from './data.js';
import addItemToPage from './addtopage.js';
import isCompolete from './completed.js';

const buildPage = () => {
  toDos.list = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
  if (toDos.list === null) {
    toDos.list = [];
    return;
  }
  toDos.list.forEach((toDo) => addItemToPage(toDo));
  isCompolete();
};

export default buildPage;
