
import { init } from './init.js';
import { state } from './keyForKeyboard.js'
import { textarea, btnClear, btnSH } from './keyForKeyboard.js'
import { clicked } from './clickHandle.js'
import { events } from './events.js'
import './styles/styles.css'
import './styles/scss.scss'

init(state);
clicked(state, textarea, init);
events(btnClear, btnSH, textarea);

document.onkeydown = function (e) {
   if (e.shiftKey && e.code === 'AltLeft') {
      state.lang = !state.lang
      init(state);
      clicked(state, textarea, init)
   }
}




