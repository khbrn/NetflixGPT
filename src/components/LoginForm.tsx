import { useState } from 'react';

const LoginForm = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const formType: string = isSignInForm ? 'Zaloguj się' : 'Zarejestuj się';

    const changeFormTypeHandler = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <form className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-3/4 p-12 bg-black bg-opacity-70 rounded-lg'>
            <p className='m-3 text-white text-2xl'>{formType}</p>
            {!isSignInForm && <input type='text' placeholder='Full name' className='p-2 m-3 bg-transparent border border-solid rounded text-white focus:border-white' />}
            <input type='text' placeholder='Email address'  className='p-2 m-3 bg-transparent border border-solid rounded text-white focus:border-white' /> 
            <input type='password' placeholder='Password'  className='p-2 m-3 bg-transparent border border-solid rounded text-white' />
            <button type='submit' className='p-2 m-3 bg-transparent rounded bg-red-700 text-white'>{formType}</button>
            <p className='text-gray-400 m-3'>{isSignInForm? 'Nie masz jeszcze konta w serwisie Netflix?': 'Masz juz konto Netflix?'}</p>
            <p className='text-white ml-3 cursor-pointer' onClick={changeFormTypeHandler}>{isSignInForm ? 'Zarejestuj się' : 'Zaloguj się'}</p>
        </form>
    )
}

export default LoginForm;