import Todo from './Todo.js';

export default class UI {
  static inputEl = document.getElementById('new-todo');
  static addTodoBtnEl = document.getElementById('add-todo');
  static mainListEl = document.getElementById('list-todo');

  static makeNewTodo(app) {
    console.log('makeNewTodo ===');
    const value = UI.inputEl.value;
    app.addTodo(new Todo(value));
    UI.inputEl.value = '';
  }
  /**
   *
   * @param {Todo} todo
   */
  static createLi(todo) {
    const liEl = document.createElement('li');
    liEl.textContent = `${todo.title} created at ${todo.timeStamp}`;
    return liEl;
  }
  /**
   *
   * @param {Todo[]} todoArr
   */
  static appendTodoList(todoArr) {
    UI.mainListEl.innerHTML = '';
    todoArr.forEach((todo) => {
      const singleTodoEl = UI.createLi(todo);
      UI.mainListEl.append(singleTodoEl);
    });
  }
}
