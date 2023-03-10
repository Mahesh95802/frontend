/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import React from 'react';
import Header from '..';

describe('Header', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Header title={'Hello World!!'}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});