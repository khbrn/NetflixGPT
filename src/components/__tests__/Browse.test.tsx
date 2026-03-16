import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Browse from '../Browse';
import Login from '../Login';

describe('Browse', () => {
    it('renders the Browser component at /browse path', () => {
    render(
      <MemoryRouter initialEntries={['/browse']}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/browse' element={<Browse />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
    });
  
  it('renders header with sign out button', () => {
    render(<Browse />)
    
    const button = screen.getByRole('button', {name: /sign out/i});
    expect(button).toBeInTheDocument();
  })
})
