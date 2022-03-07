// Testing library
import {getByLabelText, getByText, getByTitle, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// App
import Logo from './'

describe('Logo Component', () => {
    it('renders', () => {
        render(<Logo />, { wrapper: MemoryRouter });
        const logoText = screen.getByTitle('Roman Bytes Logo');
        expect(logoText).toBeInTheDocument();
    });
});
