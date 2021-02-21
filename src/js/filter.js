const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const invert = document.querySelector('#invert')
const opacity = document.querySelector('#opacity')
const blur = document.querySelector('#blur')

const imgfilter = document.querySelector('#imgfilter')

grayscale.addEventListener('input', updateFilterValue)
contrast.addEventListener('input', updateFilterValue)
brightness.addEventListener('input', updateFilterValue)
sepia.addEventListener('input', updateFilterValue)
saturate.addEventListener('input', updateFilterValue)
invert.addEventListener('input', updateFilterValue)
opacity.addEventListener('input', updateFilterValue)
blur.addEventListener('input', updateFilterValue)

function updateFilterValue() {
  label.innerHTML = `Grayscale ${grayscale.value}`
  imgfilter.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    invert(${invert.value}%)
    opacity(${opacity.value}%)
    blur(${blur.value}px) 
    `
}

let label = document.getElementById('label')
label.addEventListener('input', labels)

function labels() {
  label.innerHTML = grayscale.value
}

let bgcolor = document.querySelector('body')
let bg = document.querySelector('#bgcolor-btn')

bg.onclick = () => {
  bgcolor.classList.toggle('red')
}

let inputValue = document.querySelector('#input-value')

inputValue.onclick = function () {
  console.log(label)
}
