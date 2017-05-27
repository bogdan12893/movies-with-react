import React from 'react';
export default class Search extends React.Component {

    constructor(){
    super();
    this.state = {
      search: ''
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

    render() {
        return(
              <input type="text"
              value={this.state.search}
              placeholder='Type here'
              onChange={this.updateSearch.bind(this)}
            />
        );
    }
}
