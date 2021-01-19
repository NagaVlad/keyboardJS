import { typeInTextarea, typeInTextarea2 } from './typeInTextare.js'
export function clicked(state, textarea, init) {
   const keyCode = document.querySelectorAll(".key-code");
   keyCode.forEach(function (el) {
      el.addEventListener('click', (e) => {
         if (el.getAttribute('data-key-code') == 32) {
            typeInTextarea(e.target.textContent = ' ', textarea)
            e.target.textContent = "SPACE"
         }
         else if (el.getAttribute('data-key-code') == 20) {
            el.classList.toggle('active2')
            state.caps = !state.caps
            init(state);
            clicked(state, textarea, init)
         }
         else if (el.getAttribute('data-key-code') == 16) {
            el.classList.toggle('active2')
            state.caps = !state.caps
         }
         else if (el.getAttribute('data-key-code') == 13) {
            typeInTextarea('\n', textarea)
         }
         else if (el.getAttribute('data-key-code') == 8) {
            typeInTextarea2(e.target.textContent.substr(0, e.target.textContent.length - 1), textarea)
         }
         else if (el.getAttribute('data-key-code') == 18) {
            state.lang = !state.lang
            init(state);
            clicked(state, textarea, init)
         }
         else {
            state.caps ? typeInTextarea(e.target.textContent.trim().toLocaleUpperCase(), textarea)
               : typeInTextarea(e.target.textContent.trim().toLocaleLowerCase(), textarea);
            let shift = document.querySelector(`.key-code[data-key-code='16']`)
            if (shift.classList.contains('active2')) {
               state.caps = !state.caps
               shift.classList.remove('active2')
            }
         }
      });
   });
}
