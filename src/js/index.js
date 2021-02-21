import * as mdb from 'mdb-ui-kit'
import screenshot from 'image-screenshot'

const img = document.getElementById('imgfilter')
const loadImage = document.querySelector('#loadImage')

loadImage.onclick = function () {
  screenshot(img).download()
}

export default {
  mdb,
}
