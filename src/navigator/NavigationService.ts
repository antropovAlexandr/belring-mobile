// TODO: convert to hook
let navigationRef = null

export function setRef(navigatorRef) {
  navigationRef = navigatorRef
}

export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params)
}
