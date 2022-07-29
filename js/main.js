'use strict';

import App from './class/App.js';
import UI from './class/UI.js';

console.log('main.js');

const app = new App();

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
});
