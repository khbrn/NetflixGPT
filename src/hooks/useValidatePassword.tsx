import { useState, useRef } from "react";
import { validatePassword } from "../utils/validate";
import { ValidationResult, UseValidateInputHookResult } from "../types/validationTypes";

export const useValiatePassword = () : UseValidateInputHookResult => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (inputPassword: string): void => {
        const password: ValidationResult = validatePassword(inputPassword);

        if (password.isValid) {
            setErrorMessage('');
            return;
        }
            
        if (password.errorMessage) setErrorMessage(password.errorMessage);
    }
    
    return { ref, errorMessage, validate };
}
