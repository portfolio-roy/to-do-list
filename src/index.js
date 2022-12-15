/* eslint-disable no-unused-vars */

import _ from 'lodash';
import './style.scss';
import buildPage from './modules/buildpage.js';

import addSingle from './modules/addsingle.js';
import updateDom from './modules/updatedom.js';
import toDos from './modules/data.js';
import { refreshBtn, addBtn, toDoInput } from './modules/globals.js';

refreshBtn.addEventListener('click', () => updateDom());

addBtn.addEventListener('click', () => {
  addSingle();
});
toDoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});

const clearBtn = document.getElementById('clear-all');
clearBtn.addEventListener('click', () => {
  const listItems = document.querySelectorAll('.to-do-item');
  listItems.forEach((item) => {
    if (item.childNodes[0].childNodes[0].checked) {
      item.remove();
    }
  });
  toDos.clearAll();
  updateDom();
});
window.onload = () => {
  buildPage();
};
