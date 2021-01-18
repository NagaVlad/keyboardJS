export function clicked(obj, textarea, init) {
   const keyCode = document.querySelectorAll(".key-code");

   keyCode.forEach(function (el) {


      el.addEventListener('click', (e) => {
         // console.log(e);
         keyCode.forEach(function (el) {
            // obj.caps = false
         })
         // e.target.classList.add('active');

         if (el.getAttribute('data-key-code') == 32) {
            // textarea.value += e.target.textContent = ' '
            typeInTextarea(e.target.textContent = ' ', textarea)
            e.target.textContent = "SPACE"
         }
         else if (el.getAttribute('data-key-code') == 20) {
            el.classList.toggle('active2')
            obj.caps = !obj.caps
            init(obj);
            clicked(obj, textarea, init)
         }
         else if (el.getAttribute('data-key-code') == 16) {
            el.classList.toggle('active2')
            obj.caps = !obj.caps
            // obj.shift = !obj.shift
            // console.log(obj.shift);
         }
         else if (el.getAttribute('data-key-code') == 13) {
            // textarea.value += '\n'
            typeInTextarea('\n', textarea)

         }
         else if (el.getAttribute('data-key-code') == 8) {
            // textarea.value = textarea.value.slice(0, textarea.value.length - 1);
            typeInTextarea2(e.target.textContent.substr(0, e.target.textContent.length - 1), textarea)

            // console.log(e.target.textContent.slice(0, e.target.textContent.length - 1));
         }
         else if (el.getAttribute('data-key-code') == 18) {
            obj.lang = !obj.lang
            init(obj);
            clicked(obj, textarea, init)
         }
         else {
            obj.caps ? typeInTextarea(e.target.textContent.trim().toLocaleUpperCase(), textarea)
               : typeInTextarea(e.target.textContent.trim().toLocaleLowerCase(), textarea);

            let shift = document.querySelector(`.key-code[data-key-code='16']`)
            if (shift.classList.contains('active2')) {
               obj.caps = !obj.caps
               shift.classList.remove('active2')
            }

            // obj.caps ? textarea.value += e.target.textContent.trim().toLocaleUpperCase()
            //    : textarea.value += e.target.textContent.trim().toLocaleLowerCase()
         }
      });
   });
}


export function typeInTextarea(newText, el = document.activeElement) {
   const start = el.selectionStart
   const end = el.selectionEnd
   const text = el.value
   const before = text.substring(0, start)
   const after = text.substring(end, text.length)
   el.value = (before + newText + after)
   el.selectionStart = el.selectionEnd = start + newText.length
   el.focus()
}
export function typeInTextarea2(newText, el = document.activeElement) {
   const start = el.selectionStart
   const end = el.selectionEnd
   const text = el.value
   const before = text.substring(0, start - 1)
   const after = text.substring(end, text.length)
   el.value = (before + after)
   el.selectionStart = el.selectionEnd = start + newText.length
   el.focus()
}