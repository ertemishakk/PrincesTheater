import React from 'react';
import { render } from '@testing-library/react';
import MovieList from './MovieList';




describe("getMovies", () => {

    test('should render MovieList', () => {
        const { container } = render(<MovieList />)
        expect(container.getElementsByClassName('movie-list').length).toBe(1)
    });

})





