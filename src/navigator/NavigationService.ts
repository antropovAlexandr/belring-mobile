// TODO: convert to hook
let navigationRef = null

function setRef(navigatorRef) {
  navigationRef = navigatorRef
}

function navigate(name, params) {
  navigationRef?.current?.navigate(name, params)
}

export default { setRef, navigate }
