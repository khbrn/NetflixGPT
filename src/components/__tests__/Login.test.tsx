import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import * as authModule from '../../utils/authentication';
import Login from '../Login';
import Browse from '../Browse';

describe('Login', () => {
  it('renders the Login component at root path', () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            </Routes>
        </MemoryRouter>
        );
    
        expect(screen.getByTestId('app-logo')).toBeInTheDocument();
    });

  it('renders the app logo', () => {
    render(<Login />)
    
    const logo = screen.getByTestId('app-logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the background image', () => {
    render(<Login />);

    const backgroundImage = screen.getByTestId('bg-image');
    expect(backgroundImage).toBeInTheDocument();
  })

  it('sends the login and password to authenticate the user', () => {
    const loginUserSpy = vi.spyOn(authModule, 'loginUser');
   
    render(<Login />)

    const loginBox = screen.getByPlaceholderText(/email address/i);
    const passwordBox = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', { name: /sign in/i });

    fireEvent.input(loginBox, { target: { value: 'test@gmail.com' } });
    fireEvent.input(passwordBox, { target: { value: 'Aksh@12024' } });
    fireEvent.click(submitButton);

    expect(loginUserSpy).toHaveBeenCalledWith({ email: 'test@gmail.com', password: 'Aksh@12024', setErrorMessage: expect.any(Function) });
  });

  it('sends the login and password to create user account', () => {
    const createUserAccount = vi.spyOn(authModule, 'createUserAccount');
   
    render(<Login />)
     
    const signUpButton = screen.getByRole('button', {name: /sign up/i});
     fireEvent.click(signUpButton);

    const loginBox = screen.getByPlaceholderText(/email address/i);
    const passwordBox = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole('button', {name: /sign up/i});

    fireEvent.input(loginBox, { target: { value: 'test@gmail.com' } });
    fireEvent.input(passwordBox, { target: { value: 'Aksh@12024' } });
    fireEvent.click(submitButton);
    
    expect(createUserAccount).toHaveBeenCalledWith({email: 'test@gmail.com', password: 'Aksh@12024', setErrorMessage: expect.any(Function) });
  })
})
