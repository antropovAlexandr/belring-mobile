import React, {useState, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form} from 'react-final-form'
import {useTranslation} from "react-i18next";
import ErrorModal from "../../components/ErrorModal";
import {availableSteps} from "./constants";
import AddObservationSteps from "./AddObservationSteps";

const AddObservation = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const [step, setStep] = useState(availableSteps.first);

    const validation = useCallback((values) => {
        const errors = {};
        return errors
    }, []);

    const onSubmit = useCallback(values => {}, []);

    return (
        <>
            <Form
                onSubmit={onSubmit}
                validate={validation}
                render={() => (
                    <AddObservationSteps />
                )}
            />
        </>
    );
};

export default AddObservation
