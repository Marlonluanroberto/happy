import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {

    if (error instanceof ValidationError) {
        
        let errors: ValidationErros = {};
        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });
        return response.status(400).json({message: 'Validation Fails', errors});
    }
    return response.status(500).json({ message: 'Internal Server error' });
};


export default errorHandler;