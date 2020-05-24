
export const ERROR_SERVER_NO_RESPONSE = 'Server is not respond';
export const ERROR_SERVER_NETWORK_ERROR = 'Network Error';

export const DEFAULT_API_ERROR_CODE = 110;
export const DEFAULT_API_ERROR_MESSAGE = 'Internal server error';

export const setError = (
    code: number = DEFAULT_API_ERROR_CODE,
    message: string = DEFAULT_API_ERROR_MESSAGE,
) => {
    return { code, message, id: new Date().getTime() };
};

const httpErrorAdapter = error => {
    if (error?.response?.data?.error) {
        const responseError = error.response.data.error;
        if (typeof responseError === 'string') return setError(error.response.status, responseError);
        const responseErrors = Object.values(responseError);
        if (responseErrors.length) {
            if (Array.isArray(responseErrors[0])) return setError(error.response.status, responseErrors[0].join(', '));
            return setError(error.response.status, responseErrors[0]);
        }
        return setError(error.response.status, responseError);
    }
    if (error?.response) return setError(error.response.status, error.response.statusText);
    if (error?.message) return setError(error.code, error.message);
    if (error?.request) return setError(111, ERROR_SERVER_NO_RESPONSE);

    return setError(112, ERROR_SERVER_NETWORK_ERROR);
};

export default httpErrorAdapter;
