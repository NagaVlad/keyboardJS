export function init(state) {
   let out = ''
   out = draw(state, out)
   let keyboard = document.querySelector('#keyboard');
   keyboard.innerHTML = out
}

function draw({ engS, rusS, rusB, engB, caps, lang }, out) {
   let keys = engB

   if (caps && lang) {
      keys = engB
   }
   if (!caps && lang) {
      keys = engS
   }
   if (!caps && !lang) {
      keys = rusS
   }
   if (caps && !lang) {
      keys = rusB
   }

   for (let i = 0; i < keys.length; i++) {
      switch (i) {
         case 12:
            out += `<div class='key-code active info' data-key-code=8>backspace</div>`
            break;
         case 24:
            out += `<div class='key-code active' data-key-code=13>Enter</div>`
            out += `<div class='key-code active' data-key-code=20>Caps</div>`
            break;
         case 36:
            out += `<div class='key-code active' data-key-code=16>Shift</div>`
            break;
      }
      out += `<div class='key-code active' data-key-code=${keys[i]}> ${String.fromCharCode(keys[i])} </div>`

   }
   out += `<div class='key-code active' data-key-code=18>Eng/Rus</div>`
   out += `<div class='key-code space active' data-key-code=32>SPACE</div>`
   return out
}
