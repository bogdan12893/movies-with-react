import React from 'react';
import Movie from './Movie';
import Search from './Search';
import './MovieList.css';

export default class MovieList extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      searchItem: '',
      movies: props.movies
    };
    
    this.updateSearch = this.updateSearch.bind(this);
  }
  
  updateSearch(event) {
    this.setState({ searchItem: event.target.value });
  }

  filterMovieListBySearchItem = () => {
    return this.state.movies.filter(movie => {
      return movie.name.toLowerCase().indexOf(this.state.searchItem.toLocaleLowerCase()) !== -1;
    });
  }

  renderMovieList = () => {
    let filteredMovies = this.filterMovieListBySearchItem();
    return filteredMovies.map(movie => <Movie movie={movie} key={movie.id} /> );
  }

  render() {
    return (
      <div>
        <ul>
          <Search onSearch={this.updateSearch} />
          { this.renderMovieList() }
        </ul>
      </div>
    );
  }
}