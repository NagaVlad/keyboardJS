export function events(btnClear, btnSH, textarea, obj, init) {
   btnClear.addEventListener('click', () => {
      textarea.value = ''
   })

   btnSH.addEventListener('click', () => {
      keyboard.classList.toggle('hide')
   })

   document.onkeypress = function (e) {
      document.querySelectorAll(".key-code").forEach(function (el) {
         el.classList.remove('active');
      })

      let keyPressed = document.querySelector(`.key-code[data-key-code='${e.keyCode}']`);
      keyPressed.classList.add('active')
   }
}