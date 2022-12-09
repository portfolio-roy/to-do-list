/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.scss';
import buildPage from './modules/buildpage.js';

import addSingle from './modules/addsingle.js';

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

window.onload = () => {
  buildPage();
};
