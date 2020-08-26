import React, { useCallback } from 'react'
import { Appbar } from 'react-native-paper'

const getTitle = (scene) => {
  const { options } = scene.descriptor
  if (options.headerTitle) return options.headerTitle
  if (options.title) return options.title
  if (scene.route.params.screenName) return scene.route.params.screenName
  return scene.route.name
}

const readerHeaderIcon = (options, previous, onOpenDrawer, onGoBack) => {
  if (options.isShowMenu) return <Appbar.Action icon='menu' onPress={onOpenDrawer} />
  if (options.isShowClose) return <Appbar.Action icon='close' onPress={onGoBack} />
  if (previous) return <Appbar.BackAction onPress={onGoBack} />
  return <Appbar.Action icon='menu' onPress={onOpenDrawer} />
}

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor
  const title = getTitle(scene)

  const handleOpenDrawer = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])
  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])
  return (
    <Appbar.Header>
      {readerHeaderIcon(options, previous, handleOpenDrawer, handleGoBack)}
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

export default Header
