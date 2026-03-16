import { useState, useRef } from "react";
import { validatePassword } from "../utils/validate";
import { ValidationResult, UseValidateInputHookResult } from "../types/validationTypes";

export const useValiatePassword = () : UseValidateInputHookResult => {
    const ref = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const validate = (inputPassword: string): boolean => {
        const password: ValidationResult = validatePassword(inputPassword);

        setErrorMessage(password.isValid ? null : password?.errorMessage);

        return password.isValid ? true : false;
    }
    
    return { ref, errorMessage, validate };
}
