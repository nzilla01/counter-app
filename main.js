let countEl = 0
let number = document.getElementById('count_el')

function count() {
  countEl += 1
  number.innerText = countEl
}
let control = document.getElementById('file')

function save() {
  control.textContent += countEl  + ' : '
  return countEl = 0
}
let restart = 0

function reset() {
  number.innerText = restart
}
