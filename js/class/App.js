export default class App {
  constructor() {
    this.todoArr = [];
  }

  addTodo(todo) {
    this.todoArr.push(todo);
    console.log('this.todoArr ===', this.todoArr);
  }
}
