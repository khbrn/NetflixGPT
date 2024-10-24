import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';

import Login from '../Login';
import Browse from '../Browse';

describe('Body', () => {
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

    it('renders the Browser component at /browse path', () => {
        render(
            <MemoryRouter initialEntries={['/browse']}>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/browse' element={<Browse />} />
                </Routes>
            </MemoryRouter>
        );

        expect(screen.getByText(/browse/i)).toBeInTheDocument()
    })
})
