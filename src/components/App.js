import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';
import { movies } from '../constants/ItemList';

export default class App extends React.Component {
    render() {
        return(
          <div>
            <h1>Movie List</h1>
            <MovieList movies={movies}/>
          </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
