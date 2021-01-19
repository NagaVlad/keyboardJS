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
   el.selectionStart = el.selectionEnd = start - 1
   el.focus()
}