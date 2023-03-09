import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '..';

describe('NotFoundPage', () => {
    it('should render the page', () => {
        const { asFragment } = render(<NotFoundPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});