import {put, call, takeLatest} from 'redux-saga/effects';
import {NavigationActions} from '../reducers/navigatorReducer'
import {PlacesActions, PlacesTypes} from '../reducers/placesReducer'
import {EMPTY_ITEMS_SCREEN} from '../../screens/constants'

const getScreenByResponse = places => {
    if(places && places.length) return {};
    return {routeName: EMPTY_ITEMS_SCREEN, params: { title: 'places.titleEmpty', description: 'places.descriptionEmpty'}};
};

function sagasWithClient(client) {

    function* loadPlaces() {
        try {
            const { places } = yield call(client.getPlaces);
            yield put(PlacesActions.loadPlacesSuccess(places));
            const screen = getScreenByResponse(places);
            yield put(NavigationActions.navigate(screen));
        } catch (e) {
            yield put(PlacesActions.setError(e));
        }
    }

    function* watchActions(): Generator<*, *, *> {
        yield takeLatest(PlacesTypes.LOGIN_REQUEST, loadPlaces);
    }

    return {login, logout, watchActions};
}

export default sagasWithClient;
