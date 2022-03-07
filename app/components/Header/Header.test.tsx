// Testing library
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// App
import Header from './'

describe('Home page', () => {
    it('renders a heading', () => {
        // Arrange
        render(<Header />, { wrapper: MemoryRouter });
        // Act
        const heading = screen.getByRole('heading', {
            name: /Bytes URL Shortener/i,
        });
        // Assert
        expect(heading).toBeInTheDocument();
    });
});
