export const errorHandler = (statusCode, message) => {
    const error = new Error(); // a javascript error constructor
    error.statusCode = statusCode;
    error.message = message;
    return error;
};