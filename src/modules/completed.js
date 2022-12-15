import { localData } from './globals.js';

const isCompolete = () => {
  const data = localData;
  const checkBox = document.querySelectorAll('.to-do-checkbox');
  checkBox.forEach((checkbox, i) => {
    if (data[i].completed === true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
};

export default isCompolete;
