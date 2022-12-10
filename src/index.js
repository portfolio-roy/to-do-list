/* eslint-disable no-unused-vars */

import _ from 'lodash';
import './style.scss';
import buildPage from './modules/buildpage.js';

import addSingle from './modules/addsingle.js';
import updateDom from './modules/updatedom.js';
import toDos from './modules/data.js';

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => updateDom());
const addBtn = document.getElementById('add-btn');
const toDoInput = document.getElementById('to-do-input');
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
  toDos.clearAll();
});
window.onload = () => {
  buildPage();
};
