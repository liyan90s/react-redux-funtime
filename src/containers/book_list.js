import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; 

class BookList extends React.Component {
  __renderBooks() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={ book.title } 
          className="list-group-item"
          onClick={ () => this.props.selectBook(book) }>
          { book.title }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="col-sm-4 list-group">
        {this.__renderBooks()}
      </ul> 
    );
  }
}

// whatever return will show up as props inside BookList
function mapAppStateToProps(state) {
  return {
    books: state.books
  }
}

// whatever return will show up as props inside BookList
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, it should be dispatched/passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to be a container, it needs to know about
// the states, the new dispatch method: selectBook. Make it available as props 
export default connect(mapAppStateToProps, mapDispatchToProps)(BookList);