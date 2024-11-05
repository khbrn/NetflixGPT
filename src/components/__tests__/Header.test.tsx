import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import '@testing-library/jest-dom';

import { Header, BrowseHeader } from '../Header';
import * as logoutUserModule from '../../utils/authentication';

describe('Header', () => {
    it('renders logo', () => {
        render(<Header />)

        expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    })
})

describe('BrowseHeader', () => {
    it('renders logo', () => {
        render(<Header />)

        expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    })

    it('renders sign out button', () => {
        render(<BrowseHeader />)

        expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
    })

    it('calls logoutUser function once sign out button is clicked', () => {
        const logOutSpy = vi.spyOn(logoutUserModule, 'logoutUser');
        
        render(<BrowseHeader />);
        const signOutButton = screen.getByRole('button', { name: /sign out/i });
        fireEvent.click(signOutButton);

        expect(logOutSpy).toHaveBeenCalled();
    })
})

