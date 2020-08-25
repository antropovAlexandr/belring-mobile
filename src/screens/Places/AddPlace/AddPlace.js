import React, {useCallback, useMemo} from 'react'
import {Form} from 'react-final-form'
import AddPlaceView from "./AddPalceView";
import {locationValidation} from "./validation";
import {useDispatch, useSelector} from "react-redux";
import { FIELD_NAME } from './constants';
import {getPlacesForUpdate} from "./utils";
import {placesSelector} from "../selector";
import {updateUserPlacesRequest} from "../reducer";

const { LOCATION_NAME, LOCATION_COORDINATE } = FIELD_NAME;
const AddPlace = ({ navigation, route }) => {
    const { params = {} } = route;
    const { locationName, latitude, longitude, placeId} = params;

    const initialValues = useMemo(() => ({
        [LOCATION_NAME]: (locationName) ? locationName : null,
        [LOCATION_COORDINATE]: (latitude && longitude) ? { latitude, longitude } : null
    }), [locationName, latitude, longitude]);

    const dispatch = useDispatch();
    const userPlaces = useSelector(placesSelector);
    const onSubmit = useCallback(values => {
        const places = getPlacesForUpdate(values, userPlaces, placeId);
        dispatch(updateUserPlacesRequest({ places }));
    }, []);

    return (
        <Form
            onSubmit={onSubmit}
            validate={locationValidation}
            mutators={{
                setFormValue: ([fieldName, value], state, {changeValue}) => {
                    changeValue(state, fieldName, () => value)
                },
            }}
            initialValues={initialValues}
            render={({handleSubmit, form, values = {}}) => (
                <AddPlaceView onPressNewLocation={handleSubmit} form={form} navigation={navigation} values={values} isSave={placeId !== undefined} />)}
        />
    );
};

export default AddPlace
