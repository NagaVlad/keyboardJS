
import { init } from './init.js';
import { obj } from './init.js'
import { clicked } from './clickHandle.js'
import { events } from './events.js'
import { typeInTextarea } from './readKey.js'
import './styles/styles.css'
import './styles/scss.scss'

let textarea = document.querySelector('#textResult')
let btnClear = document.querySelector('#btn')
let btnSH = document.querySelector('#btnSH')

init(obj);

clicked(obj, textarea, init);

events(btnClear, btnSH, textarea, init);

document.onkeydown = function (e) {
   if (e.shiftKey && e.code === 'AltLeft') {
      obj.lang = !obj.lang
      init(obj);
      clicked(obj, textarea, init)
   }
}




