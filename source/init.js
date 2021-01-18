export function init(obj) {

   let out = ''
   out = draw(obj, out)
   let keyboard = document.querySelector('#keyboard');
   keyboard.innerHTML = out
}

const obj = {
   caps: false,
   shift: false,
   lang: false,
   key: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47], //Англ маленькие
   key2: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 92, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],//Русские маленькие
   key3: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069, 92, 1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46], //**Русская CAPS
   key4: [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47]//**Англ CAPS
}

export { obj };

function draw(obj, out) {
   let key = obj.key4

   if (obj.caps && obj.lang) {
      key = obj.key4
   }
   if (obj.caps == false && obj.lang) {
      key = obj.key
   }
   if (!obj.caps && !obj.lang) {
      key = obj.key2
   }
   if (obj.caps && !obj.lang) {
      key = obj.key3
   }

   // let key = obj.lang ? obj.key2 : obj.key

   for (let i = 0; i < key.length; i++) {
      if (i == 12) {
         out += `<div class='key-code active info' data-key-code=8>backspace</div>`
      }
      if (i == 24) {
         out += `<div class='key-code active' data-key-code=13>Enter</div>`
      }
      if (i == 24) {
         out += `<div class='key-code active' data-key-code=20>Caps</div>`
      }
      if (i == 36) {
         out += `<div class='key-code active' data-key-code=16>Shift</div>`
      }
      // out += `<div class='key-code' data-key-code=${key[i]}> ${String.fromCharCode(key[i]).toLocaleUpperCase()} </div>`
      out += `<div class='key-code active' data-key-code=${key[i]}> ${String.fromCharCode(key[i])} </div>`
   }
   out += `<div class='key-code active' data-key-code=18>Eng/Rus</div>`
   out += `<div class='key-code space active' data-key-code=32>SPACE</div>`
   return out
}