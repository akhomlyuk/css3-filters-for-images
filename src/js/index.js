import * as mdb from 'mdb-ui-kit'
import screenshot from 'image-screenshot'

const img = document.getElementById('imgfilter')
const loadImage = document.getElementById('loadImage')
// let base64 = document.getElementById('base64')

loadImage.onclick = function () {
  screenshot(img).download()
}

screenshot(img).then((url) => {
  console.log(url)
})
export default {
  mdb,
}
