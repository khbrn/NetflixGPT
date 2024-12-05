import { validateEmailAddress, validatePassword } from "../../utils/validate"

const CORRECT_EMAIL = 'abc@gmail.com';
const INCORRECT_EMAIL = 'ashdbv.ksjdf';
const EMAIL_ERROR_TEXT = 'Email is not valid.';
const CORRECT_PASSWORD = 'Aksh@12024';
const INCORRECT_PASSWORD = 'qwerty1234';
const PASSWORD_ERROR_TEXT = 'Password must contain at least one uppercase letter, one digit, and one special character.';

describe('validateEmailAddress function', () => {
    it('returns proper validation result for correct email', () => {
        const result = validateEmailAddress(CORRECT_EMAIL);

        expect(result.isValid).toBe(true);
        expect(result.errorMessage).toBe(null);
    });

    it('returns proper validation result for incorrect email', () => {
        const result = validateEmailAddress(INCORRECT_EMAIL);

        expect(result.isValid).toBe(false);
        expect(result.errorMessage).toBe(EMAIL_ERROR_TEXT);
    })
});

describe('validatePassword function', () => {
    it('returns proper validation result for correct password', () => {
        const result = validatePassword(CORRECT_PASSWORD);

        expect(result.isValid).toBe(true);
        expect(result.errorMessage).toBe(null);
    });

    it('returns proper validation result for incorrect password', () => {
        const result = validatePassword(INCORRECT_PASSWORD);

        expect(result.isValid).toBe(false);
        expect(result.errorMessage).toBe(PASSWORD_ERROR_TEXT);
    });
})