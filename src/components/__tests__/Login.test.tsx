import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Login from '../Login';

describe('Login', () => {
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
})
