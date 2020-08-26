import { createSelector } from 'reselect'

export const getAllReducersLoadingStates = (state) =>
  Object.keys(state).reduce(
    (acc, item) => (state[item].loading !== undefined ? [...acc, state[item].loading] : [...acc]),
    []
  )

export const appLoadingSelector = createSelector([getAllReducersLoadingStates], (reducersLoadingStates) =>
  reducersLoadingStates.some((item) => item)
)

export const getAllReducersErrorsStates = (state) =>
  Object.keys(state).reduce(
    (acc, item) => (state[item].error !== undefined ? [...acc, state[item].error] : [...acc]),
    []
  )

export const appErrorSelector = createSelector([getAllReducersErrorsStates], (reducersErrorStates) =>
  reducersErrorStates.find((item) => item)
)
