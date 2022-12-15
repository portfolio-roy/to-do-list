export default class ToDo {
  constructor() {
    this.list = [];
  }

  //  a function to add books
  addTask = (singleTask) => {
    this.list.push(singleTask);
    // save it to localStorage
    localStorage.setItem("To-Dos", JSON.stringify(this.list));
  };

  deleteTask = (index) => {
    this.list = this.list.filter((taskObj) => taskObj.index !== index);
    this.list.forEach((taskObj) => {
      taskObj.index = this.list.indexOf(taskObj) + 1;
    });
    localStorage.setItem("To-Dos", JSON.stringify(this.list));
  };
  editTask = (edited, index) => {
    const localData = JSON.parse(localStorage.getItem("To-Dos" || "[]"));
    localData[index - 1].description = edited;
    localStorage.setItem("To-Dos", JSON.stringify(localData));
  };
  completedTask = (index) => {
    this.list = JSON.parse(localStorage.getItem("To-Dos" || "[]"));

    this.list[index - 1].completed = true;

    localStorage.setItem("To-Dos", JSON.stringify(this.list));
  };

  undoComplete = (index) => {
    this.list = JSON.parse(localStorage.getItem("To-Dos" || "[]"));

    this.list[index - 1].completed = false;

    localStorage.setItem("To-Dos", JSON.stringify(this.list));
  };

  clearAll = () => {
    const data = JSON.parse(localStorage.getItem("To-Dos" || "[]"));
    const newData = data.filter((taskObj) => taskObj.completed === false);
    newData.forEach((taskObj) => {
      taskObj.index = newData.indexOf(taskObj) + 1;
    });
    localStorage.setItem("To-Dos", JSON.stringify(newData));
  };
}
