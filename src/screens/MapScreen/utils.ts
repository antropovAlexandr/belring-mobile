export const convertCoordinateArrayToObj = (coordinates) => {
  const MIN_COORDINATE = 2
  if (!coordinates || coordinates.length < MIN_COORDINATE) return null
  return {
    longitude: coordinates[0],
    latitude: coordinates[1],
  }
}

export const convertCoordinateObjToArray = (coordinates) => {
  if (!coordinates || !coordinates.longitude || !coordinates.latitude) return null
  return [coordinates.longitude, coordinates.latitude]
}
