import toDos from './data.js';
import addItemToPage from './addtopage.js';

const buildPage = () => {
  toDos.forEach((toDo) => addItemToPage(toDo));
};

export default buildPage;
