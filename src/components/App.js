import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList';

const movies = [{
  id: 1,
  name: 'Terminator 2: Judgment Day',
  year: '1991'
},{
  id: 2,
  name: 'World War Z',
  year: '2013'
},{
  id: 3,
  name: 'Prometheus',
  year: '2012'
},{
  id: 4,
  name: 'Secondhand Lions',
  year: '2003'
},{
  id: 5,
  name: 'Because of Winn-Dixie',
  year: '2005'
}]

export default class App extends React.Component {
    render() {
        return(
          <div>
            <h1>Movie List</h1>
            <MovieList movies={this.props.movies}/>
          </div>
        );
    }
}

ReactDOM.render(<App movies={movies}/>,
  document.getElementById('root'));
