import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList'
import NavBar from './Components/NavBar'


function App() {
  return (
    <div className="App" >
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
