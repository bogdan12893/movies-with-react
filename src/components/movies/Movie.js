import React from 'react';
import './Movie.css';

export default class Movie extends React.Component {  
    render() {
        return(
            <div className="container-list">
              <li className="movies-li">
                <p><span className="bold-text">Name:</span> {this.props.movie.name}</p>
              </li>
              <li className="movies-li">
                <p><span className="bold-text">Year:</span> {this.props.movie.year}</p>
              </li>
            </div>
        );
    }
}
