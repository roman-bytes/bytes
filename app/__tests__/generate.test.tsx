// Testing library
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// App
import Generate from '~/routes/generate';

jest.mock('remix', () => ({
    useActionData: () => ({
        'shortUrl': 'asdh'
    })
}));

describe('Generate page', () => {
    it('renders input', () => {
        // Arrange
        render(<Generate />, { wrapper: MemoryRouter });
        // Act
        const input = screen.getByLabelText("URL");
        // Assert
        expect(input).toBeInTheDocument();
    });

    it('should render compile url section', () => {
       render(<Generate />, { wrapper: MemoryRouter });
       const text = screen.getByText("Your byte sized URL");

       expect(text).toBeInTheDocument();
    });
});
