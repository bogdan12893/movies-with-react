import React from 'react';
import Movie from './Movie';
import Search from './Search';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItem: ''
    };
    
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ searchItem: event.target.value });
  }

  render() {
    let filteredMovies = this.props.movies
      .filter(movie => {
        return movie.name.toLowerCase().indexOf(this.state.searchItem) !== -1;
      });
    
    return (
      <div>
        <ul>
          {filteredMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />
          })}
          <Search onSearch={this.updateSearch} />
        </ul>
      </div>
    );
  }
}