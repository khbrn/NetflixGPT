import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

const INVALID_CREDENTIALS_REGEX = /auth\/invalid-credential/;
const INVALID_CREDENTIALS_ERROR_MSG = 'Invalid credentials. Please try again.';

const ALREADY_REGISTERED_USER_REGEX = /auth\/email-already-in-use/;
const ALREADY_REGISTERED_USER_ERROR_MSG= 'The user is already registered.'

type CreateUserAccountParams = {
    email: string;
    password: string;
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const createUserAccount = ({ email, password, setErrorMessage }: CreateUserAccountParams) => {
    setErrorMessage(null);

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log({ user })
    }).catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(ALREADY_REGISTERED_USER_REGEX.test(errorMessage)? ALREADY_REGISTERED_USER_ERROR_MSG : errorMessage);
    });
}

export const loginUser = ({ email, password, setErrorMessage }: CreateUserAccountParams) => {
    setErrorMessage(null);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log({user})
    })
        .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(INVALID_CREDENTIALS_REGEX.test(errorMessage) ? INVALID_CREDENTIALS_ERROR_MSG : errorMessage);
    });
}
