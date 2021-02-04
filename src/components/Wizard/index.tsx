import React, { Children, useState, useMemo, useCallback } from 'react'
import { Form } from 'react-final-form'
import { useFocusEffect } from '@react-navigation/native'

const Wizard = ({ children, onSubmit, formProps, renderFooter }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isShowFooter, setShowFooter] = useState(true)

  useFocusEffect(
    useCallback(
      () => () => {
        setCurrentPage(0)
      },
      []
    )
  )

  const isFirstPage = useMemo(() => currentPage === 0, [currentPage])
  const isLastPage = useMemo(() => currentPage === Children.count(children) - 1, [currentPage, children])
  const activePage = useMemo(() => Children.toArray(children)[currentPage], [currentPage, children])
  const handleNext = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, children.length - 1))
  }, [children])

  const handlePrevious = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
  }, [])

  const validate = useCallback(
    (values) => {
      const { props } = activePage
      return props.validate ? props.validate(values) : {}
    },
    [activePage]
  )

  const handleFormSubmit = useCallback(
    (values, { reset }) => {
      if (isLastPage) return onSubmit(values, { reset })
      return handleNext(values)
    },
    [isLastPage, handleNext, onSubmit]
  )

  return (
    <Form {...formProps} validate={validate} onSubmit={handleFormSubmit}>
      {({ handleSubmit, values = {}, form }) => (
        <>
          {React.cloneElement(activePage, { values, setShowFooter, form })}
          {isShowFooter ? renderFooter(handleSubmit, handlePrevious, isLastPage, isFirstPage) : null}
        </>
      )}
    </Form>
  )
}

export default Wizard
