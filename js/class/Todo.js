export default class Todo {
  // savybe pridedama prie klases on ne prie klases objektu
  static todoCount = 0;

  constructor(newTitle) {
    this.id = `t_${++Todo.todoCount}`;
    this.title = newTitle;
    this.complete = false;
    this.timeStamp = new Date().toLocaleTimeString();
  }

  toggleComplete() {
    this.complete = !this.complete;
    this.timeStamp = new Date().toLocaleTimeString();
  }
}
