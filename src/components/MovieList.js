import React from 'react';
import Movie from './Movie';
import Search from './Search';

export default class MovieList extends React.Component {
 
    render() {
        return(
          <div>
            <ul>
              {this.props.movies.map((movie) => {
                  return <Movie movie={movie} key={movie.id}/>
                })}
                <Search />
            </ul>
          </div>
        );
    }
}