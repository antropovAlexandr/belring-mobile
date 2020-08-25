export const getUserPlacesResponseAdapter = (places) => {
  if (!places) return null
  return places.map((place, index) => ({
    ...place,
    id: index,
  }))
}

export const getUserResponseAdapter = (user) => ({
  ...user,
  places: getUserPlacesResponseAdapter(user.places),
})
