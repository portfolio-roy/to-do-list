export default class ToDoTest {
  constructor() {
    this.list = [];
  }

  addTask = (singleTask) => {
    this.list.push(singleTask);
    localStorage.setItem('To-Dos-test', JSON.stringify(this.list));
  };

  editTask = (edited, index) => {
    const localData = JSON.parse(localStorage.getItem('To-Dos-test' || '[]'));
    localData[index - 1].description = edited;
    localStorage.setItem('To-Dos-test', JSON.stringify(localData));
  };

  deleteTask = (index) => {
    this.list = this.list.filter((taskObj) => taskObj.index !== index);
    this.list.forEach((taskObj) => {
      taskObj.index = this.list.indexOf(taskObj) + 1;
    });
    localStorage.setItem('To-Dos-test', JSON.stringify(this.list));
  };

  completedTask = (index) => {
    this.list = JSON.parse(localStorage.getItem('To-Dos-test' || '[]'));

    this.list[index - 1].completed = true;

    localStorage.setItem('To-Dos-test', JSON.stringify(this.list));
  };

  clearAll = () => {
    const data = JSON.parse(localStorage.getItem('To-Dos-test' || '[]'));
    const newData = data.filter((taskObj) => taskObj.completed === false);
    newData.forEach((taskObj) => {
      taskObj.index = newData.indexOf(taskObj) + 1;
    });
    localStorage.setItem('To-Dos-test', JSON.stringify(newData));
  };
}
