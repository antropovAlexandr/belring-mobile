import {FIELD_NAME} from "./constants";

const { LOCATION_COORDINATE, LOCATION_NAME } = FIELD_NAME;

export const locationValidation = (values) => {
    const errors = {};
    if (!values[LOCATION_COORDINATE]) errors[LOCATION_COORDINATE] = 'places.locationValidation';
    if (!values[LOCATION_NAME]) errors[LOCATION_NAME] = 'places.nameValidation';
    return errors
};
