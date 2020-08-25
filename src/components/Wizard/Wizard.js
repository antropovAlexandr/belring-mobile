import React, { Children, useState, useMemo, useCallback } from 'react';
import { Form } from 'react-final-form';
import { useFocusEffect } from '@react-navigation/native';


const Wizard = ({ children, onSubmit, formProps, renderFooter }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isShowFooter, setShowFooter] = useState(true);

    useFocusEffect(
        useCallback(() => {
            return () => { setCurrentPage(0) };
        }, [])
    );

    const isFirstPage = useMemo(() => currentPage === 0, [currentPage]);
    const isLastPage = useMemo(() => currentPage === Children.count(children) - 1, [currentPage, children]);
    const activePage = useMemo(() => Children.toArray(children)[currentPage], [currentPage, children]);
    const handleNext = useCallback(() => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, children.length - 1))
    }, [children]);

    const handlePrevious = useCallback(() => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 0))
    }, [children]);

    const validate = useCallback((values) => {
        const { props } = activePage;
        return props.validate ? props.validate(values) : {};
    }, [activePage])

    const handleSubmit = useCallback((values, { reset }) => {
        if (isLastPage) return onSubmit(values, { reset });
        return handleNext(values);
    }, [isLastPage, handleNext, onSubmit])

    return (
        <Form
            {...formProps}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit, submitting, values = {}, form }) => (
                <>
                    {React.cloneElement(activePage, { values, setShowFooter, form })}
                    {isShowFooter && renderFooter(handleSubmit, handlePrevious, isLastPage, isFirstPage)}
                </>
            )}
        </Form>
    );
};

export default Wizard;
