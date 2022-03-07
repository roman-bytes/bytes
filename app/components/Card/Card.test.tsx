import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import Card from './';

describe('Card Comp', () => {
    it('renders with children', () => {
        render(<Card><p>Hello</p></Card>, { wrapper: MemoryRouter });
        const child = screen.getByText('Hello');

        expect(child).toBeInTheDocument();
    })
})
