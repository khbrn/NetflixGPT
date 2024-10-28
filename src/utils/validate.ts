import { ValidationResult } from "../types/validationTypes";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;

const EMAIL_ERROR_TEXT = 'Email is not valid.';
const PASSWORD_ERROR_TEXT = 'Password must contain at least one uppercase letter, one digit, and one special character.';


export const validateEmailAddress = (email: string): ValidationResult => {
    const isEmailValid = EMAIL_REGEX.test(email)
    const errorMessage = isEmailValid ? null: EMAIL_ERROR_TEXT;

    return {
        isValid: isEmailValid,
        errorMessage,
    }
};

export const validatePassword = (password: string): ValidationResult => {
    const isPasswordValid = PASSWORD_REGEX.test(password);
    const errorMessage = isPasswordValid ? null : PASSWORD_ERROR_TEXT;
    
    return {
        isValid: isPasswordValid,
        errorMessage,
    }
}
