export interface Observation {
  ring: string
  ringMentioned: string
  speciesMentioned: string
  sexMentioned: string
  ageMentioned: string
  latitude: string
  longitude: string
  photos: string[] | null
  distance: number
  direction: number
  remarks: null
  date: string | null
  accuracyOfDate: string
  placeCode: null
}

export interface Place {
  customName: string
  geoName: string | null
  latitude: number
  longitude: number
}

export type UserPlace = Place & { id: string }
