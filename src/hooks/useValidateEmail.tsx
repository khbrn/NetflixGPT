import { useRef, useState } from "react";
import { validateEmailAddress } from "../utils/validate";
import { ValidationResult, UseValidateInputHookResult } from "../types/validationTypes";

export const useValidateEmail = () : UseValidateInputHookResult => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string|null>(null);

    const validate = (inputEmail: string): boolean => {
        const email: ValidationResult = validateEmailAddress(inputEmail);

        setErrorMessage(email.isValid ? null : email?.errorMessage);
    
        return email.isValid ? true : false;
    }
    
    return { ref, errorMessage, validate }
}
