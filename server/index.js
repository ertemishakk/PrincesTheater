const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

app.use(express.json({ extended: false }))
app.use(cors());


app.get('/getMovies', (req, res) => {
    axios.all([
        axios.get('https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies', {
            headers: {
                "x-api-key": process.env.MOVIES_API_KEY
            }
        }),
        axios.get('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies', {
            headers: {
                "x-api-key": process.env.MOVIES_API_KEY
            }
        })
    ])
        .then(axios.spread((cinemarWorldResponse, filmworldResponse) => {

            let movies = cinemarWorldResponse.data.Movies.map((movie, index) => [movie, filmworldResponse.data.Movies[index]])

            res.json(movies)
        }))
        .catch(err => {
            return res.status(err.response.status).json(err)
        })
})




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})