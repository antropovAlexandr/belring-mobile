
export const ERROR_SERVER_NO_RESPONSE = 'Server is not respond';
export const ERROR_SERVER_NETWORK_ERROR = 'Network Error';

export const DEFAULT_API_ERROR_CODE = 110;
export const DEFAULT_API_ERROR_MESSAGE = 'Internal server error';

export const setError = (
    code: number = DEFAULT_API_ERROR_CODE,
    message: string = DEFAULT_API_ERROR_MESSAGE,
) => {
    return { code, message };
};

export const checkErrorInResponse = ({status, ok, originalError, data}) => {
    if (!ok && originalError) throw setError(status, originalError.response.data.error);
    return data;
};

const httpErrorAdapter = error => {
    if (error && error.data && error.data.error) {
        return setError(error.data.status, error.data.error.join(', '));
    }
    if (error && error.request) return setError(111, ERROR_SERVER_NO_RESPONSE);
    if (error && error.code && error.message) return { ...error };

    return setError(112, ERROR_SERVER_NETWORK_ERROR);
};

export default httpErrorAdapter;
