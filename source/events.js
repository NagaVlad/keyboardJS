export function events(btnClear, btnSH, textarea) {

   btnClear.addEventListener('click', () => {
      textarea.value = ''
   })

   btnSH.addEventListener('click', () => {
      keyboard.classList.toggle('hide')
   })
   document.onkeyup = function (e) {
      document.querySelectorAll(".key-code").forEach(function (el) {
         el.classList.remove('active3');
      })
   }

   document.onkeypress = function (e) {
      document.querySelectorAll(".key-code").forEach(function (el) {
         el.classList.remove('active3');
      })

      let keyPressed = document.querySelector(`.key-code[data-key-code='${e.keyCode}']`);
      keyPressed.classList.add('active3')

   }
}