import { createActions, createReducer } from 'reduxsauce'

const initialState = {
  token: false,
  loading: false,
  error: '',
}

const {Types, Creators} = createActions({
  login: ['payload'],
  logout: [],
})

const login = (state) => {
  return {
    ...state,
    token: true,
  }
}

export const LOGOUT = () => initialState

export const reducer = createReducer(initialState, {
  [Types.LOGIN]: login,
  LOGOUT,
})

export { Types as UserTypes, Creators as UserActions }
