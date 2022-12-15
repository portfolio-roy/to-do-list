export const localData = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
export const refreshBtn = document.getElementById('refresh-btn');
export const addBtn = document.getElementById('add-btn');
export const toDoInput = document.getElementById('to-do-input');
export const checkBox = document.querySelectorAll('.to-do-checkbox');
export const listItems = document.querySelectorAll('.to-do-item');
export const listToDo = document.getElementById('list-to-do');
