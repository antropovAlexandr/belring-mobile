let navigationRef = null;

function setRef(navigatorRef) {
  navigationRef = navigatorRef;
}

function navigate(name, params) {
  // eslint-disable-next-line no-unused-expressions
  navigationRef?.current?.navigate(name, params);
}

export default { setRef, navigate };
