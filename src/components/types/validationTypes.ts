export interface ValidationResult {
    isValid: boolean;
    errorMessage: string | null;
}

export interface UseValidateInputHookResult {
    ref: React.RefObject<HTMLInputElement>;
    errorMessage: string;
    validate: (inputEmail: string) => void;
}
