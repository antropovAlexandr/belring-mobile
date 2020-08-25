export const userLoadingSelector = state => state.user.loading;

export const userDataSelector = state => state.user.data || {};

export const userTokenSelector = state => state.user.token;
export const userRefreshTokenSelector = state => state.user.refreshToken;
export const userIsFirstEntrySelector = state => state.user.isFirstEntry;

export const userFirstNameSelector = state => state.user.firstName;
export const userLastNameSelector = state => state.user.lastName;
export const userRoleSelector = state => state.user.role;
export const userIdSelector = state => state.user.id;
