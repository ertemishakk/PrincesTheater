import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MoviesTopBar from './MoviesTopBar';


const testRefreshMovies = jest.fn()


test('should render lastUpdate passed into MoviesTopBar component ', () => {
    render(<MoviesTopBar lastUpdate='12 December 2021' />)
    const lastUpdatedElement = screen.getByText(/12 December 2021/)
    expect(lastUpdatedElement).toBeInTheDocument()
});


describe("Refresh Button", () => {
    test('check if refresh button works', () => {
        render(<MoviesTopBar lastUpdate='12 December 2021' refreshMovies={testRefreshMovies} />)
        const refreshButton = screen.getByTitle('refresh-tooltip')
        fireEvent.click(refreshButton)
        expect(testRefreshMovies).toHaveBeenCalledTimes(1)
    })
})