import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Login from '../Login';

describe('Login', () => {
  it('renders the Login text', () => {
    render(<Login />)
    
    const login = screen.getByText(/login/i);
    expect(login).toBeInTheDocument();
  })
})