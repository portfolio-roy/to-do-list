import { localData } from './globals.js';

const updateDom = () => {
  const data = localData;
  const list = document.querySelectorAll('.to-do-item');

  list.forEach((listItem, i) => {
    listItem.setAttribute('id', data[i].index);
    listItem.childNodes[0].childNodes[0].setAttribute(
      'id',
      `to-do-checkbox-${data[i].index}`,
    );
    listItem.childNodes[0].childNodes[0].setAttribute(
      'name',
      `to-do-item-${data[i].index}`,
    );
    listItem.childNodes[0].childNodes[0].setAttribute(
      'value',
      `${data[i].description}`,
    );
    listItem.childNodes[0].childNodes[2].setAttribute(
      'id',
      `to-do-item-${data[i].index}`,
    );
    listItem.childNodes[0].childNodes[2].setAttribute(
      'value',
      `${data[i].description}`,
    );
  });
};
export default updateDom;
