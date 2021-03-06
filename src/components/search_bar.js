import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  handleOnChange(event) {    
    this.setState({term: event.target.value});
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-bar col-md-6">
        <div className="input-group">
          <input 
            className="form-control"
            value={this.state.term}
            onChange={(event) => this.handleOnChange(event)} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Go!</button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;