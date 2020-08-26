export const formatDateToString = (date) => {
  let dd = date.getDate()
  let mm = date.getMonth() + 1
  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm
  return `${dd}/${mm}/${date.getFullYear()}`
}

export const formatCoordinateToString = ({ latitude, longitude }) => {
  if (!latitude || !longitude) return ''
  return `N: ${latitude.toFixed(3)} E: ${longitude.toFixed(3)}`
}

export const formatLabelByValue = (value, valueField, labelField, array) => {
  if (!value) return null
  const currentItem = array.find((item) => item[valueField] === value)
  return currentItem && currentItem[labelField] ? currentItem[labelField] : null
}
