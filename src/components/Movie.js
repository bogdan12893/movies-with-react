import React from 'react';

export default class Movie extends React.Component {
    render() {
        return(
          <div>
              <li>
                {this.props.movie.name} {this.props.movie.year}
              </li>
          </div>
        );
    }
}