export default class ToDo {
  constructor() {
    this.list = [];
  }

  //  a function to add books
  addTask = (singleTask) => {
    this.list.push(singleTask);
    // save it to localStorage
    localStorage.setItem('To-Dos', JSON.stringify(this.list));
  };

  deleteTask = (index) => {
    this.list = this.list.filter((taskObj) => taskObj.index !== index);
    this.list.forEach((taskObj) => {
      taskObj.index = this.list.indexOf(taskObj) + 1;
    });
    localStorage.setItem('To-Dos', JSON.stringify(this.list));
  };

  completedTask = (index) => {
    this.list = JSON.parse(localStorage.getItem('To-Dos' || '[]'));

    this.list[index - 1].completed = true;

    localStorage.setItem('To-Dos', JSON.stringify(this.list));
  };

  undoComplete = (index) => {
    this.list = JSON.parse(localStorage.getItem('To-Dos' || '[]'));

    this.list[index - 1].completed = false;

    localStorage.setItem('To-Dos', JSON.stringify(this.list));
  };

  clearAll = () => {
    const listItems = document.querySelectorAll('.to-do-item');
    for (let i = 0; i < listItems.length; i += 1) {
      if (listItems[i].childNodes[0].childNodes[0].checked) {
        listItems[i].remove();
      }
    }
    const data = JSON.parse(localStorage.getItem('To-Dos' || '[]'));
    const newData = data.filter((taskObj) => taskObj.completed === false);
    newData.forEach((taskObj) => {
      taskObj.index = newData.indexOf(taskObj) + 1;
    });
    localStorage.setItem('To-Dos', JSON.stringify(newData));
  };
}
