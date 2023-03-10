import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('axios');

test('renders App correctly', () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
