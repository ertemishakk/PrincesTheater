import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieLabels from './MovieLabels';





describe("MovieLabels", () => {
    const testMovie = {
        Actors: 'Ishak Ertem',
        ID: 'ISHAK123',
        Poster: 'https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg',
        Title: 'Solo: A Star Wars Story',
        Type: 'movie',
        cinemaWorldPrice: 24,
        filmWorldPrice: 22
    }

    test('should render movie title', () => {
        render(<MovieLabels title={testMovie.Title} />)

        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent(testMovie.Title)

    });

    test('should render movie release date', () => {
        render(<MovieLabels title={testMovie.Title} releaseDate='Tuesday 9th March 2021' movieDuration={120} />)

        const releaseDateElement = screen.getByTestId('release-date')
        expect(releaseDateElement).toHaveTextContent("Tuesday 9th March 2021")

    });

    test('should render movie duration', () => {
        render(<MovieLabels title={testMovie.Title} releaseDate='Tuesday 9th March 2021' movieDuration={120} />)

        const movieDurationElement = screen.getByTestId('movie-duration')
        expect(movieDurationElement).toHaveTextContent(120)

    });



})





