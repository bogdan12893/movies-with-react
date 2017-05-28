import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './movies/MovieList';
import { movies } from '../constants/ItemList';
import './App.css';

export default class App extends React.Component {
    render() {
        return(
          <div className="container">
              <div className="container-one">
                <h1 className="movie-list-header">Movie List</h1>
              </div>

              <div className="container-two">
                <MovieList movies={movies}/>
              </div> 
          </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
