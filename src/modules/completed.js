import { localData, checkBox } from './globals.js';

const isCompolete = () => {
  const data = localData;

  for (let i = 0; i < checkBox.length; i += 1) {
    if (data[i].completed === true) {
      checkBox[i].checked = true;
    } else {
      checkBox[i].checked = false;
    }
  }
};

export default isCompolete;
