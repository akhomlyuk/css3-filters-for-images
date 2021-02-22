const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const invert = document.querySelector('#invert')
const opacity = document.querySelector('#opacity')
const blur = document.querySelector('#blur')
const imgfilter = document.querySelector('#imgfilter')
const reset = document.querySelector('#reset')

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
  reset.disabled = false
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

window.addEventListener('load', () => {
  document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {
      let img = document.querySelector('#imgfilter')
      img.onload = () => {
        URL.revokeObjectURL(img.src)
      }
      img.src = URL.createObjectURL(this.files[0])
    }
  })
})

const defaultValue = {
  grayscale: 0,
  contrast: 100,
  brightness: 100,
  sepia: 0,
  saturate: 100,
  invert: 0,
  opacity: 100,
  blur: 0,
}

reset.addEventListener('click', resetValues)

function resetValues() {
  grayscale.value = defaultValue.grayscale
  contrast.value = defaultValue.contrast
  sepia.value = defaultValue.sepia
  brightness.value = defaultValue.brightness
  saturate.value = defaultValue.saturate
  invert.value = defaultValue.invert
  opacity.value = defaultValue.opacity
  blur.value = defaultValue.blur

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
  label.innerHTML = `Grayscale ${grayscale.value}`

  reset.disabled = true
}
