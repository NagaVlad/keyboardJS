export function clicked(obj, textarea, init) {
   const keyCode = document.querySelectorAll(".key-code");

   keyCode.forEach(function (el) {
      el.addEventListener('click', (e) => {
         keyCode.forEach(function (el) {
            el.classList.remove('active')
         })
         e.target.classList.add('active');

         if (el.getAttribute('data-key-code') == 32) {
            textarea.value += e.target.textContent = ' '
            e.target.textContent = "SPACE"
         }
         else if (el.getAttribute('data-key-code') == 20) {
            el.classList.toggle('active2')
            obj.caps = !obj.caps
         }
         else if (el.getAttribute('data-key-code') == 16) {
            el.classList.toggle('active2')
            obj.caps = !obj.caps
            obj.shift = !obj.shift
            console.log(obj.shift);
         }
         else if (el.getAttribute('data-key-code') == 13) {
            textarea.value += '\n'
         }
         else if (el.getAttribute('data-key-code') == 8) {
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
         }
         else if (el.getAttribute('data-key-code') == 18) {
            obj.lang = !obj.lang
            init(obj);
            clicked(obj, textarea, init)
         }
         else {
            obj.caps ? textarea.value += e.target.textContent.trim()
               : textarea.value += e.target.textContent.trim().toLocaleLowerCase()
         }
      });
   });
}