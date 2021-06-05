import { render, screen } from '@testing-library/react';
import Department from './Department';

test('test max-klein application', () => {
    render(<Department />);
    const linkElement = screen.getByText(/Insurance Department/i);
    expect(linkElement).toBeInTheDocument();
});