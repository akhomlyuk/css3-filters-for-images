import screenshot from 'image-screenshot';
// import screenshot from './js/imgscr.js'
const img = document.getElementById('imgfilter');
const loadImage = document.querySelector('#loadImage');

loadImage.onclick = function () {
  screenshot(img).download();
};
