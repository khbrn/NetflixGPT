import { useState } from 'react';
import { useValiatePassword } from '../hooks/useValidatePassword';
import { useValidateEmail } from '../hooks/useValidateEmail';
import { LOGIN_TEXT, SIGN_UP_TEXT, NETFLIX_NEW_USER_TEXT, NETFLIX_CURRENT_USER_TEXT } from '../utils/validate';
import { createUserAccount, loginUser } from '../utils/authentication';

const LoginForm = () => {
    const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
    const [authErrorMsg, setAuthErrorMsg] = useState<string| null>(null);
    const password = useValiatePassword();
    const email = useValidateEmail();
   
    const formType: string = isSignInForm ? LOGIN_TEXT : SIGN_UP_TEXT;

    const validateCredentials = (inputEmail: string, inputPassword: string): boolean => {
        const isEmailValid = email.validate(inputEmail);
        const isPasswordValid = password.validate(inputPassword);

        return isEmailValid && isPasswordValid;
    }

    const submitFormHandler = () => {
        const inputEmail = email.ref?.current?.value;
        const inputPassword = password.ref.current?.value;

        if (!inputEmail?.length || !inputPassword?.length) return false;

        const areCredentialsValid = validateCredentials(inputEmail, inputPassword);
        if (!areCredentialsValid) return;

        if (isSignInForm) {
            //sign in
            loginUser({ email: inputEmail, password: inputPassword, setErrorMessage: setAuthErrorMsg });
        } else {
            //sign up
            createUserAccount({ email: inputEmail, password: inputPassword, setErrorMessage: setAuthErrorMsg });
        }
    }

    const changeFormTypeHandler = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-3/4 p-12 bg-black bg-opacity-70 rounded-lg'>
            <p className='m-3 text-white text-2xl'>{formType}</p>
            {!isSignInForm && <input type='text' placeholder='Full name' className='p-2 m-3 bg-transparent border border-solid rounded text-white focus:border-white' />}
            <input type='text' placeholder='Email address' ref={email.ref} className='p-2 m-3 bg-transparent border border-solid rounded text-white focus:border-white' />
            <p className='text-red-500 pl-3'>{email.errorMessage}</p>
            <input type='password' placeholder='Password' ref={password?.ref} className='p-2 m-3 bg-transparent border border-solid rounded text-white' />
            <p className='text-red-500 pl-3'>{password?.errorMessage}</p>
            <button type='submit' onClick={submitFormHandler} className='p-2 m-3 rounded bg-red-700 text-white'>{formType}</button>
            <p className='text-red-500 pl-3'>{authErrorMsg}</p>
            <p className='text-gray-400 m-3'>{isSignInForm? NETFLIX_NEW_USER_TEXT: NETFLIX_CURRENT_USER_TEXT}</p>
            <p className='text-white ml-3 cursor-pointer' role='button' onClick={ changeFormTypeHandler }>{isSignInForm ? SIGN_UP_TEXT : LOGIN_TEXT}</p>
        </form>
    )
}

export default LoginForm;
