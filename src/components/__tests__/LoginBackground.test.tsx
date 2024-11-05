import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import LoginBackground from '../LoginBackground';

describe('LoginBackground', () => { 
    it('displays background photo', () => {
        render(<LoginBackground />);

        expect(screen.getByRole('img')).toBeInTheDocument();
    })
 })