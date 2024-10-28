import { useRef, useState } from "react";
import { validateEmailAddress } from "../utils/validate";
import { ValidationResult, UseValidateInputHookResult } from "../components/types/validationTypes";

export const useValidateEmail = () : UseValidateInputHookResult => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const validate = (inputEmail: string): void => {
        const email: ValidationResult = validateEmailAddress(inputEmail);
    
        if (email.isValid) {
            setErrorMessage('');
            return;
        }
    
        if(email.errorMessage) setErrorMessage(email.errorMessage);
    }
    
    return { ref, errorMessage, validate }
}
