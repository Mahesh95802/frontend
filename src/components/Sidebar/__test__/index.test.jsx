/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '..';

describe('Sidebar', () => {
    it('should render correctly', () => {
        const mockContentTypes = [
            {
                'id': 8,
                'name': 'Hello',
                'ContentSchemas': [
                    {
                        'id': 19,
                        'updatedAt': '2023-03-10T04:12:03.016Z'
                    }
                ],
                'Collections': []
            }
        ];
        const { asFragment } = render(<Sidebar contentTypes={mockContentTypes}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with selected', () => {
        const mockContentTypes = [
            {
                'id': 8,
                'name': 'Hello',
                'ContentSchemas': [
                    {
                        'id': 19,
                        'updatedAt': '2023-03-10T04:12:03.016Z'
                    }
                ],
                'Collections': []
            }
        ];
        const { asFragment } = render(<Sidebar contentTypes={mockContentTypes} selected={8}/>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('should navigate to home when click on "CONTENT TYPE BUILDER"', () => {
        const mockContentTypes = [
            {
                'id': 8,
                'name': 'Hello',
                'ContentSchemas': [
                    {
                        'id': 19,
                        'updatedAt': '2023-03-10T04:12:03.016Z'
                    }
                ],
                'Collections': []
            }
        ];
        const mockNavigate = jest.fn();
        const { getByText } = render(<Sidebar contentTypes={mockContentTypes} navigate={mockNavigate}/>);
        expect(mockNavigate).not.toHaveBeenCalled();
        getByText('CONTENT TYPE BUILDER').click();
        expect(mockNavigate).toHaveBeenCalledWith('/home');
    });
    it('should navigate to content type when click on "CONTENT TYPE"', () => {
        const mockContentTypes = [
            {
                'id': 8,
                'name': 'Hello',
                'ContentSchemas': [
                    {
                        'id': 19,
                        'updatedAt': '2023-03-10T04:12:03.016Z'
                    }
                ],
                'Collections': []
            }
        ];
        const mockNavigate = jest.fn();
        const { getByText } = render(<Sidebar contentTypes={mockContentTypes} navigate={mockNavigate}/>);
        expect(mockNavigate).not.toHaveBeenCalled();
        getByText('Hello').click();
        expect(mockNavigate).toHaveBeenCalledWith('/content-type/8');
    });
});