export function readKey(test) {
   document.onkeypress = function (e) {
      console.log(e);
      test.push(e.keyCode)
      console.log(test);
   }
}
