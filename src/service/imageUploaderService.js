import axios from 'axios'

const imageUploader = {}

imageUploader.type = "imageUploader"

imageUploader.imageUpload = function (file) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_PRESETNAME}`)
    axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
}

Object.freeze(imageUploader)
export default imageUploader