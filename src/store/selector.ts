import { createSelector } from 'reselect'

export const getAllReducersLoadingStates = (state) => {
  return Object.keys(state).reduce((acc, item) => {
    return state[item].loading !== undefined ? [...acc, state[item].loading] : [...acc]
  }, [])
}

export const appLoadingSelector = createSelector(
  [getAllReducersLoadingStates],
  (reducersLoadingStates) => {
    return reducersLoadingStates.some((item) => item)
  }
)

export const getAllReducersErrorsStates = (state) => {
  return Object.keys(state).reduce(
    (acc, item) => (state[item].error !== undefined ? [...acc, state[item].error] : [...acc]),
    []
  )
}

export const appErrorSelector = createSelector(
  [getAllReducersErrorsStates],
  (reducersErrorStates) => {
    return reducersErrorStates.find((item) => item)
  }
)
