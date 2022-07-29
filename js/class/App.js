import UI from './UI.js';

export default class App {
  constructor() {
    this.todoArr = [];
  }

  addTodo(todo) {
    this.todoArr.push(todo);
    console.log('this.todoArr ===', this.todoArr);
    this.renderTodos();
  }

  removeTodo(idTodDelete) {
    const todoArrAfterDelete = this.todoArr.filter((todo) => todo.id !== idTodDelete);
    this.todoArr = todoArrAfterDelete;
    console.log('this.todoArr after delete ===', this.todoArr);
    this.renderTodos();
  }

  renderTodos() {
    UI.appendTodoList(this.todoArr);
  }
}
