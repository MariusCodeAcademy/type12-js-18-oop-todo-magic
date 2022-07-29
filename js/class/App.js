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

  toggleDone(idToToggle) {
    // surasti el, kurio id === idToggle ir jam iskviesti toggleComplete()
    console.log('idToToggle ===', idToToggle);
    const found = this.todoArr.find((todo) => todo.id === idToToggle);
    if (!found) console.log('neradom');
    found.toggleComplete();
    this.renderTodos();
  }

  renderTodos() {
    UI.appendTodoList(this.todoArr);
  }
}
