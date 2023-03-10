/* eslint-disable no-undef */
import makeRequest from '..';
import axios from 'axios';

jest.mock('axios');

describe('makeRequest', () => {
    const mockAxios = axios;
    const mockNavigate = jest.fn();
    afterEach(() => {
        mockAxios.mockReset();
        mockNavigate.mockReset();
    });
    it('should return data', async () => {
        const mockResponse = { data: 'data' };
        mockAxios.mockResolvedValue(mockResponse);
        const response = await makeRequest({}, mockNavigate);
        expect(response).toEqual('data');
    });
    it('should throw error with Navigate', async () => {
        const mockError = { response: { status: 401, data: { error: 'error' } } };
        mockAxios.mockRejectedValue(mockError);
        await expect(makeRequest({}, mockNavigate)).rejects.toThrow('error');
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
    it('should throw error without Navigate', async () => {
        const mockError = { response: { status: 500, data: { error: 'error' } } };
        mockAxios.mockRejectedValue(mockError);
        await expect(makeRequest({}, mockNavigate)).rejects.toThrow('error');
        expect(mockNavigate).not.toHaveBeenCalled();
    });
});

