import { StackNavigationProp } from '@react-navigation/stack'

export interface Props {
  navigation: StackNavigationProp<any>
  route: {
    params: {
      locationName?: string
      latitude?: string
      longitude?: string
      placeId?: string
    }
  }
}
