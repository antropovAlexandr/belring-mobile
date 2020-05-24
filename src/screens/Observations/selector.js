
export const observationLoadingSelector = state => state.observation.loading;

export const observationsSelector = state => state.observation.items;

export const observationsInitialDataSelector = state => state.observation.initialData || {};
