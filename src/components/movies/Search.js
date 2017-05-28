import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  render() {
    return (
      <input type="text"
        placeholder='Search movies...'
        onChange={this.props.onSearch} />
    );
  }
}
