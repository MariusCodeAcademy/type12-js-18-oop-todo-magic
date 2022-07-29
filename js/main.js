'use strict';

import App from './class/App.js';
import Todo from './class/Todo.js';
import UI from './class/UI.js';

console.log('main.js');

const app = new App();
const t1 = new Todo('Buy milk');

app.addTodo(new Todo('Buy milk'));
app.addTodo(new Todo('Read a book'));
app.addTodo(new Todo('Run Run Run'));

// Event Listeners

UI.addTodoBtnEl.addEventListener('click', () => {
  UI.makeNewTodo(app);
});

UI.mainListEl.addEventListener('click', (event) => {
  const elWePressedOn = event.target;

  if (elWePressedOn.tagName === 'BUTTON') {
    const liId = elWePressedOn.parentElement.dataset.id;
    UI.delete(app, liId);
  }

  if (elWePressedOn.tagName === 'LI') {
    const liId = elWePressedOn.dataset.id;
    app.toggleDone(liId);
  }
});
