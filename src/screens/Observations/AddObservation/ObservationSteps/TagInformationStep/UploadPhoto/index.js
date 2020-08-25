import React, { useCallback, useState } from 'react'
import { View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImagePreview from './ImagePreview'
import ImageUploader from './ImageUploader'
import DeleteModal from './DeleteModal'
import styles from './styles'

const options = {
  quality: 1.0,
  maxWidth: 500,
  maxHeight: 500,
}

export default ({ fields, index, input, onPressPreview }) => {
  const { onChange, value } = input
  const [isDelete, setIsDelete] = useState(false)
  const onLoadPhoto = useCallback(() => {
    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.customButton && !response.error) {
        const source = { uri: 'data:image/jpeg;base64,' + response.data }
        onChange(source)
        fields.push(undefined)
      }
    })
  }, [fields])

  const onShowDeleteModal = useCallback(() => {
    setIsDelete(true)
  }, [])
  const onDeletePhoto = useCallback(() => {
    setIsDelete(false)
    onChange(null)
    fields.remove(index)
  }, [fields, index])
  const onHideDeleteModal = useCallback(() => {
    setIsDelete(false)
  }, [])

  return (
    <>
      <View style={styles.container}>
        {value ? (
          <ImagePreview source={value} onPress={onPressPreview} onPressDelete={onShowDeleteModal} />
        ) : (
          <ImageUploader onPress={onLoadPhoto} />
        )}
      </View>
      {isDelete ? <DeleteModal onPressOK={onDeletePhoto} onPressCancel={onHideDeleteModal} /> : null}
    </>
  )
}
