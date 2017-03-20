import React from 'React';

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
  }

  render() {
    return (
      <form onSubmit={this.__handleFormSubmit} className="input-group">
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

export default SearchBar;