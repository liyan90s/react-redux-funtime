import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.__handleInputChange = this.__handleInputChange.bind(this);
  }

  __handleInputChange(event) {
    this.setState({ term: event.target.value });
  }

  __handleFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.__handleFormSubmit.bind(this)} className="input-group">
        <input 
          className="form-control"
          value={this.state.term}
          onChange={this.__handleInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToState(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToState)(SearchBar);