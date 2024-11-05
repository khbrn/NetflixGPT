import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Browse from '../Browse';

describe('Browse', () => {
  it('renders header with sign out button', () => {
    render(<Browse />)
    
    const button = screen.getByRole('button', {name: /sign out/i});
    expect(button).toBeInTheDocument();
  })
})
