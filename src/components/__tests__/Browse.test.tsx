import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Browse from '../Browse';

describe('Browse', () => {
  it('renders the Browse text', () => {
    render(<Browse />)
    
    const browse = screen.getByText(/browse/i);
    expect(browse).toBeInTheDocument();
  })
})
