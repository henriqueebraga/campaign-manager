import { render, screen } from '@testing-library/react';
import App from './App';
import { mockLoadDataError, mockLoadDataSuccess } from './utils/testMockData';

jest.mock('./hooks/useLoadData', () => ({
    __esModule: true,
    default: jest.fn(),
}));

const useLoadData = require('./hooks/useLoadData').default;

describe('App component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders assignment heading', () => {
        useLoadData.mockImplementation(mockLoadDataSuccess);
        
        render(<App />);
        const headingElement = screen.getByText(/campaign evaluation tree$/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('displays data when available', () => {
        useLoadData.mockImplementation(mockLoadDataSuccess);
        
        render(<App />);
        const campaign1 = screen.getByText(/Campaign 1/i);
        const campaign2 = screen.getByText(/Campaign 2/i);
        expect(campaign1).toBeInTheDocument();
        expect(campaign2).toBeInTheDocument();
    });

    test('displays error message when data fetching fails', () => {
        useLoadData.mockImplementation(mockLoadDataError);
        
        render(<App />);
        const errorElement = screen.getByText(/An error occurred while fetching data./i);
        expect(errorElement).toBeInTheDocument();
    });

    
});
