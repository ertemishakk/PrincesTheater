import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesErrors from './MoviesErrors';





describe("MoviesErrors", () => {
    let testError = {
        status: 503,
        data: {
            message: 'Bad Getaway'
        }

    }
    test('should render error passed into MoviesErrors component ', () => {
        render(<MoviesErrors error={testError} />)
        const errorStatus = screen.getByText(/503/)
        expect(errorStatus).toBeInTheDocument()

    });


    test('should render errors passed into MoviesErrors component ', () => {
        render(<MoviesErrors error={testError} />)
        const errorMessage = screen.getByText(/Bad Getaway/)
        expect(errorMessage).toBeInTheDocument()
    });


    test('check if MoviesErrors component is visible to the user', () => {
        render(<MoviesErrors error={testError} />)
        const errorMessage = screen.getByText(/Bad Getaway/)
        expect(errorMessage).toBeVisible()
    });
})





