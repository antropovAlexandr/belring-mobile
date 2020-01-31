import React from 'react'
import { useSelector } from 'react-redux'
import { appLoadingSelector } from 'selectors/common'

import Spinner from 'Components/spinner/spinner'
import { colors } from 'Consts/themes'

const CustomSpinner = (props) => {
  const isLoading = useSelector(appLoadingSelector)
  const {color = colors.primary} = props

  return (
    <Spinner
      isVisible={isLoading}
      color={color}
    />
  )
}

export default CustomSpinner
