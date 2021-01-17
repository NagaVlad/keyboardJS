// import Post from './Post'
import './styles/styles.css'
import './styles/scss.scss'

// let isShit = true;
let caps = false;
let capsStatus = {
   on: "ON",
   off: "OFF"
};
let shift = false;
let leng = false;
const key = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
const key2 = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
const key3 = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 92, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46];
const key4 = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47];


const obj = {
   caps: false,
   leng: false,
   key: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
   key2: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32, 13]
}

//TETXTAREA
let textarea = document.querySelector('#textResult')

//BUTTON CLEAR
let btnClear = document.querySelector('#btn')
btnClear.addEventListener('click', () => {
   textarea.value = ''
})

//BUTTON SHOW/HIDE
let btnSH = document.querySelector('#btnSH')
btnSH.addEventListener('click', () => {
   keyboard.classList.toggle('hide')
})


function init() {
   let out = ''

   if (leng) {
      for (let i = 0; i < key.length; i++) {

         if (i == 12) {
            out += `<div class='key-code info' data-key-code=8><</div>`

         }
         if (i == 24) {
            out += `<div class='key-code info' data-key-code=13>Enter</div>`
         }
         if (i == 24) {
            out += `<div class='key-code info' data-key-code=20>Caps</div>`
         }
         if (i == 36) {
            out += `<div class='key-code info' data-key-code=16>Shift</div>`
         }

         // out += `<div class='key-code' data-key-code=${key[i]}> ${caps ? String.fromCharCode(key2[i]) : String.fromCharCode(key[i])} </div>`
         out += `<div class='key-code' data-key-code=${key[i]}> ${String.fromCharCode(key[i]).toLocaleUpperCase()} </div>`
      }
      // out += `<div class='key-code' data-key-code=16>Shift</div>`
      // out += `<div class='key-code' data-key-code=13>Enter</div>`
      // out += `<div class='key-code' data-key-code=8><</div>`
      // out += `<div class='key-code' data-key-code=20>Caps Lock</div>`
      out += `<div class='key-code info' data-key-code=18>Eng</div>`
      out += `<div class='key-code space info' data-key-code=32>SPACE</div>`

   } else {
      for (let i = 0; i < key2.length; i++) {
         if (i == 12) {
            out += `<div class='key-code info' data-key-code=8><</div>`

         }
         if (i == 24) {
            out += `<div class='key-code info' data-key-code=13>Enter</div>`
         }
         if (i == 24) {
            out += `<div class='key-code info' data-key-code=20>Caps</div>`
         }
         if (i == 36) {
            out += `<div class='key-code info' data-key-code=16>Shift</div>`
         }

         // out += `<div class='key-code' data-key-code=${key[i]}> ${caps ? String.fromCharCode(key2[i]) : String.fromCharCode(key4[i])} </div>`
         out += `<div class='key-code ' data-key-code=${key2[i]}> ${String.fromCharCode(key2[i]).toLocaleUpperCase()} </div>`
      }

      // out += `<div class='key-code' data-key-code=16>Shift</div>`
      // out += `<div class='key-code' data-key-code=13>Enter</div>`
      // out += `<div class='key-code' data-key-code=8><</div>`

      // out += `<div class='key-code' data-key-code=20>Caps Lock</div>`
      out += `<div class='key-code info' data-key-code=18>Rus</div>`
      out += `<div class='key-code space info' data-key-code=32>Space</div>`

   }


   let keyboard = document.querySelector('#keyboard');
   keyboard.innerHTML = out
}

init();

document.onkeydown = function (e) {
   if (e.shiftKey && e.code === 'AltLeft') {
      leng = !leng
      init();
      xxx()
      console.log(leng);

   }
   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ВЕРНУТЬ
   // if (e.keyCode == 20) {
   //    caps = !caps
   //    init()
   //    xxx()
   //    console.log(caps);
   // }


   ///////
   // if (e.keyCode == 16) {
   //    e.classList.toggle('active2')
   //    console.log(e);
   //    caps = !caps
   //    shift = !shift
   //    init()
   //    xxx()
   //    console.log(shift);
   // }
   //////
}

// PRESS
document.onkeypress = function (e) {
   document.querySelectorAll(".key-code").forEach(function (el) {
      el.classList.remove('active');
   })
   let keyPressed = document.querySelector(`.key-code[data-key-code='${e.keyCode}']`);

   keyPressed.classList.add('active')
   console.log(keyPressed);//!!!!!
}

//CLICK
function xxx() {
   const keyCode = document.querySelectorAll(".key-code");

   keyCode.forEach(function (el) {
      el.addEventListener('click', (e) => {
         keyCode.forEach(function (el) {
            el.classList.remove('active')
         })
         e.target.classList.add('active');

         console.log(e.target);//!!!!!

         if (el.getAttribute('data-key-code') == 32) {
            textarea.value += e.target.textContent = ' '
            e.target.textContent = "SPACE"
         }
         else if (el.getAttribute('data-key-code') == 20) {
            el.classList.toggle('active2')

            caps = !caps
            // init();
            // xxx()

         }
         else if (el.getAttribute('data-key-code') == 16) {
            el.classList.toggle('active2')
            caps = !caps
            shift = !shift
            console.log(shift);
         }
         else if (el.getAttribute('data-key-code') == 13) {
            textarea.value += '\n'
         }
         else if (el.getAttribute('data-key-code') == 8) {
            textarea.value = textarea.value.slice(0, textarea.value.length - 1);
         }
         else if (el.getAttribute('data-key-code') == 18) {

            leng = !leng
            init();
            xxx()
         }
         else {
            caps ? textarea.value += e.target.textContent.trim()
               : textarea.value += e.target.textContent.trim().toLocaleLowerCase()
         }

      });
   });
}


xxx()


// function triggerEvent(el, type, keyCode) {
//    if ('createEvent' in document) {
//       // modern browsers, IE9+          
//       var e = document.createEvent('HTMLEvents');
//       e.keyCode = keyCode; console.log(e);
//       e.initEvent(type, false, true);
//       el.dispatchEvent(e);
//    } else {
//       // IE 8    
//       var e = document.createEventObject(); e.keyCode = keyCode; e.eventType = type; el.fireEvent('on' + e.eventType, e);
//    }
// } var nextButton = document.querySelector('.search_input'); 
// triggerEvent(nextButton, 'keydown', 13);

// document.onkeypress = function (e) {
//    // console.log(e);
//    key4.push(e.keyCode)
//    console.log(key4);
// }


//code: "KeyF"
//keyCode: 102



//Сделать капс(НАЖИМАЮ КНОПКУ И ОН ГОРИТТ ВСЕ КЛАВИШИ БОЛЬШИЕ)
//Сделать раскладку(ПОМЕНЯТЬ МАССИВ)


//!!
// SPACE-
// caps-
// SHIFT-
// BACKSPACE-
//ENTER-
//смены языка


//****/ у человека вкл капс то не будут мигать на клаве
//****/ горел какой язык
//****/ капсовые буквы добавить
//****/ в текст ареа ток в нонец

