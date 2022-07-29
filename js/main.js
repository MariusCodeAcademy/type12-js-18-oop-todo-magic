'use strict';

import App from './class/App.js';
import UI from './class/UI.js';

console.log('main.js');

const app = new App();

// Event Listeners

UI.addTodoBtnEl.addEventListener('click', () => {
  UI.makeNewTodo(app);
});
