export default class ToDoTest {
  constructor() {
    this.list = [];
  }

  addTask = (singleTask) => {
    this.list.push(singleTask);
    localStorage.setItem("To-Dos-test", JSON.stringify(this.list));
  };

  deleteTask = (index) => {
    this.list = this.list.filter((taskObj) => taskObj.index !== index);
    this.list.forEach((taskObj) => {
      taskObj.index = this.list.indexOf(taskObj) + 1;
    });
    localStorage.setItem("To-Dos-test", JSON.stringify(this.list));
  };
}
