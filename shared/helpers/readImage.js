window.URL = window.URL || window.webkitURL

const useBlob = false && window.URL // `true` to use Blob instead of Data-URL


const readImage = (file, cb) => {
  let reader = new FileReader()

  reader.addEventListener('load', function () {
    const image = new Image()
    const src = useBlob ? window.URL.createObjectURL(file) : reader.result

    image.addEventListener('load', function () {
      cb({
        width: image.width,
        height: image.height,
        ratio: image.width / image.height,
        size: Math.round(file.size/1024),
        src: src
      })
    })

    image.src = src

    if (useBlob) {
      window.URL.revokeObjectURL(file) // Free memory
    }
  })

  reader.readAsDataURL(file)
}


export default readImage
