/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Modal from '..';

describe('Modal', () => {
    it('should render correctly', () => {
        const { asFragment } = render(<Modal><p>Hii</p></Modal>);
        expect(asFragment()).toMatchSnapshot();
    });
});