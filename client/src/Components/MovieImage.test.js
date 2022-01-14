import React from 'react';
import { render } from '@testing-library/react';
import MovieImage from './MovieImage';

describe("Check Images", () => {
    let testMovie = {
        Actors: 'Ishak Ertem',
        ID: 'ISHAK123',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
        Title: 'Solo: A Star Wars Story',
        Type: 'movie',
        cinemaWorldPrice: 24,
        filmWorldPrice: 22
    }

    test('should render image', () => {
        const { container } = render(<MovieImage movie={testMovie} />)
        expect(container.getElementsByClassName('movie-image').length).toBe(1)
    });
})


