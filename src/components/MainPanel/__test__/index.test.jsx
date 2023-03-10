/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import MainPanel from '..';

describe('MainPanel', () => {
    it('should render collections and not content-types', () => {
        // const mockContentTypes = [
        //     {
        //         'id': 8,
        //         'name': 'Hello',
        //         'ContentSchemas': [
        //             {
        //                 'id': 19,
        //                 'updatedAt': '2023-03-10T04:12:03.016Z'
        //             }
        //         ],
        //         'Collections': []
        //     }
        // ];
        const mockCollections = [
            {
                'id': 2,
                'CollectionValues': [
                    {
                        'id': 2,
                        'value': 'Hii',
                        'ContentSchema': {
                            'id': 1
                        }
                    },
                ]
            }
        ];
        const { getByTestId, queryByTestId } = render(<MainPanel collections={mockCollections} contentTypeId={1} title="Hello"/>);
        expect(getByTestId('collections')).toBeInTheDocument();
        expect(queryByTestId('content-types')).not.toBeInTheDocument();
    });
    it('should render content-types and not collections', () => {
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
        const { getByTestId, queryByTestId } = render(<MainPanel contentTypes={mockContentTypes} contentTypeId={1} title="Hello"/>);
        expect(queryByTestId('collections')).not.toBeInTheDocument();
        expect(getByTestId('content-types')).toBeInTheDocument();
    });
});