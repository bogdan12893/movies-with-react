import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    render() {
      console.log(this.props.movies);
        return(
          <div>
            <ul>
              {this.props.movies.map((movie)=>{
                  return <Movie movie={movie} key={movie.id}/>
                })}
            </ul>
          </div>
        );
    }
}
