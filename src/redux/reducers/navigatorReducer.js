import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  navigate: ['payload'],
  reset: ['payload'],
  goBack: ['count'],
});

export {Types as NavigationTypes, Creators as NavigationActions}

