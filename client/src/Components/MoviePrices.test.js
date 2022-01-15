import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviePrices from './MoviePrices';

let testMovie = {
    Actors: 'Ishak Ertem',
    ID: 'ISHAK123',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
    Title: 'Solo: A Star Wars Story',
    Type: 'movie',
    cinemaWorldPrice: 24,
    filmWorldPrice: 22
}

test('should render movies passed into MoviePrices component ', () => {
    render(<MoviePrices cwPrice={testMovie.cinemaWorldPrice} fwPrice={testMovie.filmWorldPrice} />)
    const cinemaWorldPriceElement = screen.getByText(/24/)
    expect(cinemaWorldPriceElement).toBeInTheDocument()
});
