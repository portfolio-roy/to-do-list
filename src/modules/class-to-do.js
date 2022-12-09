export default class ToDo {
  constructor() {
    // create an array of BookInfos
    this.list = [];
  }

  //  a function to add books
  addTask = (singleTask) => {
    // push BookInfo to bookData
    this.list.push(singleTask);
    // save it to localStorage
    localStorage.setItem('To-Dos', JSON.stringify(this.list));
    // add to the webpage
    //   addToPage(singleBook);
  };

  deleteTask = (index) => {
    // get the book element by id
    const task = document.getElementById(index);
    task.remove();
    this.list = this.list.filter((taskObj) => taskObj.index !== index);
    this.list.forEach((taskObj) => {
      taskObj.index = this.list.indexOf(taskObj) + 1;
    });
    localStorage.setItem('To-Dos', JSON.stringify(this.list));
  };
}
