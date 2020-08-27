import { StackNavigationProp } from '@react-navigation/stack'
import React, { memo, useMemo, useState } from 'react'
import { FAB } from 'react-native-paper'
import { useTranslation } from 'react-i18next'

import { ADD_OBSERVATION, ADD_PLACE } from '../../screens/constants'

const getActionsByNavigation = (navigation: StackNavigationProp<any>, translate: (key: string) => string) => [
  {
    icon: 'map-marker',
    label: translate('places.addNewPlace'),
    onPress: () => navigation.navigate(ADD_PLACE),
  },
  {
    icon: 'binoculars',
    label: translate('addEditObservation.navHeaderTitleAdd'),
    onPress: () => navigation.navigate(ADD_OBSERVATION),
  },
]

export default memo(({ navigation }: Props) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const actions = useMemo(() => getActionsByNavigation(navigation, t), [navigation, t])
  const icon = useMemo(() => (isOpen ? 'pencil-outline' : 'plus'), [isOpen])

  return <FAB.Group visible open={isOpen} icon={icon} actions={actions} onStateChange={({ open }) => setIsOpen(open)} />
})

interface Props {
  navigation: StackNavigationProp<any>
}
