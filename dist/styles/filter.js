const grayscale = document.querySelector('#grayscale');
const contrast = document.querySelector('#contrast');
const brightness = document.querySelector('#brightness');
const sepia = document.querySelector('#sepia');
const saturate = document.querySelector('#saturate');
const invert = document.querySelector('#invert');
const opacity = document.querySelector('#opacity');
const blur = document.querySelector('#blur');

const imgfilter = document.querySelector('#imgfilter')

grayscale.addEventListener('input', updateFilterValue);
contrast.addEventListener('input', updateFilterValue);
brightness.addEventListener('input', updateFilterValue);
sepia.addEventListener('input', updateFilterValue);
saturate.addEventListener('input', updateFilterValue);
invert.addEventListener('input', updateFilterValue);
opacity.addEventListener('input', updateFilterValue);
blur.addEventListener('input', updateFilterValue);
  

function updateFilterValue() {
    
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
