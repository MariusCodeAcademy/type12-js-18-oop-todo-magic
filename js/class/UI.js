import Todo from './Todo.js';

export default class UI {
  static inputEl = document.getElementById('new-todo');
  static addTodoBtnEl = document.getElementById('add-todo');
  static mainListEl = document.getElementById('list-todo');

  static makeNewTodo(app) {
    const value = UI.inputEl.value;
    app.addTodo(new Todo(value));
    UI.inputEl.value = '';
  }
}
