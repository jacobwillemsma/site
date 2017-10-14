const toFormData = (form) => {
  let data = new FormData()

  Object.keys(form).forEach(key => {
    if (form[key] || typeof form[key] === 'number') {
      data.append(key, form[key])
    }
  })

  return data
}


export default toFormData
